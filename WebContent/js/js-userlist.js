$(function(){
$(".user_add_error").Validform({
	tiptype:function(msg,o,cssctl){
		var objtip=$(".error_box");
		cssctl(objtip,o.type);
		objtip.text(msg);
	},
});
});

var stop="";
function getsession(){
	$.ajax({
		url : 'getSessionUser',
		async :false,
		type : 'POST',
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			if(data.rid!="1"){ stop=false;return;}
			stop=true;
			},
		error : function() {
		}
	});
}
//显示用户信息
function showUser_method() {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'list',
		type : 'POST',
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			var code = "";
			for (var i=0; i<data.length; i++) {
			code += "		<tr>\r\n" + 
			"					<th>"+data[i].id  +"</th>\r\n" + 
			"					<th>"+data[i].username +"</th>\r\n" + 
			"					<th>"+data[i].name +"</th>\r\n" + 
			"					<th>"+data[i].telnumber +"</th>\r\n" + 
			"					<th>"+data[i].rid +"</th>\r\n" + 
			"					<td>\r\n" + 
			"						<button type=\"button\" class=\"btn btn-primary btn-xs\"\r\n" + 
			"							onclick=\"readUser_method("+data[i].id+")\"  data-toggle=\"modal\" data-target=\"#uModal\">赋予角色</button>\r\n" + 
			"						<button type=\"button\" class=\"btn btn btn-danger btn-xs\"\r\n" +
			" 							onclick=\"deleteUser_method("+data[i].id+")\">删除</button>\r\n" + 
			"					</td>\r\n" + 
			"				</tr>";
			}
			$("#tableBody").html(code);
		},
		error : function() {
			alert("show出错了！");
		}
	});
}
//添加用户信息
function addUser_method() {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	var reg= /^[1]([3-9])[0-9]{9}$/;
	var reg1=/^.{4,11}$/;
	var user = $("#username").val();
	var tel=$("#tel").val();
	var pwd=$("#password").val();
	var name=$("#name").val();
	if(!reg1.test(user)){
		alert("用户名必须是4到18个字符之间！");
		return;
	}
	if(!reg.test(tel)){
		alert("请填写正确的电话号码！");
		return;
	}
	if(pwd==null||pwd==""||pwd==undefined){
		alert("密码不能为空！");
		return;
	}
	if(name==null||name==""||name==undefined){
		alert("昵称不能为空！");
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
				alert("该手机号已经被注册！");
			}
		},
		error : function(data) {
			
		}
	});

	if(ifcz){
		return;
	}
	$.ajax({
		url : 'add',
		async :false,
		type : 'POST',
		dataType : 'json',
		data : {
			"username":$("#username").val(),
			"password":$("#password").val(),
			"name":$("#name").val(),
			"admin_power":$("#adm").val(),
			"test_power":$("input[name='cs_power']:checked").val(),
			"check_power":$("input[name='sh_power']:checked").val(),
			"telnumber":$("#tel").val()
		},
		success :function() {
			showUser_method();
		},
		error : function(data) {
			alert("添加失败，用户名已经存在！");
		}
	});
}
//赋予用户角色
function update_method() {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	var id=$("#dqrid").val();
	var reg=/^[0-9]*$/;
	var rname="";
	var ifcz=false;
	var rid= $("#rid").val();
	if(rid==null||rid==""||rid==undefined){
		alert("角色不能为空！");
		return;
	}
	if(!reg.test(rid)){
		alert("请输入正确的角色id！");
		return ;
	}
	if(rid=="1"){
		alert("不能赋予用户超级用户权限！");
		return ;
	}
	if(id=="1"){
		alert("不能给超级用户赋予权限！");
		return ;
	}
	$.ajax({
		url : 'readrole',
		async :false,
		type : 'POST',
		dataType : 'json',
		data : {
			"rid":rid
		},
		success :function(data) {
			ifcz=true;
			rid=data.rid;
			rname=data.rname;
		},
		error : function(data) {
			alert("未找到该角色！");
		}
	});
	if(!ifcz){
		return;
	}
	$.ajax({
		url : 'update',
		async :false,
		type : 'POST',
		dataType : 'json',
		data : {
			"id":$("#id").val(),
			"rid":rid
		},
		success :function() {
			showUser_method();
		},
		error : function(data) {
			alert("修改失败！");
		}
	});
}
//删除用户
function deleteUser_method(sid) {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'delete',
		type : 'POST',
		dataType : 'json',
		data : {"id":sid},
		success :function() {
			showUser_method();
		},
		error : function(data) {
			alert("delete出错了！");
		}
	});
}

function readUser_method(id) {
	$.ajax({
		url : 'read',
		type : 'POST',
		dataType : 'json',
		data : {"id":id},
		success :function(data) {
			$("#id").val(data.id);
			$("#dqrid").val(data.rid);
		},
		error : function(data) {
			alert("读取失败！");
		}
	});
}