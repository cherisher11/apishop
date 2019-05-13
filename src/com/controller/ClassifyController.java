package com.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import com.mapper.cMapper;
import com.pojo.*;
import com.service.RoleService;
//分类信息控制器
@Controller
public class ClassifyController {
	@Autowired
	cMapper cmapper;
	@Autowired
	RoleService roleservice;
	Logger logger = Logger.getLogger(this.getClass());
	//类别表页面
	@RequestMapping("listClassify")
	 public ModelAndView listClassify() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 }
	//获取类别表
	 @RequestMapping(value="/listclassify")
	 @ResponseBody
	 public List<classify>  listclassify(HttpSession session){
		 return cmapper.clist();
	 }
	 //添加类别的接口
	 @RequestMapping(value="/addclassify")
	 @ResponseBody
	 public int  addclassify(classify cla,HttpSession session){
		  //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，如果没有返回失败
		 logger.info("管理员添加了类别："+cla.getCname());
		 //防止xss攻击
		 Defencexss fzxss=new Defencexss();
		 cla.setCname(fzxss.filter(cla.getCname()));
		 return cmapper.addclassify(cla);
	 }
	 //删除类别的接口
	 @RequestMapping(value="/deleteclassify")
	 @ResponseBody
	 public int  deleteclassify(int id,HttpSession session){
		 //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，如果没有返回失败
		 logger.info("管理员删除了一类资源，资源id:"+id);;
		  return cmapper.deleteclassify(id);
	 }
	 //更改类别名的接口
	 @RequestMapping(value="/updateclassify")
	 @ResponseBody
	 public int  updateclassify(classify cla,HttpSession session){
		 //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，如果没有返回失败
		 logger.info("管理员更改了一类别的类别名:"+cla.getCname());
		 return cmapper.updateclassify(cla);
	 } 
	 //根据类别id读取类别信息的接口
	 @RequestMapping(value="/readclassify")
	 @ResponseBody
	 public classify  readclassify(int cid){
		 return cmapper.getclassify(cid);
	 }
}
