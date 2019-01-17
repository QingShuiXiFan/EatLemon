function changePic() {
    $(".profile-sidebar-section").each(function () {
        var img = $(this).find("h2 img");
        var path = $(img).attr("src").replace("-active", "");
        img.attr("src", path);
    });
    var img = $(".profile-sidebar-section .active").parents(".profile-sidebar-section").find("h2 img");
    var path = $(img).attr("src").replace(".png", "-active.png");
    $(img).attr("src", path);
}
function changeLocation() {

    var active = $(".profile-sidebar-section .active").first();
    // var location = active.text;;
    $("#loc").text(active.text())

}

function changeProfilePanel() {

    var id = $(".profile-sidebar-section .active").first().attr("id");
    if (id.length != 0) {
        $(".profile-panel").hide();
        $("#" + id.replace("profile-", "")).find(".loading").show();

        $("#" + id.replace("profile-", "")).find(".loading").hide();
        $("#" + id.replace("profile-", "")).show();

    }

}

$(function () {
    $(".profile-panel").hide();
    changeLocation(); changePic(); changeProfilePanel();

    $(".profile-perosondata");//--------增加

})

$(function () {
    $(".profile-sidebar-section a").click(function () {
        $(".profile-sidebar-section").find("*").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
        changePic();
        changeLocation();
        changeProfilePanel();
        event.preventDefault();
    });
});

$(function () {
    $(".balance-detail a.selector-item").click(function () {
        $(".balance-detail a.selector-item.active").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
    });
});

$(function () {

    $("button.desktop-addressblock-button.edit").click(function () {
        alert("暂不提供修改功能,请删除后添加新的订单");
        event.preventDefault();
        
    });
    $("button.desktop-addressblock-button.remove").click(function () {
        $(this).parents(".desktop-addressblock").find(".desktop-addressblock-removebuttons").show();
        $(this).parents(".desktop-addressblock").find(".desktop-addressblock-mask").show();
        event.preventDefault();
    });
    $("button.confirmdelete").click(function () {
        $(this).parents(".desktop-addressblock").hide();
        event.preventDefault();
    })
    $("button.canceldelete").click(function () {
        $(this).parents(".desktop-addressblock").find(".desktop-addressblock-removebuttons").hide();
        $(this).parents(".desktop-addressblock").find(".desktop-addressblock-mask").hide();
        event.preventDefault();
    });

    $("#main a[href^='/profile/']").click(function(){
        var idsel = "#profile-"+$(this).attr("href").split("/").pop();
        $(idsel).click();
        event.preventDefault();
    } )

    // $("#main a[href='/profile/order']").click(function () {
    //     $("#profile-order").click();
    //     event.preventDefault();
    // });
    // $("#main a[href='/profile/favor']").click(function () {
    //     $("#profile-favor").click();
    //     event.preventDefault();
    // });
    // $("#main a[href='/profile/hongbao']").click(function () {
    //     $("#profile-hongbao").click();
    //     event.preventDefault();
    // });
    // $("#main a[href='/profile/points']").click(function () {
    //     $("#profile-points").click();
    //     event.preventDefault();
    // });
    // $("#main a[href='/profile/balance']").click(function () {
    //     $("#profile-balance").click();
    //     event.preventDefault();
    // });
    
    $("a[href^='/shop/*']").click(function () {
        alert("转到商家界面");
        event.preventDefault();
    });

    $("a[href^='order/id/").click(function () {
        alert("详情，请通过手机APP查看");
    });

   

})
