//根据手机号，重设密码方法
$(function(){
$(".reset_error").Validform({
	tiptype:function(msg,o,cssctl){
		var objtip=$(".error_box");
		cssctl(objtip,o.type);
		objtip.text(msg);
	},
});
});
clock = '';
nums = 60;
btn = null;
//手机验证码发送按钮
function time(thisBtn) {
var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
var tel=document.getElementsByName("tel")[0].value;
if(!reg.test(tel)){
	alert("请填写正确的电话号码！");
	return;
}
var ifcz=false;
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
		}
	},
	error : function(data) {
		alert("验证码发送失败！");
	}
});

if(!ifcz){
	alert("未找到该手机号！！");
	return;
}
var ifss=true;
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
function checkresetForm(){
	//之前随机生成的公钥
	var publicKey="MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJdhfTnrEE1I9ZmNti1q+yAJKV9A7xhODO7Yd2sGtLGPHPm8jZmsonwbfHyTVABLjwO6UN5PpWSljWgoBDKyoa/Q4U+Gqf58/Xrze4Fyoor2cUwmpxtW5a6XkO4pBRpujnjISr9Shi3243UN2yCIahrg8i2eEUdEVzZnKZwU0evQIDAQAB";
	//用公钥对密码加密
	var encrypt1=new JSEncrypt();
	encrypt1.setPublicKey(publicKey); 
	var  pwd=document.getElementById('password');
	//alert(pwd.value);
	var  rsa_pwd=document.getElementById('rsa_pwd');
	rsa_pwd.value=encrypt1.encrypt(pwd.value);
	//alert(rsa_pwd.value);
	return true;
}
