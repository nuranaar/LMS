$(document).ready(() => {
    // active/closed groups
    $(".group-btn").click((e) => {
        let btn = $(e.currentTarget);
        if (btn.hasClass("active") == false) {

            btn.addClass("active");
            $(btn.data('target')).addClass("active-list");
            $(btn.siblings(".active").data('target')).removeClass("active-list");
            btn.siblings(".active").removeClass("active");
        }
    });

    // groups infarmation
    $(".info-btn").click((e) => {
        let btn = $(e.currentTarget);
        if (btn.prev().css("display") == "none") {
            btn.prev().slideDown("fast");
            btn.css({
                "transform": "rotate(180deg)"
            });
            btn.parent(".groups-item").css({
                "height": "222px"
            });
        }
        else {
            btn.parent(".groups-item").css({
                "height": "90px",
            });
            btn.prev().slideUp();
            btn.css({
                "transform": "rotate(0deg)"
            });

        }
    });

    // open/close lesson
    $(".start-btn").click((e) => {
        let btn = $(e.currentTarget);
        if (btn.hasClass("open") == false) {
            btn.addClass("open");
            btn.html('Dərsi bitir   <i class="fas fa-times"></i>');

            setTimeout(() => {
                btn.removeClass("open");
                btn.html('Dərsi başlat   <i class="fas fa-arrow-right"></i>');
                btn.css({ "display": "block" });
            }, 10000);
        }
        else {
            btn.removeClass("open");
            btn.html('Dərsi başlat   <i class="fas fa-arrow-right"></i>');
            btn.css({ "display": "none" });

        }
    });
});