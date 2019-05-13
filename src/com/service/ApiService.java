package com.service;

import java.util.List;

import com.pojo.Role;
import com.pojo.api_message;;
public interface ApiService {
	List<api_message> list();
	int deleteapi(int aid);
	int add(api_message api);
	api_message read(int aid);
    int update(api_message api);
    int shapi(api_message api);
    int csapi(api_message api);
}
