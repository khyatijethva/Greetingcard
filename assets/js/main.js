function init3DFrame(images) {
    playCard(images);
}

function playCard(images) {
    var img = {
        Front: images.Front,
        Left: images.Left,
        Right: images.Right,
        Back: images.Back
    };
    init3d(img);
}

function init3d(images) {
    $('.preload.front').attr('src', images.Front);
    $('.preload.left').attr('src', images.Left);
    $('.preload.right').attr('src', images.Right);
    $('.preload.back').attr('src', images.Back);
    gi3dInit();
    $(document).on('gi3d-card-ready', function () {
        $(".draghide").removeClass("draghide");
        $(".drag-img").addClass("drag_drop");
    });
}

$(function () {
    var images = { "Left": "./assets/images/disability.png" }
    playCard(images);
    initGridFavorites();
    if (window.innerWidth <= 1024) {
        document.getElementsByClassName("zdeskWidget")[0].style.display = "none";
    }
});
