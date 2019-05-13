package com.controller;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.key.keys;
import com.pojo.User;
//管理员页面控制器
@Controller
public class AdminController {
	//退出登录按钮
	@RequestMapping(value="/exit")
    @ResponseBody
    public ModelAndView exit(HttpSession session){
		session.removeAttribute("user");
		 ModelAndView mv=new ModelAndView();
		 mv.setView(new RedirectView("login"));
		 return mv;
    }
	//测试页面
	@RequestMapping("ceshi")
	 public ModelAndView ceshi() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 }
}
