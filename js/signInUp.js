window.onload=function()
{
    $(".icon-wechat").mouseleave(function(){
        $(this).find(".dropbox").hide();
    });

    $(".icon-wechat").mouseenter(function(){
        $(this).find(".dropbox").show();
    })

    var oMobile=document.getElementsByClassName("mobile")[0];
    var oSenMsg=document.getElementsByClassName("senmsg")[0];
    var oVcode=document.getElementsByClassName("vcode")[0];
    var oLogin=document.getElementsByClassName("login")[0];
    var oMobileErr=document.getElementsByClassName("mobile-err")[0];
    var oVcodeErr=document.getElementsByClassName("vcode-err")[0];
    var timeCoune=0;//时间间隔长度，根据需要定制，单位为秒。
    var isTimerCount=timeCoune;
    oLogin.onclick=function()
    {
        if(oMobile.value=="")
        {
            startMove(oMobileErr,{opacity:100,zIndex:100});
            oMobile.focus();
            oTim=setInterval(function()
            {
                if((isTimerCount--)>0)
                {
                    startMove(oMobileErr,{opacity:100,zIndex:100});
                    oMobile.focus();
                    console.log(isTimerCount);
                }
                else
                {
                    startMove(oMobileErr,{opacity:0,zIndex:0});
                    clearInterval(oTim);
                    isTimerCount=timeCoune;//恢复时间间隔
                    console.log(isTimerCount);
                };
            }, 1000);

        }
        else if(oVcode.value=="")
        {
            startMove(oVcodeErr,{opacity:100,zIndex:100});
            oVcode.focus();
            oTim=setInterval(function()
            {
                if((isTimerCount--)>0)
                {
                    startMove(oVcodeErr,{opacity:100,zIndex:100});
                    oVcode.focus();
                    console.log(isTimerCount);
                }
                else
                {
                    startMove(oVcodeErr,{opacity:0,zIndex:0});
                    clearInterval(oTim);
                    isTimerCount=timeCoune;//恢复时间间隔
                    console.log(isTimerCount);
                };
            }, 1000);

        }
        else
        {
            //登录成功后的操作
        }
    };
};
//运动框架
function startMove(obj,json,endFun)
{
    clearInterval(obj.timer);
    obj.timer=setInterval(function()
    {
        var iStop=true;//假如用户定义的值已全部到位了。
        for(var curr in json)
        {
            var oNumber=0;
            if(curr=="opacity")
            {
                oNumber=Math.round(parseFloat(getStyle(obj,curr))*100);//obj是元素对象，curr是对象的属性，比如说opacity
            }
            else if(curr=="zIndex")
            {
                oNumber=parseInt(getStyle(obj,curr));//相对于单位为px的直接取整
            }
            else
            {
                oNumber=parseInt(getStyle(obj,curr));
            };
            var speed=(json[curr]-oNumber)/6;//缓冲运动，这样的算法是为了在运动的时候不至于匀速的。
            speed=speed>0?Math.ceil(speed):Math.floor(speed);//对速度进行一个向上或向下的取整，不然的话，如果碰到相对于px单位的可能会存在小数点的情况。
            if(oNumber!=json[curr])
                iStop=false;
            if(curr=="opacity")
            {
                obj.style.filter="alpha(opacity:"+(oNumber+speed)+")";
                obj.style.opacity=(oNumber+speed)/100;
            }
            else if(curr=="zIndex")
            {
                obj.style[curr]=oNumber+speed;
            }
            else
            {
                obj.style[curr]=oNumber+speed+"px";
            }
        };
        if(iStop)
        {
            clearInterval(obj.timer);
            if(endFun)endFun();
        }

    },30);
}
//获取非行间样式框架
function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        obj=currentStyle[name];
    }
    else
    {
        obj=getComputedStyle(obj,false)[name];
    }
    return obj;
}

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