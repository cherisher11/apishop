package com.pojo;

public class Role {
	private int rid;
	private String rname;
	private String admin_power;
	private String check_power;
	private String test_power;
	public String getAdmin_power() {
		return admin_power;
	}
	public void setAdmin_power(String admin_power) {
		this.admin_power = admin_power;
	}
	public String getCheck_power() {
		return check_power;
	}
	public void setCheck_power(String check_power) {
		this.check_power = check_power;
	}
	public String getTest_power() {
		return test_power;
	}
	public void setTest_power(String test_power) {
		this.test_power = test_power;
	}
	public int getRid() {
		return rid;
	}
	public void setRid(int rid) {
		this.rid = rid;
	}
	public String getRname() {
		return rname;
	}
	public void setRname(String rname) {
		this.rname = rname;
	}
}