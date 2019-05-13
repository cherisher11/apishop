//获取用户信息
function getsession(){
	var url = window.location.search; 
	var uid = url.substring(url.lastIndexOf('=')+1, url.length);
	if(uid==""){
		alert("当前无显示信息，请去主页面!");
		window.location.href='main';
		return;
	}
	$.ajax({
		url : 'getSessionUser',
		async :false,
		type : 'POST',
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			if(data.id==""){
				alert("未找到登陆信息，返回主页！");
				window.location.href='main';
				return ;
			}
			if(data.id==uid){
			return;
			}
			alert("与当前登陆信息不符，去主页面!");
			window.location.href='main';
			},
		error : function() {
			alert("未找到登陆信息，返回主页！");
			window.location.href='main';
		}
	});
	$.ajax({
		url : 'read',
		async :false,
		type : 'POST',
		dataType : 'json',
		data : {"id":uid},
		success :function(data) {
			$("#username").val(data.username);
			$("#name").val(data.name);
			$("#tel").val(data.telnumber);
		},
		error : function(data) {
			alert("读取失败！");
		}
	});
}

$(function(){
	getsession();
$(".user_add_error").Validform({
	tiptype:function(msg,o,cssctl){
		var objtip=$(".error_box");
		cssctl(objtip,o.type);
		objtip.text(msg);
	},
});
});
//保存信息
function update_message(){
	var url = window.location.search; 
	var uid = url.substring(url.lastIndexOf('=')+1, url.length);
	if(uid==""){
		alert("当前无显示信息，请去主页面!");
		window.location.href='main';
		return;
	}
	var username = $("#username").val();
	var name=$("#name").val();
	$.ajax({
		url : 'updatemessage',
		async :false,
		type : 'POST',
		dataType : 'json',
		data : {
			"id":uid,
			"username":username,
			"name":name
		},
		success :function() {
			alert("保存成功！");
			location.reload();
		},
		error : function(data) {
			alert("修改失败！");
		}
	});
}
//去主页
function tomain(){
	window.location.href='main';
}
