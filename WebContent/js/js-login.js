$(function(){
	//判断之前是否登录成功,实现快速登录
	var stop="";
	$.ajax({
		url : 'getSessionUser',
		async :false,
		type : 'POST',
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			if(data.username==null||data.username==""){ stop=false;return;}
			stop=true;
			},
		error : function() {
		}
	});
	if(stop==true) {
		window.location.href='main';
		return;
		}
	//记住用户名
	var cookieun=getCookie("loginuser");
	$("#loginname").val(cookieun);
	$(".screenbg ul li").each(function(){
		$(this).css("opacity","0");
	});
	$(".screenbg ul li:first").css("opacity","1");
	var index = 0;
	var t;
	var li = $(".screenbg ul li");	
	var number = li.size();
	function change(index){
		li.css("visibility","visible");
		li.eq(index).siblings().animate({opacity:0},3000);
		li.eq(index).animate({opacity:1},3000);
	}
	function show(){
		index = index + 1;
		if(index<=number-1){
			change(index);
		}else{
			index = 0;
			change(index);
		}
	}
	t = setInterval(show,8000);
	//根据窗口宽度生成图片宽度
	var width = $(window).width();
	$(".screenbg ul img").css("width",width+"px");
});
$(document).ready(function(){
	var $tab_li = $('#tab ul li');
	$tab_li.hover(function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		var index = $tab_li.index(this);
		$('div.tab_box > div').eq(index).show().siblings().hide();
	});	
});
$(function(){
$(".stu_login_error").Validform({
	tiptype:function(msg,o,cssctl){
		var objtip=$(".stu_error_box");
		cssctl(objtip,o.type);
		objtip.text(msg);
	},
});

$(".tea_login_error").Validform({
	tiptype:function(msg,o,cssctl){
		var objtip=$(".tea_error_box");
		cssctl(objtip,o.type);
		objtip.text(msg);
	},
});
});

//记住用户名
var cookieun=getCookie("loginuser");
$("#loginname").val(cookieun);
clock = '';
nums = 60;
btn = null;
function time(thisBtn) {
var reg= /^[1]([3-9])[0-9]{9}$/;
var tel=document.getElementsByName("tel")[0].value;
if(!reg.test(tel)){
	alert("请填写正确的电话号码！");
	return;
}
var ifcz=false;
var ifss=true;
$.ajax({
	url : 'findBytel',
	async :false,
	type : 'POST',
	dataType : 'json',
	data : {
		"telnumber":tel
	},
	success :function(data) {
		if(data!=null) {
			ifcz=true;
			alert("该手机号已经被注册！");
		}
	},
	error : function(data) {
		alert("验证码发送失败！");
	}
});

if(ifcz){
	return;
}
$.ajax({
	url : 'sendyzm',
	async :false,
	type : 'POST',
	dataType : 'json',
	data : {
		"telnumber":tel
	},
	success :function(data) {
		if(data==false){
			ifss=false;
		}
	},
	error : function(data) {
		alert("验证码发送失败！");
	}
});
if(!ifss){
	alert("验证码发送太频繁，请稍后再来！");
	return;
}
//time()函数处理“获取”按钮
btn = document.getElementById("getCode"); 
//将按钮置为不可点击 
btn.disabled=true;
btn.value = nums + '秒后可重新获取';
//让按钮显示倒计时
clock = setInterval(doLoop, 1000);
//定时器1秒1次
} 
function doLoop() 
{ 
nums--;
if (nums > 0) { btn.value = nums + '秒后可重新获取'; } 
else {
//如果倒数计时结束，就清除定时器，将按钮状态改为可点击，并将按钮值显示为“重新发送”，最后重置倒计时时间60秒。
clearInterval(clock); 
// 清除js定时器
btn.disabled = false; btn.value = '重新发送验证码'; nums = 60; 
// 重置时间 
} 
} 
function change_yanzhengma() 
{
document.getElementById("checkcode_img").src = "checkcode.jsp?" + new Date().getTime();
}
function getCookie(c_name)
{
if (document.cookie.length>0)
{
c_start=document.cookie.indexOf(c_name + "=")
if (c_start!=-1)
{ 
c_start=c_start + c_name.length+1 
c_end=document.cookie.indexOf(";",c_start)
if (c_end==-1) c_end=document.cookie.length
return unescape(document.cookie.substring(c_start,c_end))
} 
}
return ""
}
function checkloginForm(){
	//之前随机生成的公钥
	var publicKey="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJdhfTnrEE1I9ZmNti1q+yAJKV9A7xhODO7Yd2sGtLGPHPm8jZmsonwbfHyTVABLjwO6UN5PpWSljWgoBDKyoa/Q4U+Gqf58/Xrze4Fyoor2cUwmpxtW5a6XkO4pBRpujnjISr9Shi3243UN2yCIahrg8i2eEUdEVzZnKZwU0evQIDAQAB";
	//用公钥对密码加密
	var encrypt1=new JSEncrypt();
	encrypt1.setPublicKey(publicKey); 
	var  pwd=document.getElementById('password');
	var  rsa_pwd=document.getElementById('rsa_pwd')
	rsa_pwd.value=encrypt1.encrypt(pwd.value);
	//alert(rsa_pwd.value);
	return true;
}
function checkregisterForm(){
	//之前随机生成的公钥
	var publicKey="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJdhfTnrEE1I9ZmNti1q+yAJKV9A7xhODO7Yd2sGtLGPHPm8jZmsonwbfHyTVABLjwO6UN5PpWSljWgoBDKyoa/Q4U+Gqf58/Xrze4Fyoor2cUwmpxtW5a6XkO4pBRpujnjISr9Shi3243UN2yCIahrg8i2eEUdEVzZnKZwU0evQIDAQAB";
	//用公钥对密码加密
	var encrypt1=new JSEncrypt();
	encrypt1.setPublicKey(publicKey); 
	var  pwd=document.getElementById('password1');
	var  rsa_pwd=document.getElementById('rsa_pwd1')
	rsa_pwd.value=encrypt1.encrypt(pwd.value);
	//alert(rsa_pwd.value);
	return true;
}
