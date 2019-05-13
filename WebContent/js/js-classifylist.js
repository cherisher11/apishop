$(function(){
$(".add_error").Validform({
	tiptype:function(msg,o,cssctl){
		var objtip=$(".error_box");
		cssctl(objtip,o.type);
		objtip.text(msg);
	},
});
});
//获取当前登陆用户信息
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
//显示类别方法
function showclassify_method() {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'listclassify',
		type : 'POST',
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			var code = "";
			for (var i=0; i<data.length; i++) {
			code += "		<tr>\r\n" + 
			"					<th>"+data[i].cid +"</th>\r\n" + 
			"					<th>"+data[i].cname +"</th>\r\n" + 
			"					<td>\r\n" + 
			"						<button type=\"button\" class=\"btn btn-primary btn-xs\"\r\n" + 
			"							onclick=\"readclassify_method("+data[i].cid+")\"  data-toggle=\"modal\" data-target=\"#rModal\">修改类别名</button>\r\n" + 
			"						<button type=\"button\" class=\"btn btn btn-danger btn-xs\"\r\n" +
			" 							onclick=\"deleteclassify_method("+data[i].cid+")\">删除</button>\r\n" + 
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
//添加类别方法
function addclassify_method() {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	var reg1=/^.{1,18}$/
	var cname = $("#cname").val();
	if(!reg1.test(cname)){
		alert("类别名必须是1到18个字符之间！");
		return;
	}
	$.ajax({
		url : 'addclassify',
		type : 'POST',
		dataType : 'json',
		data : {
			"cname":$("#cname").val()
		},
		success :function() {
			showclassify_method();
		},
		error : function(data) {
			alert("添加失败，类别名已经存在！");
		}
	});
}
//删除类别方法
function deleteclassify_method(id) {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'deleteclassify',
		type : 'POST',
		dataType : 'json',
		data : {"id":id},
		success :function() {
			showclassify_method();
		},
		error : function(data) {
			alert("delete出错了！");
		}
	});
}
function readclassify_method(cid) {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'readclassify',
		type : 'POST',
		dataType : 'json',
		data : {"cid":cid},
		success :function(data) {
			$("#cid").val(data.cid);
		},
		error : function(data) {
			alert("读取失败！");
		}
	});
}
//修改类别名方法
function update_method() {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'updateclassify',
		type : 'POST',
		dataType : 'json',
		data : {
			"cid":$("#cid").val(),
			"cname":$("#cname1").val()
		},
		success :function() {
			showclassify_method();
		},
		error : function(data) {
			alert("修改失败！");
		}
	});
}