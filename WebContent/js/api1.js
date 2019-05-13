//获取登陆用户信息
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
					obj.innerHTML= "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href='mymessage?id="+data.id+"'>"+"<font  size='4' >"+data.name+"</font></a>"+
						"<font  size='4' >，欢迎登陆！          </font>"+"<a href='exit'><font  size='4' >退出登陆</font></a>";
				}
				},
			error : function() {
			}
		});
	}
 window.onload = function() {
	 getsession();//获取用户登陆信息
	 showclassify_catalog();//显示api分类信息
	 showallapi();//显示所有api
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
 //登陆页面跳转
 function tologin(){
	 window.location.href='login';
 }
//显示api分类信息方法
 function showclassify_catalog(){
	 var classify=document.getElementById("classify");
	 var code="<ul><p style='font-weight:bold;'>API分类：</p>"+"<li class='on' ><a href='#' onclick=' return showallapi()'>全部</a></li>";
	 $.ajax({
			url : 'listclassify',
			type : 'POST',
			async :false,
			dataType : 'json',
			/* data : params, */
			success : function(data) {
				for(var i=0; i<data.length;i++){
					
				code +="<li>"
				code +="<a href='#' onclick='return showclassify_context("+data[i].cid+")'>"+data[i].cname+"</a>";
			    code +="</li>"
			    	
				}
			},
			error : function() {
			}
		});
	 code+="</ul></div>"
	 classify.innerHTML=code;
 }
 //显示所有api信息方法
function showallapi(){
	var showall=document.getElementById("showcontext");
	 var code="<ul class='info-3'>";
		$.ajax({
			url : 'listapi',
			type : 'POST',
			async :false,
			dataType : 'json',
			/* data : params, */
			success : function(data) {
				for (var i=0; i<data.length; i++) {
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
		showall.innerHTML=code;
		return false;
}
//显示某一类所有api信息
function showclassify_context(cid){
	var showcontext=document.getElementById("showcontext");
	 var code="<ul class='info-3'>";
	 $.ajax({
			url : 'listapi',
			type : 'POST',
			async :false,
			dataType : 'json',
			/* data : params, */
			success : function(data) {
				for (var i=0; i<data.length; i++) {
					if(data[i].check_message=="true"&&data[i].test_message=="true"){
					if(data[i].cid==cid){
						var pic_path="images/6.jpg";//默认图片
						if(data[i].pic_path==1) pic_path="/api_pic/"+data[i].aid+".jpg";//如果用户上传了图片，则用用户的图片
				code += "		<div>\r\n" + 
				"				<img src='"+pic_path+"'>"+  
				"<p style='font-size:20px' align='center'>"+"<a href='display?aid="+data[i].aid+"'>"+data[i].aname +"</a></p>\r\n" + 
				"				</div>";
					}
				}
				}
			},
			error : function() {
			}
		});
	 code=code+"</ul>";
	 showcontext.innerHTML=code;
		return false;
}