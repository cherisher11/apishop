$(function(){
$(".api_add_error").Validform({
	tiptype:function(msg,o,cssctl){
		var objtip=$(".error_box");
		cssctl(objtip,o.type);
		objtip.text(msg);
	},
});
});

var stop="";
var  check_power;//审核权限
var  test_power;//测试权限
var admin_power;//管理员权限
var uid;//用户id
//获取当前登录用户信息
function getsession(){
	var rid="";
	$.ajax({
		url : 'getSessionUser',
		async :false,
		type : 'POST',
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			uid=data.id;
			rid=data.rid;
			if(data.rid=="0"){ stop=false;return;}
			else stop=true;
			},
		error : function() {
		}
	});
	$.ajax({
		url : 'readrole',
		type : 'POST',
		async :false,
		dataType : 'json',
		data : {"rid":rid},
		success :function(data) {
			check_power=data.check_power;
			test_power=data.test_power;
			admin_power=data.admin_power;
		},
		error : function(data) {
		}
	});
}
//显示方法
function show_method(){
	getsession();//获取用户信息
	//根据权限选择默认表格
	if(admin_power=="true"){
		showallapi();
		return ;
	}
	if(test_power=="true"){
		showtestapi();
		return;
	}
	if(check_power=="true"){
		showcheckapi();
		return;
	}
	$("#tableBody").html("<p>您没有权限访问！！</p>");
}
//显示所有审核或测试失败的表格
function showfaileapi(){
	//权限判断
	getsession();
	if(admin_power!="true") {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'listapi',
		type : 'POST',
		async :false,
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			var code = "";
			for (var i=0; i<data.length; i++) {
				if(data[i].check_message=="faile"||data[i].test_message=="faile"){
			code += "		<tr>\r\n" + 
			"					<th>"+data[i].aid +"</th>\r\n" + 
			"					<th>"+data[i].aname +"</th>\r\n" + 
			"					<th>"+data[i].address +"</th>\r\n" + 
			"					<th>"+data[i].request_parameter +"</th>\r\n" + 
			"					<th>"+data[i].request_ex +"</th>\r\n" + 
			"					<th>"+data[i].test_message +"</th>\r\n" + 
			"					<th>"+data[i].check_message +"</th>\r\n" + 
			"					<th>"+data[i].cid +"</th>\r\n" + 
			"					<td>\r\n" + 
			"						<button type=\"button\" class=\"btn btn-primary btn-xs\"\r\n" + 
			"							onclick=\"readApi_method("+data[i].aid+")\"  data-toggle=\"modal\" data-target=\"#uModal\">复审核与复测</button>\r\n" + 
			"						<button type=\"button\" class=\"btn btn btn-danger btn-xs\"\r\n" +
			" 							onclick=\"deleteApi_method("+data[i].aid+")\">删除</button>\r\n" + 
			"					</td>\r\n" + 
			"				</tr>";
				}
			}
			if (code==""||code==null) code+="无faile表信息!";
			$("#tableBody").html(code);
		},
		error : function() {
			alert("show出错了！");
		}
	});
}
//显示所有当前用户上传的api信息，任何用户可以访问
function showmyapi(){
	getsession();
	$.ajax({
		url : 'listapi',
		type : 'POST',
		async :false,
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			var code = "";
			for (var i=0; i<data.length; i++) {
				if(data[i].uid==uid){
			code += "		<tr>\r\n" + 
			"					<th>"+data[i].aid +"</th>\r\n" + 
			"					<th>"+data[i].aname +"</th>\r\n" + 
			"					<th>"+data[i].address +"</th>\r\n" + 
			"					<th>"+data[i].request_parameter +"</th>\r\n" + 
			"					<th>"+data[i].request_ex +"</th>\r\n" + 
			"					<th>"+data[i].test_message +"</th>\r\n" + 
			"					<th>"+data[i].check_message +"</th>\r\n" + 
			"					<th>"+data[i].cid +"</th>\r\n" + 
			"					<td>\r\n" + 
			"						<button type=\"button\" class=\"btn btn-primary btn-xs\"\r\n" + 
			"							onclick=\"readApi_method("+data[i].aid+")\"  data-toggle=\"modal\" data-target=\"#scpModal\">上传图片</button>\r\n" + 
			"					</td>\r\n" + 
			"				</tr>";
				}
			}
			if (code==""||code==null) code+="您没有录入任何api!";
			$("#tableBody").html(code);
		},
		error : function() {
			alert("show出错了！");
		}
	});
}
//显示所有公共接口，并提供分类功能
function showpublic_method(){
	getsession();
	if(admin_power!="true") {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'listapi',
		type : 'POST',
		async :false,
		dataType : 'json',
		success : function(data) {
			var code = "";
			for (var i=0; i<data.length; i++) {
				if(data[i].check_message=="true"&&data[i].test_message=="true"&&data[i].cid==0){
			code += "		<tr>\r\n" + 
			"					<th>"+data[i].aid +"</th>\r\n" + 
			"					<th>"+data[i].aname +"</th>\r\n" + 
			"					<th>"+data[i].address +"</th>\r\n" + 
			"					<th>"+data[i].request_parameter +"</th>\r\n" + 
			"					<th>"+data[i].request_ex +"</th>\r\n" + 
			"					<th>"+data[i].test_message +"</th>\r\n" + 
			"					<th>"+data[i].check_message +"</th>\r\n" + 
			"					<th>"+data[i].cid +"</th>\r\n" + 
			"					<td>\r\n" + 
			"						<button type=\"button\" class=\"btn btn-primary btn-xs\"\r\n" + 
			"							onclick=\"readApi_method("+data[i].aid+")\"  data-toggle=\"modal\" data-target=\"#xgcModal\">修改类别</button>\r\n" + 
			"					</td>\r\n" + 
			"				</tr>";
				}
			}
			if (code==""||code==null) code+="无公共接口信息!";
			$("#tableBody").html(code);
		},
		error : function() {
			alert("show出错了！");
		}
	});
}
//显示待审核api表
function showcheckapi(){
	getsession();
	if(check_power!="true") {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'listapi',
		type : 'POST',
		async :false,
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			var code = "";
			for (var i=0; i<data.length; i++) {
				if(data[i].check_message=="false"&&data[i].test_message=="false"){
			code += "		<tr>\r\n" + 
			"					<th>"+data[i].aid +"</th>\r\n" + 
			"					<th>"+data[i].aname +"</th>\r\n" + 
			"					<th>"+data[i].address +"</th>\r\n" + 
			"					<th>"+data[i].request_parameter +"</th>\r\n" + 
			"					<th>"+data[i].request_ex +"</th>\r\n" + 
			"					<th>"+data[i].test_message +"</th>\r\n" + 
			"					<th>"+data[i].check_message +"</th>\r\n" + 
			"					<th>"+data[i].cid +"</th>\r\n" + 
			"					<td>\r\n" + 
			"						<button type=\"button\" class=\"btn btn-primary btn-xs\"\r\n" + 
			"							onclick=\"readApi_method("+data[i].aid+")\"  data-toggle=\"modal\" data-target=\"#shModal\">审核</button>\r\n" + 
			"					</td>\r\n" + 
			"				</tr>";
				}
			}
			if (code==""||code==null) code+="无待审核信息!";
			$("#tableBody").html(code);
		},
		error : function() {
			alert("show出错了！");
		}
	});
}
//显示待测试api表
function showtestapi(){
	getsession();
	if(test_power!="true") {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'listapi',
		type : 'POST',
		async :false,
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			var code = "";
			for (var i=0; i<data.length; i++) {
				if(data[i].check_message=="true"&&data[i].test_message=="false"){
			code += "		<tr>\r\n" + 
			"					<th>"+data[i].aid +"</th>\r\n" + 
			"					<th>"+data[i].aname +"</th>\r\n" + 
			"					<th>"+data[i].address +"</th>\r\n" + 
			"					<th>"+data[i].request_parameter +"</th>\r\n" + 
			"					<th>"+data[i].request_ex +"</th>\r\n" + 
			"					<th>"+data[i].test_message +"</th>\r\n" + 
			"					<th>"+data[i].check_message +"</th>\r\n" + 
			"					<th>"+data[i].cid +"</th>\r\n" + 
			"					<td>\r\n" + 
			"						<button type=\"button\" class=\"btn btn-primary btn-xs\"\r\n" + 
			"							onclick=\"readApi_method("+data[i].aid+")\"  data-toggle=\"modal\" data-target=\"#csModal\">测试</button>\r\n" + 
			"					</td>\r\n" + 
			"				</tr>";
				}
			}
			if (code==""||code==null) code+="无待测试信息！";
			$("#tableBody").html(code);
		},
		error : function() {
			alert("show出错了！");
		}
	});
}
//显示所有api信息
function showallapi(){
	getsession();
	if(admin_power!="true") {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'listapi',
		type : 'POST',
		async :false,
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			var code = "";
			for (var i=0; i<data.length; i++) {
				if(data[i].check_message=="true"&&data[i].test_message=="true"){
			code += "		<tr>\r\n" + 
			"					<th>"+data[i].aid +"</th>\r\n" + 
			"					<th>"+data[i].aname +"</th>\r\n" + 
			"					<th>"+data[i].address +"</th>\r\n" + 
			"					<th>"+data[i].request_parameter +"</th>\r\n" + 
			"					<th>"+data[i].request_ex +"</th>\r\n" + 
			"					<th>"+data[i].test_message +"</th>\r\n" + 
			"					<th>"+data[i].check_message +"</th>\r\n" + 
			"					<th>"+data[i].cid +"</th>\r\n" + 
			"					<td>\r\n" + 
			"						<button type=\"button\" class=\"btn btn-primary btn-xs\"\r\n" + 
			"							onclick=\"readApi_method("+data[i].aid+")\"  data-toggle=\"modal\" data-target=\"#uModal\">复审核与测试</button>\r\n" + 
			"					</td>\r\n" + 
			"				</tr>";
				}
			}
			$("#tableBody").html(code);
		},
		error : function() {
			alert("show出错了！");
		}
	});
}

//添加api方法
function addApi_method() {
	getsession();
	if(admin_power!="true") {
		$("#tableBody").html("<p>您没有权限添加！！</p>");
		return;
		}
	var aname = $("#aname").val();
	var address=$("#address").val();
	var request_parameter=$("#request_parameter").val();
	var parameter_message=$("#parameter_message").val();
	if(aname==null||aname==""||aname==undefined){
		alert("接口名不能为空！");
		return;
	}
	if(address==null||address==""||address==undefined){
		alert("接口地址不能为空！");
		return;
	}
	if(request_parameter==null||request_parameter==""||request_parameter==undefined){
		alert("请求参数不能为空！");
		return;
	}
	if(parameter_message==null||parameter_message==""||parameter_message==undefined){
		alert("参数详情不能为空！");
		return;
	}
	$.ajax({
		url : 'addapi',
		type : 'POST',
		dataType : 'json',
		async: false, 
		data : {
			"aname":$("#aname").val(),
			"address":$("#address").val(),
			"request_parameter":$("#request_parameter").val(),
			"parameter_message":$("#parameter_message").val(),
			"request_ex":$("#request_ex").val(),
			"uid":1
		},
		success :function() {
			showallapi();
		},
		error : function(data) {
			alert("录入失败！");
		}
	});
}
//删除api方法
function deleteApi_method(aid) {
	getsession();
	if(admin_power!="true") {
		$("#tableBody").html("<p>您没有权限删除！！</p>");
		return;
		}
	$.ajax({
		url : 'deleteapi',
		type : 'POST',
		dataType : 'json',
		data : {"id":aid},
		success :function() {
			showfaileapi();
		},
		error : function(data) {
			alert("delete出错了！");
		}
	});
}
//读api
function readApi_method(aid) {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	$.ajax({
		url : 'readapi',
		type : 'POST',
		dataType : 'json',
		data : {"id":aid},
		success :function(data) {
			$("#aid").val(data.aid);
			$("#aid1").val(data.aid);
			$("#aid2").val(data.aid);
			$("#aid3").val(data.aid);
			$("#aid4").val(data.aid);
		},
		error : function(data) {
			alert("读取失败！");
		}
	});
}
//审核方法
function shapi_method() {
	getsession();
	if(check_power!="true") {
		$("#tableBody").html("<p>您没有权限修改！！</p>");
		return;
		}
	$.ajax({
		url : 'shapi',
		type : 'POST',
		dataType : 'json',
		data : {
			"aid":$("#aid1").val(),
			"check_message":$("input[name='sh_power']:checked").val()
		},
		success :function() {
			showcheckapi();
		},
		error : function(data) {
			alert("审核失败！");
		}
	});
}
//测试方法
function csapi_method() {
	getsession();
	if(test_power!="true") {
		$("#tableBody").html("<p>您没有权限修改！！</p>");
		return;
		}
	$.ajax({
		url : 'csapi',
		type : 'POST',
		dataType : 'json',
		data : {
			"aid":$("#aid2").val(),
			"test_message":$("input[name='cs_power']:checked").val()
		},
		success :function() {
			showtestapi();
		},
		error : function(data) {
			alert("修改失败！");
		}
	});
}
//管理员复审核与测试
function updateapi_method() {
	getsession();
	if(admin_power!="true") {
		$("#tableBody").html("<p>您没有权限修改！！</p>");
		return;
		}
	$.ajax({
		url : 'updateapi',
		type : 'POST',
		dataType : 'json',
		async: false, 
		data : {
			"aid":$("#aid").val(),
			"test_message":$("input[name='cs_power1']:checked").val(),
			"check_message":$("input[name='sh_power1']:checked").val()
		},
		success :function() {
			showallapi();
		},
		error : function(data) {
			alert("修改失败！");
		}
	});
}
//分类方法
function updateclassify_method() {
	getsession();
	if(stop!=true) {
		$("#tableBody").html("<p>您没有权限访问！！</p>");
		return;
		}
	var reg=/^[0-9]*$/;
	var rname="";
	var ifcz=false;
	var cid= $("#cid").val();
	if(cid==null||cid==""||cid==undefined){
		alert("id不能为空！");
		return;
	}
	if(!reg.test(cid)){
		alert("请输入正确的类别id！");
		return ;
	}
	$.ajax({
		url : 'readclassify',
		async :false,
		type : 'POST',
		dataType : 'json',
		data : {
			"cid":cid
		},
		success :function(data) {
			ifcz=true;
			cid=data.cid;
		},
		error : function(data) {
			alert("未找到该类别！");
		}
	});
	if(!ifcz){
		return;
	}
	$.ajax({
		url : 'update_cid',
		async :false,
		type : 'POST',
		dataType : 'json',
		data : {
			"aid":$("#aid3").val(),
			"cid":cid
		},
		success :function() {
			showpublic_method();
		},
		error : function(data) {
			alert("分类失败！");
		}
	});
}
//图片上传
function check_pic(){
	var aid= $("#aid4").val(); 
	var picpath= $("#picture").val(); 
	if(picpath==""){
	alert("图片不能为空!");
	return false;
    }
	$.ajax({
		url : 'upload_pic',
		async :false,
		type : 'POST',
		dataType : 'json',
		data : {
			"aid":$("#aid").val(),
			"pic_path":1
		},
		success :function() {
			showpublic_method();
		},
		error : function(data) {
			alert("分类失败！");
		}
	});
	alert("上传成功");
	return true;
}
function tocs(){
	window.open("ceshi");
}