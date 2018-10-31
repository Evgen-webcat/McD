$(document).ready(function () {
    var gallery = [
        "photo_1.jpg"
    ];

    function photoLenght () {
        var screen;

        if ($(window).width() > 1024) {
            screen = 15;
        } else {
            screen = 9;
        }
        return screen;
    }

    for (var i = 0; i < photoLenght (); i++) {
        if (gallery[i]) {
            $('.instagram_photo').append('<a href="img/gallery/' + gallery[i] + '"><img src="img/gallery/thumb_' + gallery[i] + '" alt="instagram_photo_img" class="instagram_photo_img"></a>');
        }
    }

    $('.instagram_photo').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
