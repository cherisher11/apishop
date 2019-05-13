<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page isELIgnored="false" import="com.pojo.*,java.util.*"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>用户管理</title>
<script type="text/javascript" src="bootstrap-3.3.7/js/jquery-3.3.1.min.js"></script>
<link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.min.css">
<script type="text/javascript" src="bootstrap-3.3.7/js/bootstrap.js"></script>
<script type="text/javascript" src="js/js-userlist.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2_min.js"></script>
</head>
<body onload="showUser_method()">
		
	<div class="container text-center">
		<div class="row">
			<div class="col-md-12" align="center">
				<h1>用户列表</h1>
			</div>
		</div>
		<div>
		<li>
		<button type="button" class="btn btn-primary btn-xs"  id="add_user"
			data-toggle="modal" data-target="#adduser">添加用户</button>
			<button type="button" class="btn btn-primary btn-xs"  id="showall" onclick="showUser_method()"
			data-toggle="modal" >刷新</button>
			
			</li>
		</div>
		<div class="table-responsive">
			<table class="table table-bordered table-striped table-hover">
				<thead>
					<tr>
						<th>编号</th>
						<th>用户名</th>
						<th>昵称</th>
						<th>电话</th>
						<th>角色id</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody id="tableBody">
				
				</tbody>
			</table>
		</div>
			<!-- addModal -->
		<div class="modal fade" id="adduser" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
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
								<label class="col-sm-2 control-label">密码</label>
								<div class="col-sm-10">
									<input type="password" class="form-control" id="password"
										placeholder="password" nullmsg="密码不能为空！" datatype="s4-18" errormsg="密码范围再4-18位之间！">
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
									<input type="text" class="form-control" id="tel"
										placeholder="tel" nullmsg="电话号码不能为空！" datatype="m" errormsg="请填写正确的电话号码！">
								</div>
							</div>	
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消添加</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="addUser_method()"
										data-dismiss="modal">添加用户</button>
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
		
		<!-- uModal -->
		<div class="modal fade" id="uModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">

						<form class="form-horizontal">
						<input type="hidden" id="id" />
						<input type="hidden" id="dqrid" />
							<div class="form-group">
								<label class="col-sm-2 control-label">角色id</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="rid"
										placeholder="角色id" >
								</div>
							
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消赋予</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="update_method()"
										data-dismiss="modal">赋予角色</button>
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>

	</div>
</body>
</html>

