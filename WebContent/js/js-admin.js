$(function(){
	getsession();//获取登陆信息
});
$(function() {
	//图片轮换
    $(".meun-item").click(function() {
        $(".meun-item").removeClass("meun-item-active");
        $(this).addClass("meun-item-active");
        var itmeObj = $(".meun-item").find("img");
        itmeObj.each(function() {
            var items = $(this).attr("src");
            items = items.replace("_grey.png", ".png");
            items = items.replace(".png", "_grey.png")
            $(this).attr("src", items);
        });
        var attrObj = $(this).find("img").attr("src");
        ;
        attrObj = attrObj.replace("_grey.png", ".png");
        $(this).find("img").attr("src", attrObj);
    });
    $("#topAD").click(function() {
        $("#topA").toggleClass(" glyphicon-triangle-right");
        $("#topA").toggleClass(" glyphicon-triangle-bottom");
    });
    $("#topBD").click(function() {
        $("#topB").toggleClass(" glyphicon-triangle-right");
        $("#topB").toggleClass(" glyphicon-triangle-bottom");
    });
    $("#topCD").click(function() {
        $("#topC").toggleClass(" glyphicon-triangle-right");
        $("#topC").toggleClass(" glyphicon-triangle-bottom");
    });
    $(".toggle-btn").click(function() {
        $("#leftMeun").toggleClass("show");
        $("#rightContent").toggleClass("pd0px");
    })
})
//获取登陆信息
function getsession(){
	$.ajax({
		url : 'getSessionUser',
		async :false,
		type : 'POST',
		dataType : 'json',
		/* data : params, */
		success : function(data) {
			var obj = document.getElementById("usernamebox");
			obj.innerHTML= data.name;
			},
		error : function() {
			alert("seesion已经过期，请重新登陆！");
			window.location.href='login';
		}
	});
}