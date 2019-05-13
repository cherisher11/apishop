package com.controller;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.pojo.Defencexss;
import com.pojo.Role;
import com.pojo.User;
import com.service.RoleService;
//角色信息控制器
@Controller
public class RoleController {
	@Autowired
	RoleService roleservice;
	Logger logger = Logger.getLogger(this.getClass());
	 @RequestMapping("listRole")
	 public ModelAndView listRole() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 }
	 //角色管理页面
	 @RequestMapping(value="/listrole")
	 @ResponseBody
	 public List<Role>  listrole(HttpSession session){
		//后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return null;
	     if(loginrole.getAdmin_power()=="false") return null;//后台判断是否有管理员权限，没有返回失败
		 return roleservice.list();
	 }
	 //添加角色的接口
	 @RequestMapping(value="/addrole")
	 @ResponseBody
	 public int  addrole(Role role,HttpSession session){
		 //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，如果没有返回失败
		 logger.info("用户:"+loginuser.getName()+"添加了角色："+role.getRname());
		//防止xss攻击
		 Defencexss fzxss=new Defencexss();
		 role.setRname(fzxss.filter(role.getRname()));
		 role.setCheck_power(fzxss.filter(role.getCheck_power()));
		 role.setTest_power(fzxss.filter(role.getTest_power()));
		 return roleservice.add(role);
	 }
	 //删除角色的接口
	 @RequestMapping(value="/deleterole")
	 @ResponseBody
	 public int  deleterole(int id,HttpSession session){
		 //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，如果没有返回失败
		 logger.info("用户:"+loginuser.getName()+"删除了一名角色，角色id:"+id);;
		 return roleservice.delete(id);
	 }
	 //更改角色权限的接口
	 @RequestMapping(value="/updaterole")
	 @ResponseBody
	 public int  updaterole(Role role,HttpSession session){
		 //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，如果没有返回失败
		 logger.info("用户:"+loginuser.getName()+"更改了一名角色的权限，角色名:"+role.getRname());
		 return roleservice.update(role);
	 }
	 //根据角色id获取角色信息的接口
	 @RequestMapping(value="/readrole")
	 @ResponseBody
	 public Role  readrole(int rid){
		 return roleservice.read(rid);
	 }
}
