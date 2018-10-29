$(document).ready(function () {
    'use strict';
    var gallery;

    $('.burger').click(function (event) {
        event.preventDefault();
        $('.main_menu').slideToggle();
    });

    $('.menu_link').click(function (event) {
        event.preventDefault();
        var screen = $(this).attr('href');
        var scrollTo = $(screen).offset().top;

        $('html, body').animate({scrollTop: scrollTo}, 1000);

        if ($(window).width() < 1025) {
            $('.main_menu').slideUp();
        }
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

    $('.star_date').click(function (event) {
        event.stopPropagation();
        $('.star_date').not(this).find('.star_date_info').fadeOut(100);
        $(this).find('.star_date_info').fadeIn(100);
    });
    $('body').click(function () {
        $('.star_date_info').fadeOut(100);
    });

    $('.instagram_photo').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
