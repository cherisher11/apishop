<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@   page   import= "com.sendmessage.* "%>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>重置密码</title>
<link href="css/login.css" rel="stylesheet" rev="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="js/jQuery1.7.js"></script>
<script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="js/jquery1.42.min.js"></script>
<script type="text/javascript" src="js/jquery.SuperSlide.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2_min.js"></script>
<script type="text/javascript" src="js/jsencrypt.min.js"></script>
</head>
<body>
<div id="tab">
  <div class="tab_box"> 
    <div>
        <form action="updatepwd" method=post class="reset_error" onsubmit="return checkresetForm()">
         <div class="error_box">${message}</div>

          <div id="tel">
          <label>电&nbsp;&nbsp;&nbsp;话：</label>
          <input name="tel" type="text" id="tel" placeholder="电话号码" nullmsg="电话号码不能为空！" value="" datatype="m" errormsg="请填写正确的电话号码！" sucmsg=""/>
        </div >
 <div id="code">
          <label>验证码：</label>
          <input type="text" id="code" name="code"  placeholder="输入验证码" nullmsg="验证码不能为空！" datatype="*6-6" errormsg="验证码有6位数！" sucmsg=""/>
          <input  type="button" value="发送验证码" style="
          width: 150px;
          height: 50px;
          border-radius: 12px;
          background-color: #f44336;
           font-size: 16px;
           color:white;
           " 
           id="getCode"  onclick="time()"/>
           </div>
        <div>
        <div >
          <label>密&nbsp;&nbsp;&nbsp;码：</label>
          <input name="password" type="password" id="password" placeholder="密码"  nullmsg="密码不能为空！" datatype="*2-16" errormsg="密码范围在2~16位之间！" sucmsg=""/>
           <input type='hidden' name='rsa_pwd' id='rsa_pwd' value=''/>
        </div>
          <button type="submit">更改密码</button>
        </div>
      </form>
    </div>
    </div> 
  </div>
<div class="screenbg">
  <ul>
    <li><a href="javascript:;"><img src="images/0.jpg"></a></li>
    <li><a href="javascript:;"><img src="images/1.jpg"></a></li>
    <li><a href="javascript:;"><img src="images/2.jpg"></a></li>
  </ul>
</div>
</body>
<script type="text/javascript" src="js/js-rsetpwd.js"></script>
</html>
