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
function hello() {
    now = new Date(), hour = now.getHours();
    var tips = $(".profile-perosondata .profile-name span").text();
    var sp = $(".profile-perosondata .profile-tips").text();
    if (hour < 6) {
        sp = "凌晨好";
        tips = "美好一天从早餐开始！";
    }
    else if (hour < 9) {
        sp = "早上好";
        tips = "早餐让你精神百倍！";

    }
    else if (hour < 12) {
        sp = "上午好！";
        tips = "午餐，帮你你续航一整天！";
    }
    else if (hour < 14) {
        sp = "中午好！";
        tips = "喝杯下午茶，提提精神呗！";
    }
    else if (hour < 17) {
        sp = "下午好！";
        tips = "喝杯下午茶，提提精神呗！";
    }
    else if (hour < 19) {
        sp = "傍晚好！";
        tips = "晚饭叫外卖，不吸油烟，不洗碗筷！";
    }
    else if (hour < 22) {
        sp = "晚上好！"
        tips = "晚饭叫外卖，不吸油烟，不洗碗筷！";
    }
    else {
        sp = "夜里好！";
        tips = "快来吃夜宵吧！";
    }
    $(".profile-perosondata .profile-name span").text(sp);
    $(".profile-perosondata .profile-tips").text(tips);
}

$(function () {
    $(".profile-panel").hide();
    changeLocation(); changePic(); changeProfilePanel();
    hello();
})



$(function () {
    $(".profile-sidebar-section a").click(function (event) {
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
    $(".balance-detail a.selector-item").click(function (event) {
        $(".balance-detail a.selector-item.active").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
    });
});

$(function () {

    $("button.desktop-addressblock-button.edit").click(function (event) {
        alert("暂不提供修改功能,请删除后添加新的订单");
        event.preventDefault();

    });
    $("button.desktop-addressblock-button.remove").click(function (event) {
        $(this).parents(".desktop-addressblock").find(".desktop-addressblock-removebuttons").show();
        $(this).parents(".desktop-addressblock").find(".desktop-addressblock-mask").show();
        event.preventDefault();
    });
    $("button.confirmdelete").click(function (event) {
        $(this).parents(".desktop-addressblock").hide();
        event.preventDefault();
    })
    $("button.canceldelete").click(function (event) {
        $(this).parents(".desktop-addressblock").find(".desktop-addressblock-removebuttons").hide();
        $(this).parents(".desktop-addressblock").find(".desktop-addressblock-mask").hide();
        event.preventDefault();
    });

    $(".header a[href^='profile/']").click(function (event) {
        var idsel = "#profile-" + $(this).attr("href").split("/").pop();
        $(idsel).click();
        event.preventDefault();
    });

    $(".profile-panel a[href^='profile/']").click(function (event) {
        var idsel = "#profile-" + $(this).attr("href").split("/").pop();
        $(idsel).click();
        event.preventDefault();
    });


    $(".profile-panel a[href^='shop/1']").click(function (event) {
        $(location).attr('href', 'cmlist.html');
        event.preventDefault();
    });

    $(".profile-panel a[href^='shop/']").click(function (event) {
        $(location).attr('href', 'vendor_2.html');
        event.preventDefault();
    });

    $(".profile-panel a[href^='order/id/").click(function (event) {
        alert("详情，请通过手机APP查看");

        event.preventDefault();
    });

    $(".balance-detail a[href='selector/all']").click(function(event){
        $("div.balance-table-row:hidden").show();
        event.preventDefault();
    });

    $(".balance-detail a[href='selector/type/1']").click(function(event){

        var type =$(this).attr("href").split("/").pop();
        $("div.balance-table-row:gt(0)").hide();
        $("div.balance-table-row .balance-table-type[type=" + type+"]").parent(".balance-table-row").show();
        event.preventDefault();
    });
    $(".balance-detail a[href='selector/type/2']").click(function(event){
        $("div.balance-table-row:gt(0)").hide();
        $("div.balance-table-row .balance-table-type[type=2]").parent(".balance-table-row").show();
          event.preventDefault();
    });

    $(".selector-list a[href='selector/time/1']").click(function(event){
        event.preventDefault();
        $("div.balance-table-row:gt(0)").each(function(){
         
            
        })
            
        
    });
    $(".selector-list a[href='selector/time/7']").click(function(event){
        event.preventDefault();
        $("div.balance-table-row:gt(0)").each(function(){

           
        })
            
        
    });
    $(".balance-detail a[href='selector/time/15']").click(function(event){
        event.preventDefault();
        $("div.balance-table-row:gt(0)").each(function(){

            
        })
    });
    $(".balance-detail a[href='selector/time/30']").click(function(event){
        event.preventDefault();
        $("div.balance-table-row:gt(0)").each(function(){

           
        })
    });

})
