<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>资源分类管理界面</title>
<script type="text/javascript" src="bootstrap-3.3.7/js/jquery-3.3.1.min.js"></script>
<link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.min.css">
<script type="text/javascript" src="bootstrap-3.3.7/js/bootstrap.js"></script>
<script type="text/javascript" src="js/js-classifylist.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2_min.js"></script>
</head>
<body onload="showclassify_method()">
		
	<div class="container text-center">
		<div class="row">
			<div class="col-md-12" align="center">
				<h1>类别列表</h1>
			</div>
		</div>
		<div>
		<li>
		<button type="button" class="btn btn-primary btn-xs"  id="add_user"
			data-toggle="modal" data-target="#addclassify">添加类别</button>
			<button type="button" class="btn btn-primary btn-xs"  id="showall" onclick="showclassify_method()"
			data-toggle="modal" >刷新</button>
			
			</li>
		</div>
		<div class="table-responsive">
			<table class="table table-bordered table-striped table-hover">
				<thead>
					<tr>
						<th>编号</th>
						<th>类名</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody id="tableBody">
				
				</tbody>
			</table>
		</div>
		<div class="modal fade" id="addclassify" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<form class="form-horizontal add_error text-center" method=post>
					 <div class="error_box text-center" id="err"></div>
							<div class="form-group" >
								<label class="col-sm-2 control-label">类别名</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="cname"
										placeholder="cname" nullmsg="类别名不能为空！" datatype="s1-18" errormsg="类别名在1-18个字符之间！">
								</div>
							</div>
							</div>
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消添加</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="addclassify_method()"
										data-dismiss="modal">添加类别</button>
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
						<input type="hidden" id="cid" />
						<div class="form-group" >
								<label class="col-sm-2 control-label">类别名</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="cname1"
										placeholder="cname" nullmsg="类别名不能为空！" datatype="s4-18" errormsg="类别名在4-18个字符之间！">
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消修改</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="update_method()"
										data-dismiss="modal">修改类别名</button>
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

