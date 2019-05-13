package com.mapper;
import java.util.List;

import com.pojo.api_message;;
//定义持久层接口，用于访问api信息
public interface apiMapper {
	public int addapi(api_message api);//添加api
	public int deleteapi(int aid);//删除api
	public int updateapi(api_message api);//修改接口名
	public int shapi(api_message api);//修改api审核信息
	public int csapi(api_message api);//修改api测试信息
	public int scpi_api(api_message api);//删除api
	public api_message getapi(int aid);//根据id获取api
	public int update_cid(api_message api);//改变分类信息
	public List<api_message> apilist();//获取api表单
}
