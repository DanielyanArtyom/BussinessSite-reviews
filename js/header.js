$(document).ready(function () {

    $('.icon').click(function () {
        $('.header__list ').toggleClass('active-header');
        $('.menu ').toggleClass('menu-open');
    });


    $('.menu-button').click(function () {
        $('.dropdown-menu').toggleClass('dropdown-active')
    })


});