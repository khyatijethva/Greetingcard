function gi3dEvent(t, e) {
    var n = document.createEvent("Event");
    n.initEvent(t, !0, !0), (n.data = e), document.dispatchEvent(n);
}
function gi3dDebug() {
    "undefined" != typeof gi3d_debug_mode && !0 === window.gi3d_debug_mode && console.debug("🐛", [].slice.call(arguments).join(" "));
}
function gi3dInit() {
    "use strict";
    function t() {
        n.one("load", function () {
            !(function () {
                if (r < i) return void r++;
                var t = window.performance.now(),
                    n = e > t ? Math.floor(e - t) : 0;
                setTimeout(function () {
                    gi3dDebug("openEnvelope()", r, "loadingRemainder (ms)", n),
                        $(".layout").addClass("layout--is-ready"),
                        setTimeout(function () {
                            $(".loading").addClass("loading--is-loaded"), $(".envelope").addClass("envelope--is-shown");
                        }, 100),
                        setTimeout(function () {
                            $(".layout").addClass("overflow--visible"), $(".envelope").removeClass("envelope--is-shown"), $(".envelope").addClass("envelope--is-opening");
                        }, 4e3),
                        setTimeout(function () {
                            $(".envelope").removeClass("envelope--is-opening"), $(".envelope").addClass("envelope--is-opened");
                        }, 5100),
                        setTimeout(function () {
                            gi3dEvent("gi3d-card-ready");
                        }, 7e3);
                }, n);
            })();
        }).each(function () {
            this.complete && $(this).load();
        });
    }
    gi3dDebug("envelope.js was loaded");
    var e = 4e3,
        n = (window.performance.now(), $("img.preload")),
        i = n.length,
        r = 1;
    gi3dDebug(i, "total preloaded images"),
        t(),
        $("#rerun-toggle").click(function () {
            $(".loading").removeClass("is-loaded"),
                $(".layout").removeClass("layout--is-ready overflow--visible"),
                $(".envelope").removeClass("envelope--is-shown"),
                $(".envelope").removeClass("envelope--is-opening"),
                $(".envelope").removeClass("envelope--is-opened"),
                $(".card").removeClass("is-gesture-enabled").removeClass(removeAllFrameClasses),
                (r = 1),
                t();
        });
}
function removeAllFrameClasses() {
    return this.className
        .split(" ")
        .filter(function (t) {
            return t.match(/frame-\d{1,3}/);
        })
        .join(" ");
}
(function (t, e, n, i) {
    "use strict";
    function r(t, e, n) {
        return setTimeout(c(t, n), e);
    }
    function s(t, e, n) {
        return !!Array.isArray(t) && (o(t, n[e], n), !0);
    }
    function o(t, e, n) {
        var r;
        if (t)
            if (t.forEach) t.forEach(e, n);
            else if (t.length !== i) for (r = 0; r < t.length; ) e.call(n, t[r], r, t), r++;
            else for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t);
    }
    function a(e, n, i) {
        var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function () {
            var n = new Error("get-stack-trace"),
                i =
                    n && n.stack
                        ? n.stack
                              .replace(/^[^\(]+?[\n$]/gm, "")
                              .replace(/^\s+at\s+/gm, "")
                              .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                        : "Unknown Stack Trace",
                s = t.console && (t.console.warn || t.console.log);
            return s && s.call(t.console, r, i), e.apply(this, arguments);
        };
    }
    function u(t, e, n) {
        var i,
            r = e.prototype;
        ((i = t.prototype = Object.create(r)).constructor = t), (i._super = r), n && et(i, n);
    }
    function c(t, e) {
        return function () {
            return t.apply(e, arguments);
        };
    }
    function l(t, e) {
        return typeof t == ht ? t.apply((e && e[0]) || i, e) : t;
    }
    function h(t, e) {
        return t === i ? e : t;
    }
    function p(t, e, n) {
        o(v(e), function (e) {
            t.addEventListener(e, n, !1);
        });
    }
    function d(t, e, n) {
        o(v(e), function (e) {
            t.removeEventListener(e, n, !1);
        });
    }
    function f(t, e) {
        for (; t; ) {
            if (t == e) return !0;
            t = t.parentNode;
        }
        return !1;
    }
    function m(t, e) {
        return t.indexOf(e) > -1;
    }
    function v(t) {
        return t.trim().split(/\s+/g);
    }
    function g(t, e, n) {
        if (t.indexOf && !n) return t.indexOf(e);
        for (var i = 0; i < t.length; ) {
            if ((n && t[i][n] == e) || (!n && t[i] === e)) return i;
            i++;
        }
        return -1;
    }
    function y(t) {
        return Array.prototype.slice.call(t, 0);
    }
    function T(t, e, n) {
        for (var i, r = [], s = [], o = 0; o < t.length; ) g(s, (i = e ? t[o][e] : t[o])) < 0 && r.push(t[o]), (s[o] = i), o++;
        return (
            n &&
                (r = e
                    ? r.sort(function (t, n) {
                          return t[e] > n[e];
                      })
                    : r.sort()),
            r
        );
    }
    function E(t, e) {
        for (var n, r, s = e[0].toUpperCase() + e.slice(1), o = 0; o < ct.length; ) {
            if ((r = (n = ct[o]) ? n + s : e) in t) return r;
            o++;
        }
        return i;
    }
    function b(e) {
        var n = e.ownerDocument || e;
        return n.defaultView || n.parentWindow || t;
    }
    function w(t, e) {
        var n = this;
        (this.manager = t),
            (this.callback = e),
            (this.element = t.element),
            (this.target = t.options.inputTarget),
            (this.domHandler = function (e) {
                l(t.options.enable, [t]) && n.handler(e);
            }),
            this.init();
    }
    function C(t, e, n) {
        var i = n.pointers.length,
            r = n.changedPointers.length,
            s = e & bt && i - r == 0,
            o = e & (Ct | _t) && i - r == 0;
        (n.isFirst = !!s),
            (n.isFinal = !!o),
            s && (t.session = {}),
            (n.eventType = e),
            (function (t, e) {
                var n,
                    i,
                    r = t.session,
                    s = e.pointers,
                    o = s.length;
                r.firstInput || (r.firstInput = I(e)), o > 1 && !r.firstMultiple ? (r.firstMultiple = I(e)) : 1 === o && (r.firstMultiple = !1);
                var a = r.firstInput,
                    u = r.firstMultiple,
                    c = u ? u.center : a.center,
                    l = (e.center = A(s));
                (e.timeStamp = ft()),
                    (e.deltaTime = e.timeStamp - a.timeStamp),
                    (e.angle = F(c, l)),
                    (e.distance = M(c, l)),
                    _(r, e),
                    (e.offsetDirection = P(e.deltaX, e.deltaY)),
                    (n = S(e.deltaTime, e.deltaX, e.deltaY)),
                    (e.overallVelocityX = n.x),
                    (e.overallVelocityY = n.y),
                    (e.overallVelocity = dt(n.x) > dt(n.y) ? n.x : n.y),
                    (e.scale = u
                        ? (function (t, e) {
                              return M(e[0], e[1], Rt) / M(t[0], t[1], Rt);
                          })(u.pointers, s)
                        : 1),
                    (e.rotation = u
                        ? (function (t, e) {
                              return F(e[1], e[0], Rt) + F(t[1], t[0], Rt);
                          })(u.pointers, s)
                        : 0),
                    (e.maxPointers = r.prevInput ? (e.pointers.length > r.prevInput.maxPointers ? e.pointers.length : r.prevInput.maxPointers) : e.pointers.length),
                    D(r, e),
                    (i = t.element),
                    f(e.srcEvent.target, i) && (i = e.srcEvent.target),
                    (e.target = i);
            })(t, n),
            t.emit("hammer.input", n),
            t.recognize(n),
            (t.session.prevInput = n);
    }
    function _(t, e) {
        var n = e.center,
            i = t.offsetDelta || {},
            r = t.prevDelta || {},
            s = t.prevInput || {};
        (e.eventType === bt || s.eventType === Ct) && ((r = t.prevDelta = { x: s.deltaX || 0, y: s.deltaY || 0 }), (i = t.offsetDelta = { x: n.x, y: n.y })), (e.deltaX = r.x + (n.x - i.x)), (e.deltaY = r.y + (n.y - i.y));
    }
    function D(t, e) {
        var n,
            r,
            s,
            o,
            a = t.lastInterval || e,
            u = e.timeStamp - a.timeStamp;
        if (e.eventType != _t && (u > Et || a.velocity === i)) {
            var c = e.deltaX - a.deltaX,
                l = e.deltaY - a.deltaY,
                h = S(u, c, l);
            (r = h.x), (s = h.y), (n = dt(h.x) > dt(h.y) ? h.x : h.y), (o = P(c, l)), (t.lastInterval = e);
        } else (n = a.velocity), (r = a.velocityX), (s = a.velocityY), (o = a.direction);
        (e.velocity = n), (e.velocityX = r), (e.velocityY = s), (e.direction = o);
    }
    function I(t) {
        for (var e = [], n = 0; n < t.pointers.length; ) (e[n] = { clientX: pt(t.pointers[n].clientX), clientY: pt(t.pointers[n].clientY) }), n++;
        return { timeStamp: ft(), pointers: e, center: A(e), deltaX: t.deltaX, deltaY: t.deltaY };
    }
    function A(t) {
        var e = t.length;
        if (1 === e) return { x: pt(t[0].clientX), y: pt(t[0].clientY) };
        for (var n = 0, i = 0, r = 0; r < e; ) (n += t[r].clientX), (i += t[r].clientY), r++;
        return { x: pt(n / e), y: pt(i / e) };
    }
    function S(t, e, n) {
        return { x: e / t || 0, y: n / t || 0 };
    }
    function P(t, e) {
        return t === e ? Dt : dt(t) >= dt(e) ? (t < 0 ? It : At) : e < 0 ? St : Pt;
    }
    function M(t, e, n) {
        n || (n = xt);
        var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
        return Math.sqrt(i * i + r * r);
    }
    function F(t, e, n) {
        n || (n = xt);
        var i = e[n[0]] - t[n[0]],
            r = e[n[1]] - t[n[1]];
        return (180 * Math.atan2(r, i)) / Math.PI;
    }
    function N() {
        (this.evEl = zt), (this.evWin = Xt), (this.pressed = !1), w.apply(this, arguments);
    }
    function x() {
        (this.evEl = Ht), (this.evWin = Lt), w.apply(this, arguments), (this.store = this.manager.session.pointerEvents = []);
    }
    function R() {
        (this.evTarget = Wt), (this.evWin = $t), (this.started = !1), w.apply(this, arguments);
    }
    function O() {
        (this.evTarget = ot), (this.targetIds = {}), w.apply(this, arguments);
    }
    function z() {
        w.apply(this, arguments);
        var t = c(this.handler, this);
        (this.touch = new O(this.manager, t)), (this.mouse = new N(this.manager, t)), (this.primaryTouch = null), (this.lastTouches = []);
    }
    function X(t, e) {
        t & bt ? ((this.primaryTouch = e.changedPointers[0].identifier), Y.call(this, e)) : t & (Ct | _t) && Y.call(this, e);
    }
    function Y(t) {
        var e,
            n,
            i = t.changedPointers[0];
        i.identifier === this.primaryTouch &&
            ((e = { x: i.clientX, y: i.clientY }),
            this.lastTouches.push(e),
            (n = this.lastTouches),
            setTimeout(function () {
                var t = n.indexOf(e);
                t > -1 && n.splice(t, 1);
            }, at));
    }
    function q(t, e) {
        (this.manager = t), this.set(e);
    }
    function H(t) {
        (this.options = et({}, this.defaults, t || {})), (this.id = rt++), (this.manager = null), (this.options.enable = h(this.options.enable, !0)), (this.state = te), (this.simultaneous = {}), (this.requireFail = []);
    }
    function L(t) {
        return t & se ? "cancel" : t & ie ? "end" : t & ne ? "move" : t & ee ? "start" : "";
    }
    function k(t) {
        return t == Pt ? "down" : t == St ? "up" : t == It ? "left" : t == At ? "right" : "";
    }
    function W(t, e) {
        var n = e.manager;
        return n ? n.get(t) : t;
    }
    function $() {
        H.apply(this, arguments);
    }
    function j() {
        $.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function U() {
        $.apply(this, arguments);
    }
    function V() {
        H.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function G() {
        $.apply(this, arguments);
    }
    function Z() {
        $.apply(this, arguments);
    }
    function B() {
        H.apply(this, arguments), (this.pTime = !1), (this.pCenter = !1), (this._timer = null), (this._input = null), (this.count = 0);
    }
    function Q(t, e) {
        return ((e = e || {}).recognizers = h(e.recognizers, Q.defaults.preset)), new J(t, e);
    }
    function J(t, e) {
        (this.options = et({}, Q.defaults, e || {})),
            (this.options.inputTarget = this.options.inputTarget || t),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = t),
            (this.input = (function (t) {
                var e = t.options.inputClass;
                return new (e || (vt ? x : gt ? O : mt ? z : N))(t, C);
            })(this)),
            (this.touchAction = new q(this, this.options.touchAction)),
            K(this, !0),
            o(
                this.options.recognizers,
                function (t) {
                    var e = this.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
                },
                this
            );
    }
    function K(t, e) {
        var n,
            i = t.element;
        i.style &&
            (o(t.options.cssProps, function (r, s) {
                (n = E(i.style, s)), e ? ((t.oldCssProps[n] = i.style[n]), (i.style[n] = r)) : (i.style[n] = t.oldCssProps[n] || "");
            }),
            e || (t.oldCssProps = {}));
    }
    function tt(t, n) {
        var i = e.createEvent("Event");
        i.initEvent(t, !0, !0), (i.gesture = n), n.target.dispatchEvent(i);
    }
    var et,
        nt,
        it,
        rt,
        st,
        ot,
        at,
        ut,
        ct = ["", "webkit", "Moz", "MS", "ms", "o"],
        lt = e.createElement("div"),
        ht = "function",
        pt = Math.round,
        dt = Math.abs,
        ft = Date.now;
    (et =
        "function" != typeof Object.assign
            ? function (t) {
                  var e, n, r, s;
                  if (t === i || null === t) throw new TypeError("Cannot convert undefined or null to object");
                  for (e = Object(t), n = 1; n < arguments.length; n++) if ((r = arguments[n]) !== i && null !== r) for (s in r) r.hasOwnProperty(s) && (e[s] = r[s]);
                  return e;
              }
            : Object.assign),
        (nt = a(
            function (t, e, n) {
                for (var r = Object.keys(e), s = 0; s < r.length; ) (!n || (n && t[r[s]] === i)) && (t[r[s]] = e[r[s]]), s++;
                return t;
            },
            "extend",
            "Use `assign`."
        )),
        (it = a(
            function (t, e) {
                return nt(t, e, !0);
            },
            "merge",
            "Use `assign`."
        )),
        (rt = 1);
    var mt = "ontouchstart" in t,
        vt = E(t, "PointerEvent") !== i,
        gt = mt && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        yt = "touch",
        Tt = "mouse",
        Et = 25,
        bt = 1,
        wt = 2,
        Ct = 4,
        _t = 8,
        Dt = 1,
        It = 2,
        At = 4,
        St = 8,
        Pt = 16,
        Mt = It | At,
        Ft = St | Pt,
        Nt = Mt | Ft,
        xt = ["x", "y"],
        Rt = ["clientX", "clientY"];
    w.prototype = {
        handler: function () {},
        init: function () {
            this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(b(this.element), this.evWin, this.domHandler);
        },
        destroy: function () {
            this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(b(this.element), this.evWin, this.domHandler);
        },
    };
    var Ot = { mousedown: bt, mousemove: wt, mouseup: Ct },
        zt = "mousedown",
        Xt = "mousemove mouseup";
    u(N, w, {
        handler: function (t) {
            var e = Ot[t.type];
            e & bt && 0 === t.button && (this.pressed = !0),
                e & wt && 1 !== t.which && (e = Ct),
                this.pressed && (e & Ct && (this.pressed = !1), this.callback(this.manager, e, { pointers: [t], changedPointers: [t], pointerType: Tt, srcEvent: t }));
        },
    });
    var Yt = { pointerdown: bt, pointermove: wt, pointerup: Ct, pointercancel: _t, pointerout: _t },
        qt = { 2: yt, 3: "pen", 4: Tt, 5: "kinect" },
        Ht = "pointerdown",
        Lt = "pointermove pointerup pointercancel";
    t.MSPointerEvent && !t.PointerEvent && ((Ht = "MSPointerDown"), (Lt = "MSPointerMove MSPointerUp MSPointerCancel")),
        u(x, w, {
            handler: function (t) {
                var e = this.store,
                    n = !1,
                    i = t.type.toLowerCase().replace("ms", ""),
                    r = Yt[i],
                    s = qt[t.pointerType] || t.pointerType,
                    o = s == yt,
                    a = g(e, t.pointerId, "pointerId");
                r & bt && (0 === t.button || o) ? a < 0 && (e.push(t), (a = e.length - 1)) : r & (Ct | _t) && (n = !0),
                    a < 0 || ((e[a] = t), this.callback(this.manager, r, { pointers: e, changedPointers: [t], pointerType: s, srcEvent: t }), n && e.splice(a, 1));
            },
        });
    var kt = { touchstart: bt, touchmove: wt, touchend: Ct, touchcancel: _t },
        Wt = "touchstart",
        $t = "touchstart touchmove touchend touchcancel";
    u(R, w, {
        handler: function (t) {
            var e,
                n = kt[t.type];
            n === bt && (this.started = !0),
                this.started &&
                    ((e = function (t, e) {
                        var n = y(t.touches),
                            i = y(t.changedTouches);
                        return e & (Ct | _t) && (n = T(n.concat(i), "identifier", !0)), [n, i];
                    }.call(this, t, n)),
                    n & (Ct | _t) && e[0].length - e[1].length == 0 && (this.started = !1),
                    this.callback(this.manager, n, { pointers: e[0], changedPointers: e[1], pointerType: yt, srcEvent: t }));
        },
    }),
        (st = { touchstart: bt, touchmove: wt, touchend: Ct, touchcancel: _t }),
        (ot = "touchstart touchmove touchend touchcancel"),
        u(O, w, {
            handler: function (t) {
                var e = st[t.type],
                    n = function (t, e) {
                        var n = y(t.touches),
                            i = this.targetIds;
                        if (e & (bt | wt) && 1 === n.length) return (i[n[0].identifier] = !0), [n, n];
                        var r,
                            s,
                            o = y(t.changedTouches),
                            a = [],
                            u = this.target;
                        if (
                            ((s = n.filter(function (t) {
                                return f(t.target, u);
                            })),
                            e === bt)
                        )
                            for (r = 0; r < s.length; ) (i[s[r].identifier] = !0), r++;
                        for (r = 0; r < o.length; ) i[o[r].identifier] && a.push(o[r]), e & (Ct | _t) && delete i[o[r].identifier], r++;
                        return a.length ? [T(s.concat(a), "identifier", !0), a] : void 0;
                    }.call(this, t, e);
                n && this.callback(this.manager, e, { pointers: n[0], changedPointers: n[1], pointerType: yt, srcEvent: t });
            },
        }),
        (at = 2500),
        (ut = 25),
        u(z, w, {
            handler: function (t, e, n) {
                var i = n.pointerType == yt,
                    r = n.pointerType == Tt;
                if (!r || !n.sourceCapabilities || !n.sourceCapabilities.firesTouchEvents) {
                    if (i) X.call(this, e, n);
                    else if (
                        r &&
                        function (t) {
                            for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                                var r = this.lastTouches[i],
                                    s = Math.abs(e - r.x),
                                    o = Math.abs(n - r.y);
                                if (s <= ut && o <= ut) return !0;
                            }
                            return !1;
                        }.call(this, n)
                    )
                        return;
                    this.callback(t, e, n);
                }
            },
            destroy: function () {
                this.touch.destroy(), this.mouse.destroy();
            },
        });
    var jt = E(lt.style, "touchAction"),
        Ut = jt !== i,
        Vt = "compute",
        Gt = "auto",
        Zt = "manipulation",
        Bt = "none",
        Qt = "pan-x",
        Jt = "pan-y",
        Kt = (function () {
            if (!Ut) return !1;
            var e = {},
                n = t.CSS && t.CSS.supports;
            return (
                ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (i) {
                    e[i] = !n || t.CSS.supports("touch-action", i);
                }),
                e
            );
        })();
    q.prototype = {
        set: function (t) {
            t == Vt && (t = this.compute()), Ut && this.manager.element.style && Kt[t] && (this.manager.element.style[jt] = t), (this.actions = t.toLowerCase().trim());
        },
        update: function () {
            this.set(this.manager.options.touchAction);
        },
        compute: function () {
            var t = [];
            return (
                o(this.manager.recognizers, function (e) {
                    l(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
                }),
                (function (t) {
                    if (m(t, Bt)) return Bt;
                    var e = m(t, Qt),
                        n = m(t, Jt);
                    return e && n ? Bt : e || n ? (e ? Qt : Jt) : m(t, Zt) ? Zt : Gt;
                })(t.join(" "))
            );
        },
        preventDefaults: function (t) {
            var e = t.srcEvent,
                n = t.offsetDirection;
            if (!this.manager.session.prevented) {
                var i = this.actions,
                    r = m(i, Bt) && !Kt[Bt],
                    s = m(i, Jt) && !Kt[Jt],
                    o = m(i, Qt) && !Kt[Qt];
                if (r) {
                    var a = 1 === t.pointers.length,
                        u = t.distance < 2,
                        c = t.deltaTime < 250;
                    if (a && u && c) return;
                }
                return o && s ? void 0 : r || (s && n & Mt) || (o && n & Ft) ? this.preventSrc(e) : void 0;
            }
            e.preventDefault();
        },
        preventSrc: function (t) {
            (this.manager.session.prevented = !0), t.preventDefault();
        },
    };
    var te = 1,
        ee = 2,
        ne = 4,
        ie = 8,
        re = ie,
        se = 16,
        oe = 32;
    (H.prototype = {
        defaults: {},
        set: function (t) {
            return et(this.options, t), this.manager && this.manager.touchAction.update(), this;
        },
        recognizeWith: function (t) {
            if (s(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = W(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this;
        },
        dropRecognizeWith: function (t) {
            return s(t, "dropRecognizeWith", this) ? this : ((t = W(t, this)), delete this.simultaneous[t.id], this);
        },
        requireFailure: function (t) {
            if (s(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === g(e, (t = W(t, this))) && (e.push(t), t.requireFailure(this)), this;
        },
        dropRequireFailure: function (t) {
            if (s(t, "dropRequireFailure", this)) return this;
            t = W(t, this);
            var e = g(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this;
        },
        hasRequireFailures: function () {
            return this.requireFail.length > 0;
        },
        canRecognizeWith: function (t) {
            return !!this.simultaneous[t.id];
        },
        emit: function (t) {
            function e(e) {
                n.manager.emit(e, t);
            }
            var n = this,
                i = this.state;
            i < ie && e(n.options.event + L(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), i >= ie && e(n.options.event + L(i));
        },
        tryEmit: function (t) {
            if (this.canEmit()) return this.emit(t);
            this.state = oe;
        },
        canEmit: function () {
            for (var t = 0; t < this.requireFail.length; ) {
                if (!(this.requireFail[t].state & (oe | te))) return !1;
                t++;
            }
            return !0;
        },
        recognize: function (t) {
            var e = et({}, t);
            if (!l(this.options.enable, [this, e])) return this.reset(), void (this.state = oe);
            this.state & (re | se | oe) && (this.state = te), (this.state = this.process(e)), this.state & (ee | ne | ie | se) && this.tryEmit(e);
        },
        process: function () {},
        getTouchAction: function () {},
        reset: function () {},
    }),
        u($, H, {
            defaults: { pointers: 1 },
            attrTest: function (t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e;
            },
            process: function (t) {
                var e = this.state,
                    n = t.eventType,
                    i = e & (ee | ne),
                    r = this.attrTest(t);
                return i && (n & _t || !r) ? e | se : i || r ? (n & Ct ? e | ie : e & ee ? e | ne : ee) : oe;
            },
        }),
        u(j, $, {
            defaults: { event: "pan", threshold: 10, pointers: 1, direction: Nt },
            getTouchAction: function () {
                var t = this.options.direction,
                    e = [];
                return t & Mt && e.push(Jt), t & Ft && e.push(Qt), e;
            },
            directionTest: function (t) {
                var e = this.options,
                    n = !0,
                    i = t.distance,
                    r = t.direction,
                    s = t.deltaX,
                    o = t.deltaY;
                return (
                    r & e.direction || (e.direction & Mt ? ((r = 0 === s ? Dt : s < 0 ? It : At), (n = s != this.pX), (i = Math.abs(t.deltaX))) : ((r = 0 === o ? Dt : o < 0 ? St : Pt), (n = o != this.pY), (i = Math.abs(t.deltaY)))),
                    (t.direction = r),
                    n && i > e.threshold && r & e.direction
                );
            },
            attrTest: function (t) {
                return $.prototype.attrTest.call(this, t) && (this.state & ee || (!(this.state & ee) && this.directionTest(t)));
            },
            emit: function (t) {
                (this.pX = t.deltaX), (this.pY = t.deltaY);
                var e = k(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
            },
        }),
        u(U, $, {
            defaults: { event: "pinch", threshold: 0, pointers: 2 },
            getTouchAction: function () {
                return [Bt];
            },
            attrTest: function (t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ee);
            },
            emit: function (t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e;
                }
                this._super.emit.call(this, t);
            },
        }),
        u(V, H, {
            defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
            getTouchAction: function () {
                return [Gt];
            },
            process: function (t) {
                var e = this.options,
                    n = t.pointers.length === e.pointers,
                    i = t.distance < e.threshold,
                    s = t.deltaTime > e.time;
                if (((this._input = t), !i || !n || (t.eventType & (Ct | _t) && !s))) this.reset();
                else if (t.eventType & bt)
                    this.reset(),
                        (this._timer = r(
                            function () {
                                (this.state = re), this.tryEmit();
                            },
                            e.time,
                            this
                        ));
                else if (t.eventType & Ct) return re;
                return oe;
            },
            reset: function () {
                clearTimeout(this._timer);
            },
            emit: function (t) {
                this.state === re && (t && t.eventType & Ct ? this.manager.emit(this.options.event + "up", t) : ((this._input.timeStamp = ft()), this.manager.emit(this.options.event, this._input)));
            },
        }),
        u(G, $, {
            defaults: { event: "rotate", threshold: 0, pointers: 2 },
            getTouchAction: function () {
                return [Bt];
            },
            attrTest: function (t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ee);
            },
        }),
        u(Z, $, {
            defaults: { event: "swipe", threshold: 10, velocity: 0.3, direction: Mt | Ft, pointers: 1 },
            getTouchAction: function () {
                return j.prototype.getTouchAction.call(this);
            },
            attrTest: function (t) {
                var e,
                    n = this.options.direction;
                return (
                    n & (Mt | Ft) ? (e = t.overallVelocity) : n & Mt ? (e = t.overallVelocityX) : n & Ft && (e = t.overallVelocityY),
                    this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && dt(e) > this.options.velocity && t.eventType & Ct
                );
            },
            emit: function (t) {
                var e = k(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
            },
        }),
        u(B, H, {
            defaults: { event: "tap", pointers: 1, taps: 1, interval: 300, time: 250, threshold: 9, posThreshold: 10 },
            getTouchAction: function () {
                return [Zt];
            },
            process: function (t) {
                var e,
                    n,
                    i = this.options,
                    s = t.pointers.length === i.pointers,
                    o = t.distance < i.threshold,
                    a = t.deltaTime < i.time;
                if ((this.reset(), t.eventType & bt && 0 === this.count)) return this.failTimeout();
                if (o && a && s) {
                    if (t.eventType != Ct) return this.failTimeout();
                    if (
                        ((e = !this.pTime || t.timeStamp - this.pTime < i.interval),
                        (n = !this.pCenter || M(this.pCenter, t.center) < i.posThreshold),
                        (this.pTime = t.timeStamp),
                        (this.pCenter = t.center),
                        n && e ? (this.count += 1) : (this.count = 1),
                        (this._input = t),
                        0 === this.count % i.taps)
                    )
                        return this.hasRequireFailures()
                            ? ((this._timer = r(
                                  function () {
                                      (this.state = re), this.tryEmit();
                                  },
                                  i.interval,
                                  this
                              )),
                              ee)
                            : re;
                }
                return oe;
            },
            failTimeout: function () {
                return (
                    (this._timer = r(
                        function () {
                            this.state = oe;
                        },
                        this.options.interval,
                        this
                    )),
                    oe
                );
            },
            reset: function () {
                clearTimeout(this._timer);
            },
            emit: function () {
                this.state == re && ((this._input.tapCount = this.count), this.manager.emit(this.options.event, this._input));
            },
        }),
        (Q.VERSION = "2.0.7"),
        (Q.defaults = {
            domEvents: !1,
            touchAction: Vt,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [[G, { enable: !1 }], [U, { enable: !1 }, ["rotate"]], [Z, { direction: Mt }], [j, { direction: Mt }, ["swipe"]], [B], [B, { event: "doubletap", taps: 2 }, ["tap"]], [V]],
            cssProps: { userSelect: "none", touchSelect: "none", touchCallout: "none", contentZooming: "none", userDrag: "none", tapHighlightColor: "rgba(0,0,0,0)" },
        }),
        (J.prototype = {
            set: function (t) {
                return et(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), (this.input.target = t.inputTarget), this.input.init()), this;
            },
            stop: function (t) {
                this.session.stopped = t ? 2 : 1;
            },
            recognize: function (t) {
                var e,
                    n,
                    i,
                    r,
                    s = this.session;
                if (!s.stopped)
                    for (this.touchAction.preventDefaults(t), n = this.recognizers, (!(i = s.curRecognizer) || (i && i.state & re)) && (i = s.curRecognizer = null), r = 0; r < n.length; )
                        (e = n[r]), 2 === s.stopped || (i && e != i && !e.canRecognizeWith(i)) ? e.reset() : e.recognize(t), !i && e.state & (ee | ne | ie) && (i = s.curRecognizer = e), r++;
            },
            get: function (t) {
                var e, n;
                if (t instanceof H) return t;
                for (e = this.recognizers, n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
                return null;
            },
            add: function (t) {
                if (s(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), (t.manager = this), this.touchAction.update(), t;
            },
            remove: function (t) {
                if (s(t, "remove", this)) return this;
                if ((t = this.get(t))) {
                    var e = this.recognizers,
                        n = g(e, t);
                    -1 !== n && (e.splice(n, 1), this.touchAction.update());
                }
                return this;
            },
            on: function (t, e) {
                if (t !== i && e !== i) {
                    var n = this.handlers;
                    return (
                        o(v(t), function (t) {
                            (n[t] = n[t] || []), n[t].push(e);
                        }),
                        this
                    );
                }
            },
            off: function (t, e) {
                if (t !== i) {
                    var n = this.handlers;
                    return (
                        o(v(t), function (t) {
                            e ? n[t] && n[t].splice(g(n[t], e), 1) : delete n[t];
                        }),
                        this
                    );
                }
            },
            emit: function (t, e) {
                var n, i;
                if ((this.options.domEvents && tt(t, e), (n = this.handlers[t] && this.handlers[t].slice()) && n.length))
                    for (
                        e.type = t,
                            e.preventDefault = function () {
                                e.srcEvent.preventDefault();
                            },
                            i = 0;
                        i < n.length;

                    )
                        n[i](e), i++;
            },
            destroy: function () {
                this.element && K(this, !1), (this.handlers = {}), (this.session = {}), this.input.destroy(), (this.element = null);
            },
        }),
        et(Q, {
            INPUT_START: bt,
            INPUT_MOVE: wt,
            INPUT_END: Ct,
            INPUT_CANCEL: _t,
            STATE_POSSIBLE: te,
            STATE_BEGAN: ee,
            STATE_CHANGED: ne,
            STATE_ENDED: ie,
            STATE_RECOGNIZED: re,
            STATE_CANCELLED: se,
            STATE_FAILED: oe,
            DIRECTION_NONE: Dt,
            DIRECTION_LEFT: It,
            DIRECTION_RIGHT: At,
            DIRECTION_UP: St,
            DIRECTION_DOWN: Pt,
            DIRECTION_HORIZONTAL: Mt,
            DIRECTION_VERTICAL: Ft,
            DIRECTION_ALL: Nt,
            Manager: J,
            Input: w,
            TouchAction: q,
            TouchInput: O,
            MouseInput: N,
            PointerEventInput: x,
            TouchMouseInput: z,
            SingleTouchInput: R,
            Recognizer: H,
            AttrRecognizer: $,
            Tap: B,
            Pan: j,
            Swipe: Z,
            Pinch: U,
            Rotate: G,
            Press: V,
            on: p,
            off: d,
            each: o,
            merge: it,
            extend: nt,
            assign: et,
            inherit: u,
            bindFn: c,
            prefixed: E,
        }),
        ((void 0 !== t ? t : "undefined" != typeof self ? self : {}).Hammer = Q),
        "function" == typeof define && define.amd
            ? define(function () {
                  return Q;
              })
            : "undefined" != typeof module && module.exports
            ? (module.exports = Q)
            : (t.Hammer = Q);
})(window, document),
    (function (t) {
        "use strict";
        gi3dDebug("_global.js was loaded"),
            t("html").removeClass("no-js").addClass("js"),
            "undefined" != typeof gi3d_debug_mode && !0 === window.gi3d_debug_mode && t("html").addClass("debug"),
            t("#debug-toggle").click(function () {
                (window.gi3d_debug_mode = !window.gi3d_debug_mode), !0 === window.gi3d_debug_mode ? t("html").addClass("debug") : t("html").removeClass("debug");
            });
    })(jQuery),
    (function (t, e) {
        "use strict";
        gi3dDebug("gesture.js was loaded"),
            t(document).on("gi3d-card-ready", function (n) {
                function i(e) {
                    var n, i, r, s;
                    if ((o(), "panstart" === e.type ? ((h = d), (d = 0), (f = 0)) : (h = 0), g.hasClass("layout--portrait") || g.hasClass("layout--square"))) (n = g[0].clientWidth - 50), (i = Math.max(Math.floor(n / a), 1)), (r = e.deltaX);
                    else {
                        if (!g.hasClass("layout--landscape")) return void gi3dDebug("😢 could not determine card type.");
                        (n = g[0].clientHeight - 50), (i = Math.max(Math.floor(n / a), 1)), (r = e.deltaY);
                    }
                    if (((s = Math.floor((r / -i) * m)), f !== s)) {
                        if (d === (p = (p = (p = h + d + s - f) < 1 ? 1 : p) > a ? a : p)) return;
                        (d = p),
                            (f = s),
                            gi3dDebug(e.type, "deltaSize", r, "deltaStep", s, "oldDeltaStep", f, "initFrame", h, "oldFrame", d, "currentFrame", p),
                            window.requestAnimationFrame(function () {
                                t(".card")
                                    .removeClass(removeAllFrameClasses)
                                    .addClass("frame-" + p);
                            });
                    }
                }
                function r() {
                    if (v) gi3dDebug("Hammer.Tap callback ignored because we are currently tweening");
                    else {
                        if (p >= c[2] - 5) return gi3dDebug("Hammer.Tap", "currentFrame", p, "endFrame", 0), void s(0);
                        if (p >= c[1] - 5 && p < c[2] - 5) return gi3dDebug("Hammer.Tap", "currentFrame", p, "endFrame", c[2]), void s(c[2] - 1);
                        if (p >= c[0] - 5 && p < c[1] - 5) return gi3dDebug("Hammer.Tap", "currentFrame", p, "endFrame", c[1]), void s(c[1]);
                        gi3dDebug("Hammer.Tap", "currentFrame", p, "endFrame", c[0]), s(c[0]);
                    }
                }
                function s(e, n) {
                    if (void 0 !== e) {
                        void 0 === n && (n = 60);
                        var i = Math.max(Math.floor(Math.abs(p - e) / n), 1),
                            r = e > p ? "increasing" : "decreasing";
                        gi3dDebug("framesPerStep", i, "tweenDirection", r),
                            (l = setInterval(function () {
                                (v = !0),
                                    ("increasing" === r && p >= e) || ("decreasing" === r && p <= e) ? o() : (("increasing" === r && p >= e - i) || ("decreasing" === r && p <= e + i)) && (i = 1),
                                    window.requestAnimationFrame(function () {
                                        t(".card")
                                            .removeClass(removeAllFrameClasses)
                                            .addClass("frame-" + p),
                                            (d = p),
                                            "increasing" === r ? (p += i) : (p -= i);
                                    });
                            }, 17));
                    } else console.error("tweenTo() requires an endFrame argument");
                }
                function o() {
                    clearInterval(l), (v = !1);
                }
                gi3dDebug("gi3d-card-ready — gestureData:", n.originalEvent.data || "none"), t(".card").addClass("is-gesture-enabled");
                var a = Number(window.getComputedStyle(document.querySelector(".layout"), "::after").getPropertyValue("content").replace(/"/g, "").replace(/'/g, "").split("||")[0]),
                    u = window.getComputedStyle(document.querySelector(".layout"), "::after").getPropertyValue("content").replace(/"/g, "").replace(/'/g, "").split("||")[1].split("|"),
                    c = [Number(u[0]), Number(u[0]) + Number(u[1]), Number(u[0]) + Number(u[1]) + Number(u[2])];
                gi3dDebug("🎥 NUM_FRAMES:", a, "FRAME_COUNTS:", u, "keyframes:", c);
                var l,
                    h = 1,
                    p = 1,
                    d = 0,
                    f = 0,
                    m = 5 / 3,
                    v = !1,
                    g = t(".layout"),
                    y = new e(g[0]),
                    T = t(".drag"),
                    E = new e(T[0]),
                    b = t(".dragMob"),
                    w = new e(b[0]);
                y.add(new e.Pan({ direction: e.DIRECTION_ALL, threshold: 0 })),
                    E.add(new e.Pan({ direction: e.DIRECTION_ALL, threshold: 0 })),
                    w.add(new e.Pan({ direction: e.DIRECTION_ALL, threshold: 0 })),
                    y.on("panstart panmove", i),
                    E.on("panstart panmove", i),
                    w.on("panstart panmove", i),
                    y.add(new e.Tap({})),
                    E.add(new e.Tap({})),
                    w.add(new e.Tap({})),
                    y.on("tap", r),
                    E.on("tap", r),
                    w.on("tap", r);
            });
    })(jQuery, Hammer);
