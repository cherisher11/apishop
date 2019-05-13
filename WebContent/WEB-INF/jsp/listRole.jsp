<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>角色管理界面</title>
<script type="text/javascript" src="bootstrap-3.3.7/js/jquery-3.3.1.min.js"></script>
<link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.min.css">
<script type="text/javascript" src="bootstrap-3.3.7/js/bootstrap.js"></script>
<script type="text/javascript" src="js/js-rolelist.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2_min.js"></script>
</head>
<body onload="showRole_method()">
		
	<div class="container text-center">
		<div class="row">
			<div class="col-md-12" align="center">
				<h1>角色列表</h1>
			</div>
		</div>
		<div>
		<li>
		<button type="button" class="btn btn-primary btn-xs"  id="add_user"
			data-toggle="modal" data-target="#addrole">添加角色</button>
			<button type="button" class="btn btn-primary btn-xs"  id="showall" onclick="showRole_method()"
			data-toggle="modal" >刷新</button>
			
			</li>
		</div>
		<div class="table-responsive">
			<table class="table table-bordered table-striped table-hover">
				<thead>
					<tr>
						<th>编号</th>
						<th>角色名</th>
						<th>管理权限</th>
						<th>测试权限</th>
						<th>审核权限</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody id="tableBody">
				
				</tbody>
			</table>
		</div>
		<div class="modal fade" id="addrole" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<form class="form-horizontal user_add_error text-center" method=post>
					 <div class="error_box text-center" id="err"></div>
							<div class="form-group" >
								<label class="col-sm-2 control-label">角色名</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="rolename"
										placeholder="username" nullmsg="角色名不能为空！" datatype="s4-18" errormsg="角色名在4-18个字符之间！">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">测试权限</label>
								<div class="col-sm-10">
									<label class="checkbox-inline">
										<input type="radio"
										name="cs_power"  value="false" checked>false
										</label> <label class="checkbox-inline"> 
										<input type="radio" name="cs_power" 
										id="cs_power" value="true">true
									</label> 
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">审核权限</label>
								<div class="col-sm-10">
									<label class="checkbox-inline">
										<input type="radio"
										name="sh_power"  value="false" checked>false
										</label> <label class="checkbox-inline"> 
										<input type="radio" name="sh_power" 
										id="sh_power" value="true">true
									</label> 
								</div>
							</div>	
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消添加</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="addRole_method()"
										data-dismiss="modal">添加角色</button>
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
		<!-- uModal -->
		<div class="modal fade" id="rModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">

						<form class="form-horizontal">
						<input type="hidden" id="rid" />
							<div class="form-group">
								<label class="col-sm-2 control-label">审核权限</label>
								<div class="col-sm-10">
									<label class="checkbox-inline">
										<input type="radio"
										name="sh_power1"  value="false" checked>false 
										</label> <label class="checkbox-inline"> 
										<input type="radio" name="sh_power1" 
										id="sh_power1" value="true">true
									</label> 
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">测试权限</label>
								<div class="col-sm-10">
									<label class="checkbox-inline">
										<input type="radio"
										name="cs_power1"  value="false" checked>false
										</label> <label class="checkbox-inline"> 
										<input type="radio" name="cs_power1" 
										id="cs_power1" value="true">true
									</label> 
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消修改</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="update_method()"
										data-dismiss="modal">修改权限</button>
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

