$(function () {
    function caculate() {
        var all_count = 0;
        $(".cart_context ul").find("li:gt(0)").each(function () {
            var num = parseInt($(this).find("input:eq(0)").val());
            var price = parseFloat($(this).find("span:eq(1)").html()).toFixed(2);
            all_count += num * price;
        })
        $(".cart").find("span:eq(1)").html("¥" + all_count.toFixed(2) + "");
    }

    $(".content .content_left .cm_list_fixed").hide();
    $(".user_center").hide();
    caculate();
    $(window).scroll(function () {
        //     if ($(window).scrollTop() > 300) {
        //         // alert("超出距离");
        //         $(".content .content_left .cm_list").addClass("cm_list_fixed");
        //         $(".content .content_left .cm_list").removeClass("cm_list_1");
        //     } else {
        //         // alert("在距离中");
        //         $(".content .content_left .cm_list").removeClass("cm_list_fixed");
        //         $(".content .content_left .cm_list").addClass("cm_list_1");
        //
        //     }
        // });
        if ($(window).scrollTop() > 300) {
            // alert("超出距离");
            $(".content .content_left .cm_list_fixed").show();

        } else {
            // alert("在距离中");

            $(".content .content_left .cm_list_fixed").hide();
        }

        $(".cm_list ul li").removeClass("li_active");
        $(".cm_list ul li a").css("color", "#000");

        var index = $(".cm_li_1 ul li").length;
        for (var i = 0; i < index - 1; i++) {
            if ($(window).scrollTop() > $("#cm_list_" + (i + 1) + "").offset().top - 130 && $(window).scrollTop() < $("#cm_list_" + (i + 2) + "").offset().top - 130) {
                $(".cm_li_1 ul li").eq(i).addClass("li_active");
                $(".cm_li_1 ul li").eq(i).children("a").eq(0).css("color", "#fff");
                $(".cm_li_2 ul li").eq(i).addClass("li_active");
                $(".cm_li_2 ul li").eq(i).children("a").eq(0).css("color", "#fff");
            }
        }
        if ($(window).scrollTop() > $("#cm_list_" + index + "").offset().top - 130 && $(window).scrollTop() < $("footer").offset().top - 130) {
            $(".cm_li_1 ul li").eq(index - 1).addClass("li_active");
            $(".cm_li_1 ul li").eq(index - 1).children("a").eq(0).css("color", "#fff");
            $(".cm_li_2 ul li").eq(index - 1).addClass("li_active");
            $(".cm_li_2 ul li").eq(index - 1).children("a").eq(0).css("color", "#fff");
        }


    });
    $(".content .content_left .col-4 button").on("click", function () {
        var $div = $(this).parent("div").parent("li");
        var cm_name = $div.find("h3").eq(0).html();
        var cm_price = parseFloat($div.find("span").eq(4).html()).toFixed(2);
        // alert(cm_name + cm_price);
        var $li = $(" <li>\n" +
            "            <span class=\"cart_span_1\">" + cm_name + "</span>\n" +
            "            <div class=\"cart_div_1\">\n" +
            "                <a href=\"javascript:void(0)\">-</a>\n" +
            "                <input type=\"text\" value=\"1\" readonly=\"readonly\">\n" +
            "                <a href=\"javascript:void(0)\">+</a>\n" +
            "            </div>\n" +
            "            <span class=\"cart_span_2\">" + cm_price + "</span>\n" +
            "        </li>");
        $(".cart_context ul").append($li);
        caculate();
    });

    $(".cart_context ul").on("click", "li .cart_div_1 a", function () {
        var old = parseInt($(this).parent("div").children("input").val());
        $(this).next("input").val(old - 1);
        $(this).prev("input").val(old + 1);
        var new_num = parseInt($(this).parent("div").children("input").val());
        if (new_num === 0) {
            $(this).parent("div").eq(0).parent("li").eq(0).remove();
        } else {
            // $(this).parent("div").next("span").html(new_num*price);
        }
        caculate();
    })

    $(".cart_context ul a:eq(0)").on("click", function () {
        $(".cart_context ul").find("li:gt(0)").each(function () {
            $(this).remove();
        });
        caculate();
    })

    $(".cart a:eq(0)").on("click", function () {
        $(".cart_context").slideToggle(500);
    })

    $(".cm_li_1 ul li").on("click", function () {
        $(".cm_list ul li").removeClass("li_active");
        $(".cm_list ul li a").css("color", "#000");
        // $(".cm_list ul li a").removeClass("a_active");
        $(this).addClass("li_active");
        // $(this).children("a").eq(0).addClass("a_active");
        $(this).children("a").eq(0).css("color", "#fff");
        var i = parseInt($(".cm_li_1 ul li").index(this)) + 1;
        if (i === 1) {
            $(window).scrollTop(320);
        } else {
            $(window).scrollTop(parseInt($("#cm_list_" + i + "").offset().top) - 130);
        }

    })
    $(".cm_li_2 ul li").on("click", function () {
        $(".cm_list ul li").removeClass("li_active");
        $(".cm_list ul li a").css("color", "#000");
        $(this).addClass("li_active");
        // $(this).children("a").eq(0).addClass("a_active");
        $(this).children("a").eq(0).css("color", "#fff");
        var i = parseInt($(".cm_li_2 ul li").index(this)) + 1;
        if (i === 1) {
            $(window).scrollTop(320);
        } else {
            $(window).scrollTop(parseInt($("#cm_list_" + i + "").offset().top) - 130);

        }
    })

    $(".header .header_right .user_inf").mouseover(function () {
        $(".user_center").show();
    })
    $(".header .header_right .user_inf").mouseleave(function () {
        $(".user_center").hide();
    })

})