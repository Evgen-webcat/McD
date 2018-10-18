$(document).ready(function () {
    $('.main_menu_link').click(function (event) {
        event.preventDefault();
        var screen = $(this).attr('href');
        var scrollTo = $(screen).offset().top;

        $('html, body').animate({scrollTop: scrollTo}, 1000);
    });

    $('.other_stars_button').click(function (event) {
        event.preventDefault();
        $('.calendar, .locker').fadeIn(150);
    });

    $('.close_calendar_button, .locker').click(function (event) {
        event.preventDefault();
        $('.calendar, .locker').fadeOut(150);
    });

    $('.screen_header').click(function () {
        $(this).parent().find('.screen_paragraph').slideToggle();
    });
});
