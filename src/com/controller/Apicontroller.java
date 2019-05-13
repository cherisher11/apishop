
package com.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;
import javax.servlet.http.HttpSession;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import com.mapper.apiMapper;
import com.pojo.*;
import com.service.ApiService;
import com.service.RoleService;
//接口信息控制器
@Controller
public class Apicontroller {
	@Autowired
	ApiService apiservice;
	@Autowired
	apiMapper apimapper;
	@Autowired
	RoleService roleservice;
	Logger logger = Logger.getLogger(this.getClass());
	//apilist页面
	 @RequestMapping("listApi")
	 public ModelAndView listApi() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 }
	 //api信息显示页面
	 @RequestMapping("display")
	 public ModelAndView display(HttpSession session) {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 }
	 //获取api数据
	 @RequestMapping(value="/listapi")
	 @ResponseBody
	 public List<api_message>  listapi(){
		 return apiservice.list();
	 }
	 //删除api信息
	 @RequestMapping(value="/deleteapi")
	 @ResponseBody
	 public int  deleteapi(int id,HttpSession session){
		 //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，如果没有返回失败
		 logger.info("用户:"+loginuser.getName()+"试图删除一个接口,接口id："+id);
		 return apiservice.deleteapi(id);
	 }
	 //根据id获得某行api信息
	 @RequestMapping(value="/readapi")
	 @ResponseBody
	 public api_message  readapi(int id){
		 return apiservice.read(id);
	 }
	 //添加api纪录
	 @RequestMapping(value="/addapi")
	 @ResponseBody
	 public int  addapi(api_message api,HttpSession session){
		 //后台判断当前用户是否登陆
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
		 logger.info("用户试图添加一个接口,用户id:"+api.getUid()+"  接口名："+api.getAname());
		 //过滤'<','>'等字符防xss攻击
		 Defencexss fzxss=new Defencexss();
		 api.setAname(fzxss.filter(api.getAname()));
		 api.setAddress(fzxss.filter(api.getAddress()));
		 api.setRequest_parameter(fzxss.filter(api.getRequest_parameter()));
		 api.setParameter_message(fzxss.filter(api.getParameter_message()));
		 api.setRequest_ex(fzxss.filter(api.getRequest_ex()));
		 return apiservice.add(api);
	 }
	 //管理员修改信息接口
	 @RequestMapping(value="/updateapi")
	 @ResponseBody
	 public int  updateapi(api_message api,HttpSession session){
		 //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，如果没有返回失败
		 logger.info("用户:"+loginuser.getName()+"试图修改一个接口,接口id："+api.getAid());
		 return apiservice.update(api);
	 }
	 //审核人员审核api接口
	 @RequestMapping(value="/shapi")
	 @ResponseBody
	 public int  shapi(api_message api,HttpSession session){
		//后台判断当前用户是否有审核权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getCheck_power()=="false") return 0;//后台判断是否有审核权限，如果没有返回失败
		 logger.info("用户:"+loginuser.getName()+"试图修改一个接口,接口id："+api.getAid());
		 return apiservice.shapi(api);
	 }
	 //管理员分类api接口，即给api添加标签
	 @RequestMapping(value="/update_cid")
	 @ResponseBody
	 public int  update_cid(api_message api,HttpSession session){
		 //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，如果没有返回失败
		 logger.info("用户:"+loginuser.getName()+"试图分类一个接口,接口id："+api.getAid());
		 return apimapper.update_cid(api);
	 }
		//测试人员测试api接口
	 @RequestMapping(value="/csapi")
	 @ResponseBody
	 public int  csapi(api_message api,HttpSession session){
		//后台判断当前用户是否有测试权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getTest_power()=="false") return 0;//后台判断是否有测试权限，如果没有返回失败
		 logger.info("用户:"+loginuser.getName()+"试图修改一个接口,接口id："+api.getAid());
		 return apiservice.csapi(api);
	 }
	 //记录上传图片
	 @RequestMapping(value="/upload_pic")
	 @ResponseBody
	 public int  upload_pic(api_message api){
		 logger.info("用户试图上传接口图片,用户id："+api.getAid());
		 return apimapper.scpi_api(api);
	 }
	 
}
