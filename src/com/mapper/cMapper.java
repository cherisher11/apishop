package com.mapper;

import java.util.List;

import com.pojo.classify;;

public interface cMapper {
	public int addclassify(classify cla);//添加类别
	public int deleteclassify(int cid);//删除类别
	public int updateclassify(classify cla);//改变类别名
	public classify getclassify(int cid);//根据id获取类别
	public List<classify> clist();//获取类别表
}
