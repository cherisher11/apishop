package com.service.impl;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.userMapper;
import com.md5.md5;
import com.pojo.User;
import com.service.UserService;

@Service
public class UserServiceImpl  implements UserService{
	@Autowired
	userMapper userMapper;
	
	@Override
	public List<User> list(){
		return userMapper.userlist();
	}
	@Override
	public int delete(int id) {
		userMapper.deleteuser(id);
		return 0;
	};
	@Override
	public int add(User user) {
		 user.setRid(0);//默认普通用户
		 user.setPassword(md5.md(user.getPassword()));//密码md5加密后存储
		return userMapper.adduser(user);
	};
	@Override
	public User read(int  id) {
		return userMapper.getuser(id);
	};
	@Override
	public int update(User  user) {
		return userMapper.updateuser(user);
	};
	@Override
	public int updatepwd(User  user) {
		return userMapper.updatepwd(user);
	};
	@Override
	public int updateuser_mes(User  user) {
		return userMapper.updateuser_name(user);
	};
	@Override
	public User login(String username, String password) {
		return userMapper.findUserByNameAndPwd(username, password);
	};
	@Override
	public User findByTel(User user) {
		return userMapper.findByTel(user);
	};
}
