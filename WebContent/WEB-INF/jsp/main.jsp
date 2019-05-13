<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>API商店-API接口</title>
<link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.min.css">
<link href="css/css-api.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/api.js" charset="UTF-8"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2_min.js"></script>
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
<li  class="on"  style="color:white"><font  size="3" >首页</font></li>
<li > <a href="main1" style="color:white"><font  size="3" >API接口</font></a></li>
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
</div >
  
<div class="contain">
<div class="wrap" id="wrap">
    <ul id="pic">
        

        <li><img src="images/3.jpg" alt=""></li>
        <li><img src="images/4.jpg" alt=""></li>
        <li><img src="images/5.jpg" alt=""></li>
        
    </ul>
    <ol id="list">
        <li class="on"></li>
        <li></li>
        <li></li>
      
    </ol>
</div>
<div class="popular-api">
<div class="info-1"> <ul></ul><p>推荐API</p></div>
<div class="info-2" id="tjnr">
<ul class="info-3">
<div>
<img src="images/11.jpg" alt="">
</div>
</ul>
</div>
</div>
<div class="popular-data">
<div class="info-1"> <ul></ul><p>热门API</p></div>
<div class="info-2" id="rmnr">
<ul class="info-3">
<div>
</div>
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
<!-- addModal -->
		<div class="modal fade" id="addapi" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body" >
						<form class="form-horizontal api_add_error text-center" method=post enctype="multipart/form-data">
						<div class="error_box text-center" id="err" ></div>
						<input type="hidden" id="uid" />
							<div class="form-group" >
								<label class="col-sm-2 control-label" style="font-size:6em;">接口名</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="aname"
										placeholder="接口名" nullmsg="接口名不能为空！" datatype="s4-20" errormsg="接口名范围在4~20个字符之间！">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label" style="font-size:6em;">接口地址</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="address"
										placeholder="地址" nullmsg="地址不能为空！" datatype="s4-100" errormsg="地址范围在4-100字符之间！">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label" style="font-size:6em;">请求参数</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="request_parameter"
										placeholder="请求参数" nullmsg="请求参数不能为空！" datatype="s1-100" errormsg="请求参数范围在1-100位之间！">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label" style="font-size:6em;">参数详细信息</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="parameter_message"
										placeholder="参数详细信息" nullmsg="参数详细信息不能为空！" datatype="s1-100" errormsg="参数详细信息在4-100字符之间！">
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-2 control-label" style="font-size:6em;">请求示例</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="request_ex"
										placeholder="请求示例" >
								</div>
							</div>	
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消录入</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="addApi_method()"
										data-dismiss="modal">录入api</button>
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
</body>
</html>
	