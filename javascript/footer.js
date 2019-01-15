$(function(){
    $(".icon-wechat").mouseleave(function(){
        $(this).find(".dropbox").hide();
    });

    $(".icon-wechat").mouseenter(function(){
        $(this).find(".dropbox").show();
    })
})