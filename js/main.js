$(document).ready(function () {
    $(".group-btn").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("active") == false) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
        }
    });
});