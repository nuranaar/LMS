$(document).ready(function () {
    $(".group-btn").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("active") == false) {
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
        }
    });
    $(".info-btn").click(function (e) {
        e.preventDefault();
       if($(this).prev().css("display")=="none"){
            $(this).prev().slideDown("slow");
        $(this).parent(".groups-item").css({"height": "218px"});
        }
        else{
            $(this).prev().slideUp("slow");
            $(this).parent(".groups-item").css({"height": "90px"}); 
        }
    });
});