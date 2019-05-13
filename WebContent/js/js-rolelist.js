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
//显示角色
function showRole_method() {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'listrole',
		type : 'POST',
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			var code = "";
			for (var i=0; i<data.length; i++) {
			code += "		<tr>\r\n" + 
			"					<th>"+data[i].rid +"</th>\r\n" + 
			"					<th>"+data[i].rname +"</th>\r\n" + 
			"					<th>"+data[i].admin_power +"</th>\r\n" + 
			"					<th>"+data[i].check_power +"</th>\r\n" + 
			"					<th>"+data[i].test_power +"</th>\r\n" + 
			"					<td>\r\n" + 
			"						<button type=\"button\" class=\"btn btn-primary btn-xs\"\r\n" + 
			"							onclick=\"readRole_method("+data[i].rid+")\"  data-toggle=\"modal\" data-target=\"#rModal\">修改权限</button>\r\n" + 
			"						<button type=\"button\" class=\"btn btn btn-danger btn-xs\"\r\n" +
			" 							onclick=\"deleteRole_method("+data[i].rid+")\">删除</button>\r\n" + 
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
//添加角色
function addRole_method() {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	var reg1=/^.{4,18}$/
	var role = $("#rolename").val();
	if(!reg1.test(role)){
		alert("角色名必须是4到18个字符之间！");
		return;
	}
	$.ajax({
		url : 'addrole',
		type : 'POST',
		dataType : 'json',
		data : {
			"rname":$("#rolename").val(),
			"test_power":$("input[name='cs_power']:checked").val(),
			"check_power":$("input[name='sh_power']:checked").val()
		},
		success :function() {
			showRole_method();
		},
		error : function(data) {
			alert("添加失败，角色名已经存在！");
		}
	});
}
//删除角色
function deleteRole_method(sid) {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'deleterole',
		type : 'POST',
		dataType : 'json',
		data : {"id":sid},
		success :function() {
			showRole_method();
		},
		error : function(data) {
			alert("delete出错了！");
		}
	});
}
function readRole_method(rid) {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'readrole',
		type : 'POST',
		dataType : 'json',
		data : {"rid":rid},
		success :function(data) {
			$("#rid").val(data.rid)
		},
		error : function(data) {
			alert("读取失败！");
		}
	});
}
//更改角色名
function update_method() {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'updaterole',
		type : 'POST',
		dataType : 'json',
		data : {
			"rid":$("#rid").val(),
			"test_power":$("input[name='cs_power1']:checked").val(),
			"check_power":$("input[name='sh_power1']:checked").val()
		},
		success :function() {
			showRole_method();
		},
		error : function(data) {
			alert("修改失败！");
		}
	});
}