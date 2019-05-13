package com.service;

import java.util.List;
import java.util.*;
import com.pojo.User;

public interface UserService {

	List<User> list();
    int add(User user);
    int delete(int id);
    User read(int id);
    int update(User user);
    int updatepwd(User user);
    int updateuser_mes(User  user);
    User login(String username, String password);
    User findByTel(User user);
}
