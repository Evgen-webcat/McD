$(document).ready(function () {
    $('.main_menu_link').click(function (event) {
        event.preventDefault();
        var screen = $(this).attr('href');
        var scrollTo = $(screen).offset().top;

        $('html, body').animate({scrollTop: scrollTo}, 1000);
    });

    $('.screen_header').click(function () {
        $(this).parent().find('.screen_paragraph').slideToggle();
    });
});
