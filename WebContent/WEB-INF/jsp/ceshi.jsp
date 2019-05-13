<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html >
<html>
<head>
<script type="text/javascript" src="bootstrap-3.3.7/js/jquery-3.3.1.min.js"></script>
<link rel="stylesheet" href="bootstrap-3.3.7/css/bootstrap.min.css">
<script type="text/javascript" src="bootstrap-3.3.7/js/bootstrap.js"></script>
<script type="text/javascript" src="js/js-csapi.js"></script>
<script type="text/javascript" src="js/Validform_v5.3.2_min.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>测试页面</title>
</head>
<body>
 							<form class="form-horizontal cs_error text-center" >
  							<div class="error_box text-center" id="err"></div>
							<div class="form-group" >
								<label class="col-sm-2 control-label">接口请求</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="url"
										placeholder="接口请求" nullmsg="接口请求不能为空！" datatype="*4-100" errormsg="接口请求在4-100个字符之间！">
								</div>
							</div>
							<div class="form-group">
								<div class="col-sm-offset-2 col-sm-10">
									<button type="button" class="btn btn-primary btn-sm"
										onclick="getSource()"
										data-dismiss="modal">获取返回信息</button>
								</div>
							</div>
							<div class="form-group" >
								<label class="col-sm-2 control-label">返回结果</label>
								<div class="col-sm-10">
									<textarea  class="form-control" id="source" rows="10" cols="80" readonly></textarea>
								</div>
							</div>
							</form>
</body>
</html>