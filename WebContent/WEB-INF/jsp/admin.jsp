<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="ch">
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="format-detection" content="telephone=no">
        <title>后台管理</title>
        <script src="js/jquery.min.js"></script>
         <script src="js/js-admin.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <!--[if lt IE 9]>
<![endif]-->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/common.css" />
 
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />

        <link rel="stylesheet" type="text/css" href="css/jquery.nouislider.css">
</head>
<body>
<div id="wrap"> 
    <div style="background-color:#354457; height:40px; ">
     <p style="
     height: 40px;float: right;margin-top: 10px;margin-right:10px;
    "><a href="main">主页</a></p>
     <p style="
     height: 40px;float: right;margin-top: 10px;margin-right:10px;
    "><a href="exit">退出登录</a></p>
    </div>
    <!-- 左侧菜单栏目块 -->
    <div class="leftMeun" id="leftMeun">
 
    <div id="personInfor">
              <img src="images/user1.png" style="width:90%;">
<p  class="username"align="center" style="   margin-bottom:-5px;" id="usernamebox" value="" ></p>
            </div>
    <div class="meun-item meun-item-active" href="#user" aria-controls="user" role="tab" data-toggle="tab"> <img src="images/icon_card_grey.png">用户管理 </div>
<div class="meun-item " href="#scho" aria-controls="scho" role="tab" data-toggle="tab"><img src="images/icon_user_grey.png">角色管理</div>
    <div class="meun-item " href="#sour" aria-controls="sour" role="tab" data-toggle="tab"> <img src="images/icon_source.png">资源管理 </div>
        <div class="meun-item " href="#classify" aria-controls="classify" role="tab" data-toggle="tab"> <img src="images/icon_source.png">类别管理 </div>
  </div>
<!-- 右侧具体内容栏目 -->
<div id="rightContent"> 
          
          <!-- Tab panes -->
          <div class="tab-content"> 
    <!-- 资源管理模块 -->
    <div role="tabpanel" class="tab-pane " id="sour">
  <iframe src="listApi"width="100%"  height="100%" ></iframe>  
     </div>
    <!-- 用户管理模块 -->
     <div role="tabpanel" class="tab-pane active" id="user">             
    <iframe src="listUser"width="100%"  height="100%" ></iframe>   
     </div>
     
     <!--角色管理模块-->   
        <div role="tabpanel"  class="tab-pane " id="scho">
 <iframe src="listRole" width="100%"  height="100%" ></iframe>   
     </div>
      <!-- 资源管理模块 -->
     <div role="tabpanel" class="tab-pane active" id="classify">             
    <iframe src="listClassify" width="100%"  height="100%" ></iframe>   
     </div>
  </div>
        
</div>
</body>
</html>