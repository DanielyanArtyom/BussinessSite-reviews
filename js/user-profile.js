$(document).ready(function () {
    $(".tab-content").hide();
    $("#tab-content--1").show()

    $(".user__tabs-headers a").click(function () {
        let link = $(this).attr("href");
        $('.user__tabs-header').removeClass('header-active')
        $(this).addClass('header-active')
        $(".tab-content").hide()
        $(link).show();
    });
});