package com.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.apiMapper;
import com.pojo.Role;
import com.pojo.api_message;
import com.service.ApiService;


@Service
public class ApiServiceimpl implements ApiService{
	@Autowired
	apiMapper apimapper;
	@Override
	public List<api_message> list(){
		return apimapper.apilist();
	};
	//获取我的api信息表
	@Override
	public int deleteapi(int aid) {
		return apimapper.deleteapi(aid);
	};
	@Override
	public int add(api_message api) {
		 api.setCheck_message("false");//审核信息默认为false
		 api.setTest_message("false");//测试信息默认为false
		 api.setCid(0);//默认未分类
		 api.setPic_path(0);//默认未上传logo图片
		return apimapper.addapi(api);
	};
	@Override
	public  api_message read(int aid){
		return apimapper.getapi(aid);
	};
	@Override
	public int update(api_message api) {
		return apimapper.updateapi(api);
	};
	@Override
	public int shapi(api_message api) {
		return apimapper.shapi(api);
	};
	@Override
	 public   int csapi(api_message api) {
		return apimapper.csapi(api);
	};
}
