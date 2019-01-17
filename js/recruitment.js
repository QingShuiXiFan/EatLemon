//获取验证码
var countdown = 5;
var  sending = false;
function sendMsg() {
    sending = true;
    var obj = $("#sdbtn");
    settime(obj);
}

function settime(obj) { //发送验证码倒计时
    if (countdown == 0) {
        obj.attr('disabled', false);
        obj.html("获取验证码");
        countdown = 5;
        sending = false;
        return;
    } else {
        obj.attr('disabled', true);
        obj.html("重新发送(" + countdown + ")");
        countdown--;
    }
    setTimeout(function () {
        settime(obj);
    }, 1000)
}

// 弹窗
function showWindow() {
    $('#showdiv').show();  //显示弹窗
    $('#cover').css('display','block'); //显示遮罩层
    $('#cover').css('height',document.body.clientHeight+'px'); //设置遮罩层的高度为当前页面高度
    $('body').css('overflow','hidden');//浮层出现时窗口不能滚动设置
}
// 关闭弹窗
function closeWindow() {
    $('#showdiv').hide();  //隐藏弹窗
    $('#cover').css('display','none');   //显示遮罩层
    $('body').css('overflow','auto');// 浮层关闭时滚动设置
}

$(function () {
    $(".login").click(function () {
        var bool = $("#accept").prop("checked");
        if(bool){
            closeWindow();
            window.location.href="shoplist.html";
        }
        else {

        }
    })
})

