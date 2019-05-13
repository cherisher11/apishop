package com.sendmessage;

import com.zhenzi.sms.ZhenziSmsClient;
import java.util.*;
public class Senddx {
	private static final String apiUrl="https://sms_developer.zhenzikj.com";
	private static final String appId="101089";
	private static final String appSecret="35e81c36-0ea7-4a11-9607-bc2436575ea1";
	public  String sendMess(String phone) throws Exception {
		Random random = new Random();
		String sRand = "";
		//生成6为随机的数字验证码
		for (int i = 0; i < 6; i++)
		{
			//生成一位验证码的值
			int rand ;
			rand=random.nextInt(10);
			sRand += rand;
		}
		ZhenziSmsClient client = new ZhenziSmsClient(apiUrl, appId, appSecret);
		String result = client.send(phone, "欢迎注册apishop,您的验证码为"+sRand);
		return sRand;
	}
}
