//登陆跳转
function tologin(){
	 window.location.href='login';
}
//获取api类别信息
function classifyget(cid){
	var cname;
	$.ajax({
		url : 'readclassify',
		type : 'POST',
		async :false,
		dataType : 'json',
		data : {"cid":cid},
		/* data : params, */
		success : function(data) {
			 cname=data.cname;
		},
		error : function() {
		}
	});
	return cname;
}
//api信息显示方法
function display(){
	var url = window.location.search; 
	var aid = url.substring(url.lastIndexOf('=')+1, url.length);
	if(aid==""){
		alert("当前无显示信息，请去主页面!");
		window.location.href='main';
		return;
	}
	$.ajax({
		url : 'readapi',
		type : 'POST',
		async :false,
		dataType : 'json',
		data : {"id":aid},
		success :function(data) {
			var cname=classifyget(data.cid);
			var apilogo=document.getElementById("apilogo");
			var api_message1 = document.getElementById("api_message1");
			var  api_message2 = document.getElementById("api_message2");
			var example=document.getElementById("example");
			//加载apilogo图片
			var pic_path="images/6.jpg";
			if(data.pic_path==1) pic_path="/api_pic/"+data.aid+".jpg";
			apilogo.innerHTML="<img src='"+pic_path+"' />";
			//加载api名称等信息
			 api_message1.innerHTML="<ul class='s-1'>"+data.aname+"</ul>"
						+"<ul class='s-2'><li>"+cname+"</li></ul>"
						+"<ul class='s-3'>声明：本站所有接口全部免费，但仅限于学习用途。请不要用于商业用途，如果因此造成的损失，本站概率不负责!接口均为众网友提供，不保证稳定性！</ul>" 
						+"<ul class='s-4' id='s-4'><li>套餐</li><li class='select' style='display:block'>免费</li><li >500次</li><li >1000次</li></ul>"
						+"<ul class='s-5' id='s-5'><li  >价格</li><li class='on' style='display:block'>免费</li><li class='on'>￥22.5</li><li class='on'>￥40</li></ul>";
			 //加载接口参数，地址,请求示例等信息
			 api_message2.innerHTML="<ul>接口信息"+
			 						" <li>接口id："+data.aid+"</li>"+
			 						" <li>接口名称:"+data.aname+"</li>"+
			 						" <li>接口地址："+data.address+"</li>"+
			 						" <li>接口参数："+data.request_parameter+"</li>"+
			 						" <li>参数说明："+data.parameter_message+"</li>"+
			 						" <li>请求示例："+data.request_ex+"</li></br></br>"+
			 						"<input  class='btn btn-primary btn-xs'  type='button' value='我来试试'   onclick='toceshi()'/>";			 
		},
		error : function(data) {
			alert("读取失败！");
		}
	});
} 
function toceshi(){
	window.open("ceshi");
} 
window.onload=function(){
	 display();
	 // 获取鼠标滑过或点击和需要展现的元素
	        var s4= document.getElementById("s-4"),
	            s5= document.getElementById("s-5"),
	            lis= s4.getElementsByTagName('li'),
	            divs= s5.getElementsByTagName('li');
	        for (var i = 1; i < 4; i++) {
	            lis[i].id = i;
	            lis[i].onclick = function() {
	                for (var j = 1; j < 4; j++) {
	                    lis[j].className = '';
	                    divs[j].style.display = 'none';
	                }
	                this.className = 'select';
	                divs[this.id].style.display = 'block';
	            }
	        }
			$('#notice-tit li').click(function() {
	            $(this).siblings().removeClass('selected');
	            $(this).addClass('selected');
	            var index = $(this).index();  // 获取当前点击元素的下标
	            // alert(index);
	            $('#notice-con div').hide();
	            $('#notice-con div').eq(index).show();
	        })
	}