//获取用户登陆信息
function getsession(){
		$.ajax({
			url : 'getSessionUser',
			async :false,
			type : 'POST',
			dataType : 'json',
			/* data : params, */
			success : function(data) {
				if(data!=null&&data.username!="null"){
					var loginb=document.getElementById("loginbtn");
					var logint=document.getElementById("logintext");
					var obj = document.getElementById("usernamebox");
					loginbtn.style.display="none";
					logint.style.display = "block";
					obj.innerHTML= "<button type='button' class='btn btn-primary btn-xs'  id='add_user'data-toggle='modal' data-target='#addapi'>我要录入api</button>"
						+"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href='mymessage?id="+data.id+"'>"+"<font  size='4' >"+data.name+"</font></a>"+
						"<font  size='4' >，欢迎登陆！          </font>"+"<a href='exit'><font  size='4' >退出登陆</font></a>";
				}
				},
			error : function() {
			}
		});
	}
 window.onload = function() {
	 getsession();//获取用户登陆信息
	 showtuijian();//显示推荐api信息
	 showremen();//显示热门api信息
     var wrap = document.getElementById('wrap'),
         pic = document.getElementById('pic'),
         list = document.getElementById('list').getElementsByTagName('li'),
         index = 0,
         timer = null;
     // 若果有在等待的定时器，则清掉
     if (timer) {
         clearInterval(timer);
         timer = null;
     }

     // 自动切换
     timer = setInterval(autoPlay, 2000);

     // 定义并调用自动播放函数
     function autoPlay() {
         index++;
         if (index >= list.length) {
             index = 0;
         }
         changeImg(index);
     }

     // 定义图片切换函数
     function changeImg(curIndex) {
         for (var j = 0; j < list.length; j++) {
             list[j].className = "";
         }
         // 改变当前显示索引
         list[curIndex].className = "on";
         pic.style.marginTop = -400* curIndex + "px";
         index = curIndex;
     }

     // 鼠标划过整个容器时停止自动播放
     wrap.onmouseover = function() {
         clearInterval(timer);
     }

     // 鼠标离开整个容器时继续播放至下一张
     wrap.onmouseout = function() {
         timer = setInterval(autoPlay, 2000);
     }

     // 遍历所有数字导航实现划过切换至对应的图片
     for (var i = 0; i < list.length; i++) {
         list[i].id = i;
         list[i].onmouseover = function() {
             clearInterval(timer);
             changeImg(this.id);
         }
     }
 }
 //登陆跳转页面
 function tologin(){
	 window.location.href='login';
 }
 //显示推荐api信息方法
 function showtuijian(){
	 var tjnr=document.getElementById("tjnr");
	 var code="<ul class='info-3'>";
		$.ajax({
			url : 'listapi',
			type : 'POST',
			async :false,
			dataType : 'json',
			/* data : params, */
			success : function(data) {
				for (var i=0; i<data.length&&i<4; i++) {
					if(data[i].check_message=="true"&&data[i].test_message=="true"){
						var pic_path="images/6.jpg";//默认图片
						if(data[i].pic_path==1) pic_path="/api_pic/"+data[i].aid+".jpg";//如果用户上传了图片，则用用户的图片
				code += "		<div>\r\n" + 
				"				<img src='"+pic_path+"'>"+  
				"<p style='font-size:20px' align='center'>"+"<a href='display?aid="+data[i].aid+"'>"+data[i].aname +"</a></p>\r\n" + 
				"				</div>";
					}
				}
			},
			error : function() {
			}
		});
		code=code+"</ul>";
		tjnr.innerHTML=code;
 }
 //显示热门api信息方法
 function showremen(){
	 var rmnr=document.getElementById("rmnr");
	 var code="<ul class='info-3'>";
		$.ajax({
			url : 'listapi',
			type : 'POST',
			async :false,
			dataType : 'json',
			/* data : params, */
			success : function(data) {
				for (var i=0; i<data.length&&i<4; i++) {
					
					if(data[i].check_message=="true"&&data[i].test_message=="true"){
						var pic_path="images/6.jpg";//默认图片
						if(data[i].pic_path==1) pic_path="/api_pic/"+data[i].aid+".jpg";//如果用户上传了图片，则用用户的图片
				code += "		<div>\r\n" + 
				"				<img src='"+pic_path+"'>"+  
				"<p style='font-size:20px' align='center'>"+"<a href='display?aid="+data[i].aid+"'>"+data[i].aname +"</a></p>\r\n" + 
				"				</div>";
					}
				}
			},
			error : function() {
			}
		});
		code=code+"</ul>";
		rmnr.innerHTML=code;
 }
 var userid="";
 var stop=true;
 function getsessionid(){
		$.ajax({
			url : 'getSessionUser',
			async :false,
			type : 'POST',
			dataType : 'json',
			/* data : params, */
			success : function(data) {
				if(data.id!=""||data.id!=null||data.id!="undefined"){
					userid=data.id;
					stop=false;
				}
			},
			error : function() {
			}
		});
	}
 //api录入方法
 function addApi_method() {
		getsessionid();
		if(stop==true) {
			alert("您还没有登录，不能录入！");
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
				"uid":userid
			},
			success :function() {
				alert("录入成功，已经提交审核人员审核！");
			},
			error : function(data) {
				alert("录入失败！");
			}
		});
	}