$(function(){
	$(".cs_error").Validform({
		tiptype:function(msg,o,cssctl){
			var objtip=$(".error_box");
			cssctl(objtip,o.type);
			objtip.text(msg);
		},
	});
});
function createXmlHttp() {
    //根据window.XMLHttpRequest对象是否存在使用不同的创建方式
    if (window.XMLHttpRequest) {
       xmlHttp = new XMLHttpRequest();                  //FireFox、Opera等浏览器支持的创建方式
    } else {
       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");//IE浏览器支持的创建方式
    }
}

//直接通过XMLHttpRequest对象获取远程网页源代码
function getSource() {
    var url = document.getElementById("url").value;             //获取接口地址信息
    //地址为空时提示用户输入
    if (url == "") {
        alert("请输入网页地址。");
        return;
    }
    url.encoding = 'utf-8';//防止中文乱码，采用utf-8编码。
    url=encodeURI(url);
    document.getElementById("source").value = "正在加载……";   //提示正在加载
    createXmlHttp();                                            //创建XMLHttpRequest对象
    xmlHttp.onreadystatechange = writeSource;                   //设置回调函数
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

//将接口返回信息写入页面文字区域
function writeSource() {
    if (xmlHttp.readyState == 4) {
        document.getElementById("source").value = xmlHttp.responseText;
    }
}
