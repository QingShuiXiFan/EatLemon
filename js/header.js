$(function(){
    $(".user_center").hide();
    $(".header .header_right .user_inf").mouseover(function () {
        $(".user_center").show();
    })
    $(".header .header_right .user_inf").mouseleave(function () {
        $(".user_center").hide();
     })  
})