<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>API商店-API接口</title>
<link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.min.css">
<link href="css/css-api.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/api1.js" charset="UTF-8"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="bootstrap-3.3.7/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="bootstrap-3.3.7/js/bootstrap.js"></script>
</head>

<body>
<div class="header">
<div class="name">
<p  style="color:white"><font  size="4" >API商店</font></p>
</div>
<div class="choose" style="color:white">
<ul class="view">
<li ><a href="main" style="color:white"><font  size="3" >首页</font></a></li>
<li class="on" style="color:white"> <a href="main1" style="color:white"><font  size="3" >API接口</font></a></li>
<li > <a href="admin" style="color:white"><font  size="3" >管理页面</font></a></li>
</ul>
<ul class="userlogin" style="display:block" id="loginbtn">
<li><input  class='btn btn-primary btn-xs' style="
          width: 100px;
          height: 30px;
           font-size: 16px;
           "  type="button" value="登陆/注册"   onclick="tologin()"/></li>
</ul>
<ul class="userlogin" style="display:none" id="logintext">
<p  class="username" style="color:white" id="usernamebox" value="" >

</p>

</ul>
</div>
</div>
<div class="contain">
<div class="classfiy" id="classify">
<ul>
<p style="font-weight:bold;">API分类：</p>
<li class="on" >全部</li>
</ul>
</div>
<div class="popular-api">
<div class="info-2" id="showcontext">
<ul class="info-3">

</ul>
</div>
</div>
</div>
<div class="foot">
<nav class="footer">
    <div class="footer-content "   >
            <ul>
                <li class="title">关于我们</li>
                <li><a href="#">公司介绍</a></li>
                <li><a href="#">业务模式</a></li>
                <li><a href="#">合作机会</a></li>
                <li><a href="#">服务协议</a></li>
            </ul>
            <ul>
                <li class="title">风险防范</li>
                <li><a href="#">账户安全</a></li>
                <li><a href="#">安全保障</a></li>
            </ul>
            <ul>
                <li class="title">产品</li>
                <li><a href="#">API</a></li>
                <li><a href="#">数据包</a></li>
            </ul>
            <ul>
                <li class="title">交易</li>
                <li><a href="#">购买</a></li>
                <li><a href="#">试用</a></li>
            </ul>
            <ul>
                <li class="title">机构服务</li>
                <li><a href="#">机构中心</a></li>
                <li><a href="#">合作联系</a></li>
            </ul>
        </div>
  
</nav>

<footer >
   
    <p style="color:white">某公司 版权所有 © 2017-2018</p>
</footer>
</div>

</body>
</html>
