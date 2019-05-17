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
                "height": "90px"
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
        }
        else {
            btn.removeClass("open");
            btn.html('Dərsi başlat   <i class="fas fa-arrow-right"></i>');
            btn.css({ "display": "none" });
        }
        btn.data()
    });

    //smart attendance
    $('.toggle').minitoggle({
        on: true
    });

    $('.toggle').on("toggle", (e) => {
        if (e.isActive) {
        }
        else {
        }
    });

    $('.open-noti').click((e) => {
        let btn = $(e.currentTarget);
        $(`${btn.attr("href")}`).css("display", "block");
    });

    $(".noti-area").click((e) => {
        let area = $(e.currentTarget);
        $(".noti-box").scrollTop(0);

        area.parent().css("display", "none");
        $(".noti-box").css({
            "height": "245px",
            "overflow-y": "hidden"
        });
        $(".noti-btn").css("display", "block");
    });

    $(".noti-btn").click((e) => {
        let btn = $(e.currentTarget);
        btn.css("display", "none");
        $(".noti-box").css({
            "height": "350px",
            "overflow-y": "auto"
        });
    });

    $(".add-label").click((e) => {
        $($(e.currentTarget).data("target")).css("display", "block");
    });

    $(".popup-area").click(() => {
        $("#add-label").css("display", "none");
    });

    $(".close").click(() => {
        $("#add-label").css("display", "none");
    });

    $(".cansel").click(() => {
        $("#add-label").css("display", "none");
    });

    $(".absent").click((e) => {
        $("#add-label").css("display", "block");
        $(".popup-form").submit(() => {
            $(e.currentTarget).removeClass("absent").addClass("pending");
        });
    });

    $(".ParticipationOptions__reason-tag__qpMnj").click((e)=>{
        $(e.currentTarget).next().css("display","block");
        $(e.currentTarget).siblings(".Overlay__Overlay__2AcFF").css("display","block");
    })
    $(".Overlay__Overlay__2AcFF").click((e)=>{
        $(e.currentTarget).css("display","none");
        $(e.currentTarget).prev().css("display","none");
    });

    $('.this-week').click((e)=>{
        $(e.currentTarget).data('datepicker');

    })

});