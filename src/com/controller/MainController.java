package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.mapper.apiMapper;
import com.pojo.api_message;
import com.service.ApiService;
//主页控制器
@Controller
public class MainController {
	@Autowired
	ApiService apiservice;
	//主页
	@RequestMapping("main")
	 public ModelAndView main() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 }
	//主页2（展示全部接口）
	@RequestMapping("main1")
	 public ModelAndView main1() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 }
	//用户信息页面
	@RequestMapping("mymessage")
	 public ModelAndView mymessage() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 }
}
