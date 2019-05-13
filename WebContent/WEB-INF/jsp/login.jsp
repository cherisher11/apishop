<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@   page   import= "com.sendmessage.* "%>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>用户登录</title>
<link href="css/login.css" rel="stylesheet" rev="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="js/jQuery1.7.js"></script>
<script type="text/javascript" src="js/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="js/jquery1.42.min.js"></script>
<script type="text/javascript" src="js/jquery.SuperSlide.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2_min.js"></script>
<script type="text/javascript" src="js/js-login.js"></script>
<script type="text/javascript" src="js/jsencrypt.min.js"></script>
</head>

<body>
<div id="tab">
  <ul class="tab_menu">
    <li class="selected">用户登录</li>
    <li>用户注册</li>
  
  </ul>
  <div class="tab_box"> 
    <!-- 用户登录开始 -->
    <div>
     <div class="stu_error_box">${message}</div>
      <form  id="loginform" action="logining"  method=post class="stu_login_error" onsubmit="return checkloginForm()">
        <div id="username" >
          <label>账&nbsp;&nbsp;&nbsp;号：</label>
          <input type="text" id="loginname" name="loginname" placeholder="用户名" nullmsg="用户账号不能为空！" datatype="*4-18" errormsg="账号范围在4~18个位之间！" sucmsg=""/>
        </div >
        <div>
          <label>密&nbsp;&nbsp;&nbsp;码：</label>
         <input name="password" type="password" id="password" placeholder="密码"  nullmsg="密码不能为空！" datatype="*2-16" errormsg="密码范围在2~16位之间！" sucmsg=""/>
        <input type='hidden' name='rsa_pwd' id='rsa_pwd' value=''/>
        </div>
        <div id="code">
          <label>验证码：</label>
          <input type="text" id="tea_code_hide" name="code"  placeholder="输入验证码" nullmsg="验证码不能为空！" datatype="*4-4" errormsg="验证码有4位数！" sucmsg=""/>
          <img src="checkcode.jsp"  style=" border-radius: 5px;width: 30%; height: 40px; text-align: center; padding-left: 2px"  title="点击更换" alt="验证码占位图" id="checkcode_img" onClick="change_yanzhengma();"/> </div>
        <div id="remember" name="remember">
          <input type="checkbox" name="remember">
          <label>记住用户名</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="resetpwd">忘记密码？</a>
        </div>
        <div id="login">
          <button type="submit">登录</button>
        </div>
      </form>
    </div>
   <!-- 用户登录结束-->
   <!-- 用户注册开始-->
    <div class="hide">
     <div class="tea_error_box">${message}</div>
      <form action="register" method=post class="tea_login_error" onsubmit="return checkregisterForm()">
         <div id="username">
          <label>账&nbsp;&nbsp;&nbsp;号：</label>
          <input type="text" id="rgname" name="rgname" placeholder="用户名" nullmsg="用户账号不能为空！" datatype="*4-18" errormsg="账号范围在4~18个位之间！" sucmsg=""/>
        </div >
        <div>
          <label>密&nbsp;&nbsp;&nbsp;码：</label>
          <input name="password1" type="password" id="password1" placeholder="密码"  nullmsg="密码不能为空！" datatype="*2-16" errormsg="密码范围在2~16位之间！" sucmsg=""/>
       <input type='hidden' name='rsa_pwd1' id='rsa_pwd1' value=''/>
        </div >
          <div id="nc">
          <label>昵&nbsp;&nbsp;&nbsp;称：</label>
          <input name="nicheng" type="text" id="nicheng" placeholder="昵称" nullmsg="昵称不能为空！" datatype="*1-16" errormsg="昵称范围在1~16位之间！" sucmsg=""/>
        </div >
          <div id="tel">
          <label>电&nbsp;&nbsp;&nbsp;话：</label>
          <input name="tel" type="text" id="tel" placeholder="电话号码" nullmsg="电话号码不能为空！" value="" datatype="/^[1]([3-9])[0-9]{9}$/" errormsg="请填写正确的电话号码！" sucmsg=""/>
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
        <div id="login">
          <button type="submit">注册</button> 
        </div>
      </form>
    </div>
     <!-- 用户注册结束-->
    
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
<script type="text/javascript" src="js/js-login.js"></script>
</html>
