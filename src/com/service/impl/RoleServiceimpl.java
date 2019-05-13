package com.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mapper.roleMapper;
import com.pojo.Role;
import com.pojo.User;
import com.service.RoleService;
@Service
public class RoleServiceimpl implements RoleService {
	@Autowired
	roleMapper roleMapper;
	@Override
	public List<Role> list(){
		return roleMapper.rolelist();
	}
	@Override
	public int delete(int id) {
		roleMapper.deleterole(id);;
		return 0;
	};
	@Override
	public int add(Role role) {
		// TODO Auto-generated method stub
		role.setAdmin_power("false");
		return roleMapper.addrole(role);
	};
	@Override
	public Role read(int  rid) {
		// TODO Auto-generated method stub
		return roleMapper.getrole(rid);
	};
	@Override
	public int update(Role  role) {
		// TODO Auto-generated method stub
		return roleMapper.updaterole(role);
	};
}
