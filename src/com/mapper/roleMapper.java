package com.mapper;

import java.util.List;

import com.pojo.Role;

public interface roleMapper {
	public int addrole(Role role);//添加角色
	public void deleterole(int rid);//删除角色
	public int updaterole(Role role);//更新角色名
	public Role getrole(int rid);//根据id获取角色信息
	public List<Role> rolelist();//获取角色表
}
