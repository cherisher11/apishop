package com.service;

import java.util.List;

import com.pojo.Role;


public interface RoleService {
	List<Role> list();
    int add(Role role);
    int delete(int id);
    Role read(int rid);
    int update(Role role);
}
