<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>角色管理界面</title>
<link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.min.css">
<script type="text/javascript" src="bootstrap-3.3.7/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="bootstrap-3.3.7/js/bootstrap.js"></script>
<script type="text/javascript" src="js/js-apilist.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2_min.js"></script>
</head>
<body onload="show_method()">
<div class="container text-center">
		<div class="row">
			<div class="col-md-12" align="center">
				<h1>api列表</h1>
			</div>
		</div>
		<div>
		<li>
		<button type="button" class="btn btn-primary btn-xs"  id="add_user"
			data-toggle="modal" data-target="#addapi">录入api</button>
			<button type="button" class="btn btn-primary btn-xs"  id="showtest" onclick="showtestapi()"
			data-toggle="modal" >待测试表</button>
			<button type="button" class="btn btn-primary btn-xs"  id="showcheck" onclick="showcheckapi()"
			data-toggle="modal" >待审核表</button>
			<button type="button" class="btn btn-primary btn-xs"  id="showfaile" onclick="showfaileapi()"
			data-toggle="modal" >faile表</button>
			<button type="button" class="btn btn-primary btn-xs"  id="showall" onclick="showmyapi()"
			data-toggle="modal" >我的api</button>
			<button type="button" class="btn btn-primary btn-xs"  id="showall" onclick="showallapi()"
			data-toggle="modal" >公共接口</button>
			<button type="button" class="btn btn-primary btn-xs"  id="showall" onclick="showpublic_method()"
			data-toggle="modal" >公共未分类接口</button>
			<button type="button" class="btn btn-primary btn-xs"  id="tocs" onclick="tocs()"
			data-toggle="modal" >去测试</button>
			</li>
		</div>
		<div class="table-responsive">
			<table class="table table-bordered table-striped table-hover">
				<thead>
					<tr>
						<th>编号</th>
						<th>接口名</th>
						<th>接口地址</th>
						<th>请求参数</th>
						<th>请求示例</th>
						<th>测试信息</th>
						<th>审核信息</th>
						<th>类别id</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody id="tableBody">
				
				</tbody>
			</table>
		</div>
		<!-- addModal -->
		<div class="modal fade" id="addapi" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<form class="form-horizontal api_add_error text-center" method=post enctype="multipart/form-data">
						<div class="error_box text-center" id="err"></div>
						<input type="hidden" id="uid" />
							<div class="form-group" >
								<label class="col-sm-2 control-label">接口名</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="aname"
										placeholder="接口名" nullmsg="接口名不能为空！" datatype="s4-20" errormsg="接口名范围在4~20个字符之间！">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">接口地址</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="address"
										placeholder="地址" nullmsg="地址不能为空！" datatype="s4-100" errormsg="地址范围在4-100字符之间！">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">请求参数</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="request_parameter"
										placeholder="请求参数" nullmsg="请求参数不能为空！" datatype="s1-100" errormsg="请求参数范围在1-100位之间！">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">参数详细信息</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="parameter_message"
										placeholder="参数详细信息" nullmsg="参数详细信息不能为空！" datatype="s1-100" errormsg="参数详细信息在4-100字符之间！">
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-2 control-label">请求示例</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="request_ex"
										placeholder="请求示例" >
								</div>
							</div>	
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消录入</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="addApi_method()"
										data-dismiss="modal">录入api</button>
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
						<input type="hidden" id="aid" readonly/>
							<div class="form-group">
								<label class="col-sm-2 control-label">审核结果</label>
								<div class="col-sm-10">
									<label class="checkbox-inline">
										<input type="radio"
										name="sh_power1"  value="false" checked>false 
										</label> <label class="checkbox-inline"> 
										<input type="radio" name="sh_power1" 
										id="sh_power1" value="true">true
											</label> <label class="checkbox-inline"> 
										<input type="radio" name="sh_power1" 
										id="sh_power1" value="faile">faile
									</label> 
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 control-label">测试结果</label>
								<div class="col-sm-10">
									<label class="checkbox-inline">
										<input type="radio"
										name="cs_power1"  value="false" checked>false
										</label> <label class="checkbox-inline"> 
										<input type="radio" name="cs_power1" 
										id="cs_power1" value="true">true
											</label> <label class="checkbox-inline"> 
										<input type="radio" name="cs_power1" 
										id="cs_power1" value="faile">faile
									</label> 
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消修改</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="updateapi_method()"
										data-dismiss="modal">修改信息</button>
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
		<!-- shModal -->
		<div class="modal fade" id="shModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">

						<form class="form-horizontal">
						<input type="hidden" id="aid1" readonly/>
							<div class="form-group">
								<label class="col-sm-2 control-label">审核结果</label>
								<div class="col-sm-10">
									<label class="checkbox-inline">
										<input type="radio"
										name="sh_power"  value="false" checked>false 
										</label> <label class="checkbox-inline"> 
										<input type="radio" name="sh_power" 
										id="sh_power" value="true">true
											</label> <label class="checkbox-inline"> 
										<input type="radio" name="sh_power" 
										id="sh_power" value="faile">faile
									</label> 
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消修改</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="shapi_method()"
										data-dismiss="modal">修改信息</button>
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
		<!-- 上传图片Modal -->
		<div class="modal fade" id="scpModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<form method="post" action="UploadServlet"  onsubmit="return check_pic()" enctype="multipart/form-data">
						<input type="hidden" id="aid4" name=aid4 readonly/>
  						<label class="col-sm-2 control-label">  选择一个文件:</label>
   						 <input type="file" name="uploadFile" id="picture" accept="image/jpeg,image/jpg,image/png"/>
   						 <br/><br/>
   						 <input type="submit" value="上传" />
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- shModal -->
		<div class="modal fade" id="shModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">

						<form class="form-horizontal">
						<input type="hidden" id="aid1" readonly/>
							<div class="form-group">
								<label class="col-sm-2 control-label">审核结果</label>
								<div class="col-sm-10">
									<label class="checkbox-inline">
										<input type="radio"
										name="sh_power"  value="false" checked>false 
										</label> <label class="checkbox-inline"> 
										<input type="radio" name="sh_power" 
										id="sh_power" value="true">true
											</label> <label class="checkbox-inline"> 
										<input type="radio" name="sh_power" 
										id="sh_power" value="faile">faile
									</label> 
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消修改</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="shapi_method()"
										data-dismiss="modal">修改信息</button>
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
		<!-- 修改类别Modal -->
		<div class="modal fade" id="xgcModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">

						<form class="form-horizontal">
						<input type="hidden" id="aid3" readonly/>
							<div class="form-group">
								<label class="col-sm-2 control-label">类别id</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="cid"
										placeholder="类别id" >
								</div>
							</div>
							</div>
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消分类</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="updateclassify_method()"
										data-dismiss="modal">分类</button>
								</div>
							</div>
						</form>

					</div>
				</div>
			</div>
		</div>
		
		<!-- csModal -->
		<div class="modal fade" id="csModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">

						<form class="form-horizontal">
						<input type="hidden" id="aid2" readonly/>
							<div class="form-group">
								<label class="col-sm-2 control-label">测试结果</label>
								<div class="col-sm-10">
									<label class="checkbox-inline">
										<input type="radio"
										name="cs_power"  value="false" checked>false
										</label> <label class="checkbox-inline"> 
										<input type="radio" name="cs_power" 
										id="cs_power" value="true">true
											</label> <label class="checkbox-inline"> 
											<input type="radio" name="cs_power" 
										id="cs_power" value="faile">faile
									</label> 
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										data-dismiss="modal">取消修改</button>
									<button type="button" class="btn btn-default btn-sm"
										onclick="csapi_method()"
										data-dismiss="modal">修改信息</button>
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