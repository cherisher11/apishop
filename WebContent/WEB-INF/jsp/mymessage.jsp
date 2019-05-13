<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户信息</title>
<script type="text/javascript" src="bootstrap-3.3.7/js/jquery-3.3.1.min.js"></script>
<link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.min.css">
<script type="text/javascript" src="bootstrap-3.3.7/js/bootstrap.js"></script>
<script type="text/javascript" src="js/js-usermessage.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2_min.js"></script>
</head>
<body>
	<div class="container text-center">
	<div class="row">
			<div class="col-md-12" align="center">
				<h1>我的信息</h1>
			</div>
			</div>
			<div>
		<li>
		<button type="button" class="btn btn-primary btn-xs" onclick="tomain()" >返回主页</button>	
			</li>
		</div>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<form class="form-horizontal user_add_error text-center" method=post>
						<div class="error_box text-center" id="err"></div>
							<div class="form-group" >
								<label class="col-sm-2 control-label">用户名</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="username"
										placeholder="username" nullmsg="用户账号不能为空！" datatype="s4-18" errormsg="账号范围在4~18个字符之间！">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">昵称</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="name"
										placeholder="name" nullmsg="昵称不能为空！" datatype="s1-18" errormsg="昵称范围再1-18位之间！">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">联系电话</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="tel" readonly>
								</div>
							</div>	
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-default btn-sm"
										onclick="update_message()"
										>保存信息</button>
										<button type="button" class="btn btn-primary btn-sm"
										>去改密码</button>
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>			
</body>
</html>