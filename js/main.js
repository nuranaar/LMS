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
        $(e.currentTarget).parents(".reason-dropdown").css("display", "none");
        $(e.currentTarget).parents(".reason-dropdown").siblings('[class*="Overlay"]').css("display", "none");
        $($(e.currentTarget).data("target")).css("display", "flex");
    });

    /*start popup-closing */
    $(".popup-area").click((e) => {
        $(e.currentTarget).parents(".popups").css("display", "none");
    });

    $(".close").click((e) => {
        $(e.currentTarget).parents(".popups").css("display", "none");
    });
    $(".btn-close").click((e) => {
        $(e.currentTarget).parents(".popups").css("display", "none");
    });

    $(".cansel").click((e) => {
        $(e.currentTarget).parents(".popups").css("display", "none");

    });
    /*end popup-closing */


    $('[class*="reason-tag"').click((e) => {
        $(e.currentTarget).next().css("display", "block");
        $(e.currentTarget).siblings('[class*="Overlay"]').css("display", "block");
    })
    $('[class*="Overlay"]').click((e) => {
        $(e.currentTarget).css("display", "none");
        $(e.currentTarget).prev().css("display", "none");
    });

    $('.this-week').click((e) => {
        $(e.currentTarget).data('datepicker');

    })
    $("#student").find(".absent").on("mouseenter", (e) => {
        let absent = $(e.currentTarget);
        let report = '<div class="report"><i class="fas fa-exclamation-triangle"></i></div>';
        absent.append(report);

    });
    $(document).on("mouseenter", ".report", (e) => {
        let reportBtn = '<div class="report-button"><p>Report</p></div>';
        $(e.currentTarget).append(reportBtn);

        $(".report-button").click((e) => {
            $("#add-label").css("display", "flex");
            $(".popup-form").submit(() => {
                $(e.currentTarget).empty();
                $(e.currentTarget).removeClass("absent").addClass("pending");

            });
        });
    });
    $("#student").find(".absent").on("mouseleave", (e) => {
        $(e.currentTarget).empty();
    });

    $("#manager").find(".visit").click((e) => {
        if ($(e.currentTarget).hasClass("present")) {
            $(e.currentTarget).find(".present-mark").addClass("selected");

        }
        else if ($(e.currentTarget).hasClass("absent")) {
            $(e.currentTarget).find(".absent-mark").addClass("selected");

        }
        if ($(e.currentTarget).parents("tbody").find(".ParticipationOptions").hasClass("show")) {
            $(e.currentTarget).parents("tbody").find(".ParticipationOptions").removeClass("show");
        }
        $(e.currentTarget).find(".ParticipationOptions").addClass("show");
    });

    $(".add").click((e) => {
        $($(e.currentTarget).data("target")).css("display", "flex");
    })

    $(".check-box").click((e) => {
        if ($(e.currentTarget).hasClass("checked")) {
            $(e.currentTarget).parents("tr").css("background-color", " #f9f9f9");
            $(e.currentTarget).removeClass("checked");

        } else {
            $(e.currentTarget).addClass("checked");
            $(e.currentTarget).parents("tr").css("background-color", "#efefef");
        }
    });
    $(".checked").parents("tr").css("background-color", " #efefef");

    $(".add-input").click((e) => {
        let input = ` <div class="form-item">
        <input type="text" placeholder="  E-mail">
    </div>`;
        $(e.currentTarget).before(input);
    });


    $(".btn-item").click((e) => {
        if (!$(e.currentTarget).hasClass("selected")) {
            $(e.currentTarget).addClass("selected");
            $($(e.currentTarget).data("target")).css("display", "block");
        }
        if ($(e.currentTarget).siblings().hasClass("selected")) {
            $(e.currentTarget).siblings().removeClass("selected");
            $($(e.currentTarget).siblings().data("target")).css("display", "none");
        }
    });

    $($(".selected").data("target")).css("display", "block");
    $(".on-off").click((e) => {
        $(e.currentTarget).toggleClass("active");
    });

    $(document).on("focus", ".faculty-input", (e) => {
        $(e.currentTarget).css({
            "font-weigh": "bold",
            "background-color": "#fff",
            "color": "#303030"
        });
    });

    $(document).on("blur", ".faculty-input", (e) => {
        $(e.currentTarget).css({
            "font-weigh": "800",
            "background-color": "#00a2ff",
            "color": "#fff"
        });
    });

    $(".add-card").click((e) => {
        let card = `<div class="card">
        <div class="card-head">
                <input class="faculty-input" type="text" placeholder="İmtiyaz">
        </div>
        <div class="card-body">
            <ul class="list">
                <li class="list-item">
                    <div class="on-off">
                    </div>
                    <span>Görsün</span>
                </li>
                <li class="list-item">
                    <div class="on-off"></div>
                    <span>Yarat</span>
                </li>
                <li class="list-item">
                    <div class="on-off"></div>
                    <span>Redaktə et</span>
                </li>
                <li class="list-item">
                    <div class="on-off"></div>
                    <span>Sil</span>
                </li>
            </ul>
        </div>
    </div>`;
        $(e.currentTarget).before(card);
    });

    $(".fin-info").click((e) => {
        $($(e.currentTarget).data("target")).css("display", "flex");
    });
    $("form").submit((e) => {
        e.preventDefault();
        $($(e.currentTarget).data("target")).css("display", "flex");
    });
    $(".fin-info").click((e) => {
        $($(e.currentTarget).data("target")).css("display", "flex");
    });
    $(".send-note").click((e) => {
        e.preventDefault();
        $($(e.currentTarget).attr("href")).css("display", "flex");
        $($(e.currentTarget).data("target")).css("display", "flex");
        $("#confirm").css("display", "none");
    });
    $("#send-note .btn-confirm").click(function(e){
        e.preventDefault();
        $($(e.currentTarget).data("target")).css("display", "flex");
        $("#send-note").css("display", "none");
    })
});

