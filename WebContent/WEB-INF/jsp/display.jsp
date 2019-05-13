<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>API商店</title>
<link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.min.css">
<link href="css/css-api2.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/display.js"></script>
<script type="text/jscript">

   

</script>
</head>

<body>
<div class="header">
<div class="name">
<p style="color:white">API商店</p>
</div>
<div class="choose">
<ul class="view">
<li ><a href="main" style="color:white"><font  size="3" >首页</font></a></li>
<li > <a href="main1" style="color:white"><font  size="3" >API接口</font></a></li>
</ul>
<ul class="userlogin" style="display:block" id="loginbtn">
</ul>
<ul class="userlogin" style="display:none" id="logintext">
</div>
</div>
<div class="box">
<div class="simple-info">
<div class="logo" id="apilogo">
</div>
<div class="s-info1" id="api_message1">
</div>
</div>
<div class="main-info">
<div class="notice-tit" id="notice-tit">
            <ul >
                <li  class="selected" >API接口</li>
            </ul>
        </div>
        <div class="notice-con" id="notice-con">
            <div style="display:block" id="api_message2">
            <ul>接口信息
            <li>正在加载</li>
             </div >
</div>
</div>
</body>
</html>
	