$(document).ready(function () {
    var textWidth = function (text) {
        var sensor = $('<pre>' + text + '</pre>').css({ display: 'none' });
        $('body').append(sensor);
        var width = sensor.width();
        sensor.remove();
        return width;
    };
    $(".set_location_name").width(textWidth($(".set_location_name").val()));
    $(".set_location_loa").width(textWidth($(".set_location_loa").val()));

    $(".topbar").hide();
    $(".user").mouseenter(function () {
        $(".topbar").show();
    });
    $(".user").mouseleave(function () {
        $(".topbar").hide();
    });
    $(".topbar").mouseenter(function () {
        $(".topbar").show();
    });
    $(".topbar").mouseleave(function () {
        $(".topbar").hide();
    });
    $(".topbar_item").mouseenter(function () {
        $(this).css("background-color","rgb(200,200,200)")
    });
    $(".topbar_item").mouseleave(function () {
        $(this).css("background-color", "white")
    });
    //加的效果
    $(".add").click(function () {
        var n = $(this).prev().val();
        var num = parseInt(n) + 1;
        var money = parseFloat($(this).next().val()) + parseFloat($(this).prev().prev().prev().val());
        var total = parseFloat($(this).next().val()) + parseFloat($(".total_prise").val())
        if (num == 0) { $(this).parent().parent().hide()}
        $(this).prev().val(num);
        $(this).prev().prev().prev().val(money.toFixed(2));
        $(".total_prise").val(total.toFixed(2));
        if (total == 0) { }
    });
    //减的效果
    $(".sub").click(function () {
        var n = $(this).next().val();
        var num = parseInt(n) - 1;
        var money = parseFloat($(this).prev().val()) - parseFloat($(this).next().next().next().val());
        var total = parseFloat($(".total_prise").val()) - parseFloat($(this).next().next().next().val());
        if (num == 0) { $(this).parent().parent().hide()}
        $(this).next().val(num);
        $(this).prev().val(money.toFixed(2));
        $(".total_prise").val(total.toFixed(2));
    });

    $(".app_img").mouseenter(function () {
        $(".app_link").show();
    })
    $(".app_img").mouseleave(function () {
        $(".app_link").hide();
    })


})