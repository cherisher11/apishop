package com.mapper;
 
import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.pojo.User;

public interface userMapper {
 
      
    public int adduser(User user); //添加用户
    public void deleteuser(int id); //删除用户
    public User getuser(int id);     //根据id获取用户信息
    public int updateuser(User user);   //给用户赋予角色
    public int updatepwd(User user);   //用户自己修改密码
    public int updateuser_name(User user);//用户自己修改用户名等信息
    public List<User> userlist();//获取用户表
    public User findByTel(User user);//根据电话号码获取用户信息
    public User findUserByNameAndPwd(@Param("name")String name, @Param("password")String password);//通过用户名和密码查找用户

}
