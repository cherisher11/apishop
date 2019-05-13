package com.controller;


import java.util.Date;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;
import com.sendmessage.*;
import com.pojo.Defencexss;
import com.pojo.Role;
import com.pojo.User;
import com.service.RoleService;
import com.service.UserService;
import com.key.keys;
import com.md5.*;

// 用户管理控制器
@Controller
public class UserController {
	@Autowired
	UserService userService;
	@Autowired
	RoleService roleservice;
	Logger logger = Logger.getLogger(this.getClass());
	 @RequestMapping("resetpwd")
	 public ModelAndView resetpwd() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 } 
	 @RequestMapping("listUser")
	 public ModelAndView listUser() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 } 
	 @RequestMapping("admin")
	 public ModelAndView admin() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 } 
	 @RequestMapping("login")
	 public ModelAndView login() {
		 ModelAndView mv=new ModelAndView();
		 return mv;
	 }
	 //获取用户表接口
	 @RequestMapping(value="/list")
	    @ResponseBody
	    public List<User> list(HttpSession session){
		//后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return null;
	     if(loginrole.getAdmin_power()=="false") return null;//后台判断是否有管理员权限，没有返回失败
	        List<User> list = userService.list();
	        return list;
	    }
	 //添加用户接口
	 @RequestMapping(value="/add")
	    @ResponseBody
	    public int add(User user,HttpSession session){
		//后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，没有返回失败
		 logger.info("用户:"+loginuser.getName()+"试图添加一名用户,用户名："+user.getUsername()+"昵称："+user.getName());//加入日志
		//防止xss攻击
		 Defencexss fzxss=new Defencexss();
		 user.setName(fzxss.filter(user.getName()));
		 user.setUsername(fzxss.filter(user.getUsername()));
	        return userService.add(user);
	    }
	 //删除用户接口
	 @RequestMapping(value="/delete")
	    @ResponseBody
	    public int delete(int id,HttpSession session){
		 //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，没有返回失败
		 logger.info("用户:"+loginuser.getName()+"试图删除一名用户，用户id："+id);
	        return userService.delete(id);
	    }
	 @RequestMapping(value="/getSessionUser")
	    @ResponseBody
	    public User getSessionUser(HttpSession session){
		 User loginuser=(User) session.getAttribute("user");
		 //System.out.println(loginuser.getAdmin_power());
	       if(loginuser!=null&&!loginuser.equals(null)) return loginuser;
	       else return null;
	    }
	 //根据用户Id获取id信息
	 @RequestMapping(value="/read")
	    @ResponseBody
	    public User read(int id){
	        return userService.read(id);
	    }
	 //管理员赋予用户角色接口
	 @RequestMapping(value="/update")
	    @ResponseBody
	    public int update(User user,HttpSession session){
		 //后台判断当前用户是否有管理员权限
		 User loginuser=(User) session.getAttribute("user");
		 Role loginrole=new Role();
	     if(loginuser!=null&&!loginuser.equals(null)) loginrole=roleservice.read(loginuser.getRid());
	     else return 0;
	     if(loginrole.getAdmin_power()=="false") return 0;//后台判断是否有管理员权限，没有返回失败
		 logger.info("用户:"+loginuser.getName()+"试图赋予一名用户角色，用户id："+user.getId());
	        return userService.update(user);
	    }
	 //更改密码接口
	 @RequestMapping(value="/updatepwd")
	    @ResponseBody
	    public ModelAndView updatepwd(String tel,String code,String rsa_pwd,HttpSession session,ModelAndView mv) throws Exception{
		 String yanzm = (String) session.getAttribute("yanzm");
		 String yzfg=code+tel;//验证码与电话两个字符串相加
		 if(!yzfg.equals(yanzm)) {
			 mv.addObject("message","验证码错误或手机号变更!注意验证码有效时间为10分钟！");
	            mv.setViewName("resetpwd");
	            return mv;
		 }
		 if(rsa_pwd==null&&rsa_pwd.equals("")) {
			 mv.addObject("message","密码不能为空！");
	            mv.setViewName("resetpwd");
	            return mv;
		 }
		 //System.out.println(rsa_pwd);
		 //先解密密码
		 String password="";
		 keys key=new keys();
		 String privateKey = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIl2F9OesQTUj1mY22LWr7IAkpX0DvGE4M7th3awa0sY8c+byNmayifBt8fJNUAEuPA7pQ3k+lZKWNaCgEMrKhr9DhT4ap/nz9evN7gXKiivZxTCanG1blrpeQ7ikFGm6OeMhKv1KGLfbjdQ3bIIhqGuDyLZ4RR0RXNmcpnBTR69AgMBAAECgYAiyMduvZF972v2+D9L25fKK2rslz3Q0BczRdgpqKr97eoC5yEEL69IMDUZUUkwUgGaiP1TbsYKX/XrEkrytFGK89zbVVI+oPrx1es4ZW07IPAEseZab34tn9OXZOc3N4Gnn0zCtZuz8gvtnjpuCRYZwoT12TVnjhZbduE2PzfN4QJBAL0SQ3HAtdgOq5rvCtqRJjnghRH1Dgq/vjhJScqMss1C0MctjoWD4wnht4z9QVJh4LxphvHDVgvf3K87QstTvbsCQQC6HucahYvpE77GZ9KlG+cyDNWOc3hSvvUkwcAF4dfsZ/xUJ0rYQ+d6qQfxsROq14bkk5LL6OCPsx46yXnHcpHnAkEAuT41mjPndkIZW/kstyxTOY2Cky93jIyEgH09sRfc70KxbxRxeNrZDQt7XMWcxGxlVfRGZISvv36bp4v2S2RGlQJAVU/E7ss4DmYWlCsSysu3daGcYedbx9Hv3CFTO18B8kLXzlsUW30EpZzFH2vjb/PKyQs7xmvAQx3/RUMEpv9FEQJAW0nDRUnLKsVXOX2N5DFVnDJH6Jq+eYfIE19K7ctNw2h4QqzfQx3r8n4xJc5kPI1wxbz6mTkuZg6wqN3SsZYQhg==";
		 password=key.decrypt(rsa_pwd,privateKey);
		 //System.out.println(password);
		 String md5pwd=md5.md(password);
		 User user=new User();
		 user.setPassword(md5pwd);
		 user.setTelnumber(tel);
		 userService.updatepwd(user);
		 logger.info("手机号："+tel+"的用户更改了密码!");
		 mv.addObject("message","更改成功，可以登录！");
		 mv.setViewName("login");
	        return mv;
	    }
	 //用户更改昵称，用户名等信息接口
	 @RequestMapping(value="/updatemessage")
	    @ResponseBody
	    public int updatemessage(User user,HttpSession session){
		 logger.info("用户试图修改用户名信息，用户id："+user.getId());
	        return userService.updateuser_mes(user);
	    }
	 //根据电话查找数据库接口
	 @RequestMapping(value="/findBytel")
	    @ResponseBody
	    public User findBytel(String telnumber){
		 User user=new User();
		 user.setTelnumber(telnumber);
	      return userService.findByTel(user);
	    }
	 //发送验证码接口
	 @RequestMapping(value="/sendyzm")
	    @ResponseBody
	    public boolean sendyzm(String telnumber,HttpSession session) throws Exception{
		 long scfssj= session.getAttribute("fssj")==null? 0:(long)session.getAttribute("fssj");//上次发送验证码时间
		 //System.out.println(scfssj);
		 long fssj= new Date().getTime();
		 //System.out.println(fssj);
		//判断是否过了60s，如果没有则不发送
		 if(scfssj!=0&&(fssj-scfssj)<60000) {
			 return false;
		 }
		 Senddx send=new Senddx();
		 String yzm=send.sendMess(telnumber);
		 String yzm1=yzm+telnumber;//将验证码和电话号码两个字符串加起来，保证电话号码的真实性
		 session.setAttribute("yanzm", yzm1);
		 //发送成功再添加新的发送时间
		 session.removeAttribute("fssj");
		 session.setAttribute("fssj", fssj);
		 return true;
	    }
	 //登陆接口
	 @RequestMapping(value="/logining")
	    @ResponseBody
	    public ModelAndView logining(String loginname,String rsa_pwd,String remember,ModelAndView mv,String code,HttpSession session,HttpServletResponse response) throws Exception{
		 String verificationCode = (String) session.getAttribute("checkcode_inSession");
		 session.removeAttribute("checkcode_inSession");
		 //System.out.println(rsa_pwd);
		 code=code.toUpperCase();//将小写字母全部转为大写
		 if(!code.equals(verificationCode)) {
			//验证码错误，设置错误信息，并调转到登录页面 
	            mv.addObject("message","验证码错误,注意不区分大小写！！");
	            mv.setViewName("login");
	            return mv;
		 }
		 if(rsa_pwd==null&&rsa_pwd.equals("")) {
			 mv.addObject("message","密码不能为空！");
	            mv.setViewName("resetpwd");
	            return mv;
		 }
		 //先解密密码
		 String password="";
		 keys key=new keys();
		 String privateKey = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIl2F9OesQTUj1mY22LWr7IAkpX0DvGE4M7th3awa0sY8c+byNmayifBt8fJNUAEuPA7pQ3k+lZKWNaCgEMrKhr9DhT4ap/nz9evN7gXKiivZxTCanG1blrpeQ7ikFGm6OeMhKv1KGLfbjdQ3bIIhqGuDyLZ4RR0RXNmcpnBTR69AgMBAAECgYAiyMduvZF972v2+D9L25fKK2rslz3Q0BczRdgpqKr97eoC5yEEL69IMDUZUUkwUgGaiP1TbsYKX/XrEkrytFGK89zbVVI+oPrx1es4ZW07IPAEseZab34tn9OXZOc3N4Gnn0zCtZuz8gvtnjpuCRYZwoT12TVnjhZbduE2PzfN4QJBAL0SQ3HAtdgOq5rvCtqRJjnghRH1Dgq/vjhJScqMss1C0MctjoWD4wnht4z9QVJh4LxphvHDVgvf3K87QstTvbsCQQC6HucahYvpE77GZ9KlG+cyDNWOc3hSvvUkwcAF4dfsZ/xUJ0rYQ+d6qQfxsROq14bkk5LL6OCPsx46yXnHcpHnAkEAuT41mjPndkIZW/kstyxTOY2Cky93jIyEgH09sRfc70KxbxRxeNrZDQt7XMWcxGxlVfRGZISvv36bp4v2S2RGlQJAVU/E7ss4DmYWlCsSysu3daGcYedbx9Hv3CFTO18B8kLXzlsUW30EpZzFH2vjb/PKyQs7xmvAQx3/RUMEpv9FEQJAW0nDRUnLKsVXOX2N5DFVnDJH6Jq+eYfIE19K7ctNw2h4QqzfQx3r8n4xJc5kPI1wxbz6mTkuZg6wqN3SsZYQhg==";
		 password=key.decrypt(rsa_pwd,privateKey);
		 //System.out.println(password);
		 //将密码用md5加密再去找
		 String md5pwd=md5.md(password);
		  User user=userService.login(loginname, md5pwd);
	        if(user!=null){
	        	 session.removeAttribute("user");
	            //登录成功，将user对象设置到HttpSession作用范围域中
	            session.setAttribute("user", user);
	            //放入cookie
	            if(remember!=null&&!remember.equals(null)) {
	            	//设置cookie信息
	            	Cookie usercookie=new Cookie("loginuser",loginname);
	            	usercookie.setMaxAge(60*60*24*15);//cookie信息保留15天
	            	response.addCookie(usercookie);
	            }
	            logger.info("用户:"+user.getUsername()+"登录成功！！");
	            mv.setView(new RedirectView("main"));
	        }else {
	            //登录失败，设置失败信息，并调转到登录页面
	            mv.addObject("message","登录名或密码错误，请重新输入！");
	            logger.info("用户: "+loginname+"登录失败！！");
	            mv.setViewName("login");
	        }
	        return mv;
	    }
	 //注册接口
	 @RequestMapping(value="/register")
	    @ResponseBody
	    public ModelAndView register(String rgname,String rsa_pwd1,String nicheng,String tel, String code,ModelAndView mv,HttpSession session) throws Exception{
		 String yanzm = (String) session.getAttribute("yanzm");
		 String yzfg=code+tel;
		 if(!yzfg.equals(yanzm)) {
			 mv.addObject("message","验证码错误或手机号变更!注意验证码有效时间为10分钟！");
	            mv.setViewName("login");
	            return mv;
		 }
		 if(rsa_pwd1==null&&rsa_pwd1.equals("")) {
			 mv.addObject("message","密码不能为空！");
	            mv.setViewName("login");
	            return mv;
		 }
		 //将密码解密
		 String password="";
		 keys key=new keys();
		 String privateKey = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIl2F9OesQTUj1mY22LWr7IAkpX0DvGE4M7th3awa0sY8c+byNmayifBt8fJNUAEuPA7pQ3k+lZKWNaCgEMrKhr9DhT4ap/nz9evN7gXKiivZxTCanG1blrpeQ7ikFGm6OeMhKv1KGLfbjdQ3bIIhqGuDyLZ4RR0RXNmcpnBTR69AgMBAAECgYAiyMduvZF972v2+D9L25fKK2rslz3Q0BczRdgpqKr97eoC5yEEL69IMDUZUUkwUgGaiP1TbsYKX/XrEkrytFGK89zbVVI+oPrx1es4ZW07IPAEseZab34tn9OXZOc3N4Gnn0zCtZuz8gvtnjpuCRYZwoT12TVnjhZbduE2PzfN4QJBAL0SQ3HAtdgOq5rvCtqRJjnghRH1Dgq/vjhJScqMss1C0MctjoWD4wnht4z9QVJh4LxphvHDVgvf3K87QstTvbsCQQC6HucahYvpE77GZ9KlG+cyDNWOc3hSvvUkwcAF4dfsZ/xUJ0rYQ+d6qQfxsROq14bkk5LL6OCPsx46yXnHcpHnAkEAuT41mjPndkIZW/kstyxTOY2Cky93jIyEgH09sRfc70KxbxRxeNrZDQt7XMWcxGxlVfRGZISvv36bp4v2S2RGlQJAVU/E7ss4DmYWlCsSysu3daGcYedbx9Hv3CFTO18B8kLXzlsUW30EpZzFH2vjb/PKyQs7xmvAQx3/RUMEpv9FEQJAW0nDRUnLKsVXOX2N5DFVnDJH6Jq+eYfIE19K7ctNw2h4QqzfQx3r8n4xJc5kPI1wxbz6mTkuZg6wqN3SsZYQhg==";
		 password=key.decrypt(rsa_pwd1,privateKey);
		 //存储密码
		  User user=new User();
		  user.setTelnumber(tel);
		  user.setUsername(rgname);
		  user.setPassword(password);
		  user.setName(nicheng);
		  int flag=userService.add(user);
	        if(flag==1){
	        	logger.info("用户:"+user.getUsername()+"昵称："+user.getName()+"注册成功！！");
	            //注册成功，直接登陆
	        	 session.removeAttribute("yanzm");
	        	 session.removeAttribute("user");
		            //登录成功，将user对象设置到HttpSession作用范围域中
	        	 String md5pwd=md5.md(password);
	   		  User user1=userService.login(rgname, md5pwd);
		            session.setAttribute("user", user1);
		            //转发到main请求
		            mv.setView(new RedirectView("login"));
	        }else {
	            //注册失败，设置失败信息，并调转到登录页面    
	        	logger.info("用户:"+user.getUsername()+"昵称："+user.getName()+"注册失败！！");
	            mv.addObject("message","注册失败，用户名重复！");
	            mv.setViewName("login");
	        }
	        return mv;
	    }

}
