$(document).ready(function () {

    $(".nav-item").click(function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        }
    });
    $(".open-menubar").click(function () {
        if (!$(this).parents(".menu-bar").hasClass("active")) {
                $(this).parents(".menu-bar").addClass("active");
            $(".page-body").css("padding-left", "0px");
            $('.page-body .statistic-item').css('margin', '10px');
            $(this).css("opacity", "1");

    } else {
        $(this).parents(".menu-bar").removeClass("active");
        $(".page-body").css("padding-left", "80px");
            $('.page-body .statistic-item').css('margin', '15px');
            $(this).css("opacity", "0.6");

        }
    });
});