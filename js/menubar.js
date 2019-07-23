$(document).ready(function () {
    
    $(".nav-item").click(function () {
        if (!$(this).hasClass("active")) {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
        }

    })
});