package com.test;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import com.key.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import com.mapper.*;
import com.pojo.*;
import com.md5.*;
import com.sendmessage.*;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("classpath:applicationContext.xml")
public class MybatisTest {
	@Autowired
	apiMapper apimapper;
	@Autowired
	userMapper userMapper;
	@Autowired
	roleMapper roleMapper;
	@Autowired
	cMapper cmapper;
	//测试连接数据库
	@Test
	public void tsetlist() {
		List<classify> list=cmapper.clist();
		for(int i=0;i<list.size();i++) 
		{
			System.out.println(list.get(i).getCname());
		}
	}
	@Test
	public void  add() {
		api_message api=new api_message();
		api.setAname("aname");
		api.setAddress("dsadsadasdas");
		apimapper.addapi(api);
	}
	@Test
	public void tsetfind() {
		User user=new User();
		user.setUsername("admin");
		user.setPassword("admin");
		User user1=userMapper.findUserByNameAndPwd("admin", "admin");
		System.out.println(user1.getId());
	}
	@Test
	public void tset2list() {
		List<Role> list=roleMapper.rolelist();
		for(int i=0;i<list.size();i++) 
		{
			System.out.println(list.get(i).getRid()+"  "+list.get(i).getRname());
		}
	}
	@Test
	public void tset3list() {
		List<api_message> list=apimapper.apilist();
		for(int i=0;i<list.size();i++) 
		{
			System.out.println(list.get(i).getAid()+"  "+list.get(i).getAddress());
		}
	}
	@SuppressWarnings("null")
	@Test
	public void shapi() {
		HttpSession session = null ;
		User loginuser=session.getAttribute("user")==null?null:(User) session.getAttribute("user");
		System.out.println(loginuser);
	}
	@Test
	public void update() throws Exception {
	User user=new User();
	user.setId(47);
	user.setPassword("sdsadsad");
	userMapper.updatepwd(user);
	}
	//测试md5方法
	@Test
	public void testmd5() {
		String string="123456";
		String md5str=md5.md(string);
		System.out.println(md5str);
	}
	@Test
	public void testts() {
		List<User> list=userMapper.userlist();
		User user=list.get(0);
	}
	//测试md5
	//测试公钥，密钥和签名，验1证。
	@Test
	public void testkey() {
		keys key=new keys();
	        String input = "3127975plj";
	        try {
	            String publicKey = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJdhfTnrEE1I9ZmNti1q+yAJKV9A7xhODO7Yd2sGtLGPHPm8jZmsonwbfHyTVABLjwO6UN5PpWSljWgoBDKyoa/Q4U+Gqf58/Xrze4Fyoor2cUwmpxtW5a6XkO4pBRpujnjISr9Shi3243UN2yCIahrg8i2eEUdEVzZnKZwU0evQIDAQAB";
	            System.out.println("公钥------------------");
	            System.out.println("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJdhfTnrEE1I9ZmNti1q+yAJKV9A7xhODO7Yd2sGtLGPHPm8jZmsonwbfHyTVABLjwO6UN5PpWSljWgoBDKyoa/Q4U+Gqf58/Xrze4Fyoor2cUwmpxtW5a6XkO4pBRpujnjISr9Shi3243UN2yCIahrg8i2eEUdEVzZnKZwU0evQIDAQAB");
	            String privateKey = "MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIl2F9OesQTUj1mY22LWr7IAkpX0DvGE4M7th3awa0sY8c+byNmayifBt8fJNUAEuPA7pQ3k+lZKWNaCgEMrKhr9DhT4ap/nz9evN7gXKiivZxTCanG1blrpeQ7ikFGm6OeMhKv1KGLfbjdQ3bIIhqGuDyLZ4RR0RXNmcpnBTR69AgMBAAECgYAiyMduvZF972v2+D9L25fKK2rslz3Q0BczRdgpqKr97eoC5yEEL69IMDUZUUkwUgGaiP1TbsYKX/XrEkrytFGK89zbVVI+oPrx1es4ZW07IPAEseZab34tn9OXZOc3N4Gnn0zCtZuz8gvtnjpuCRYZwoT12TVnjhZbduE2PzfN4QJBAL0SQ3HAtdgOq5rvCtqRJjnghRH1Dgq/vjhJScqMss1C0MctjoWD4wnht4z9QVJh4LxphvHDVgvf3K87QstTvbsCQQC6HucahYvpE77GZ9KlG+cyDNWOc3hSvvUkwcAF4dfsZ/xUJ0rYQ+d6qQfxsROq14bkk5LL6OCPsx46yXnHcpHnAkEAuT41mjPndkIZW/kstyxTOY2Cky93jIyEgH09sRfc70KxbxRxeNrZDQt7XMWcxGxlVfRGZISvv36bp4v2S2RGlQJAVU/E7ss4DmYWlCsSysu3daGcYedbx9Hv3CFTO18B8kLXzlsUW30EpZzFH2vjb/PKyQs7xmvAQx3/RUMEpv9FEQJAW0nDRUnLKsVXOX2N5DFVnDJH6Jq+eYfIE19K7ctNw2h4QqzfQx3r8n4xJc5kPI1wxbz6mTkuZg6wqN3SsZYQhg==";
	            System.out.println("私钥------------------");
	            System.out.println("MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAIl2F9OesQTUj1mY22LWr7IAkpX0DvGE4M7th3awa0sY8c+byNmayifBt8fJNUAEuPA7pQ3k+lZKWNaCgEMrKhr9DhT4ap/nz9evN7gXKiivZxTCanG1blrpeQ7ikFGm6OeMhKv1KGLfbjdQ3bIIhqGuDyLZ4RR0RXNmcpnBTR69AgMBAAECgYAiyMduvZF972v2+D9L25fKK2rslz3Q0BczRdgpqKr97eoC5yEEL69IMDUZUUkwUgGaiP1TbsYKX/XrEkrytFGK89zbVVI+oPrx1es4ZW07IPAEseZab34tn9OXZOc3N4Gnn0zCtZuz8gvtnjpuCRYZwoT12TVnjhZbduE2PzfN4QJBAL0SQ3HAtdgOq5rvCtqRJjnghRH1Dgq/vjhJScqMss1C0MctjoWD4wnht4z9QVJh4LxphvHDVgvf3K87QstTvbsCQQC6HucahYvpE77GZ9KlG+cyDNWOc3hSvvUkwcAF4dfsZ/xUJ0rYQ+d6qQfxsROq14bkk5LL6OCPsx46yXnHcpHnAkEAuT41mjPndkIZW/kstyxTOY2Cky93jIyEgH09sRfc70KxbxRxeNrZDQt7XMWcxGxlVfRGZISvv36bp4v2S2RGlQJAVU/E7ss4DmYWlCsSysu3daGcYedbx9Hv3CFTO18B8kLXzlsUW30EpZzFH2vjb/PKyQs7xmvAQx3/RUMEpv9FEQJAW0nDRUnLKsVXOX2N5DFVnDJH6Jq+eYfIE19K7ctNw2h4QqzfQx3r8n4xJc5kPI1wxbz6mTkuZg6wqN3SsZYQhg==");
	            
	            System.out.println("测试可行性-------------------");
	            System.out.println("明文======="+input);
	            
	            String  cipherText1 = key.encrypt(input,publicKey); //公钥加密         
	            //加密后的东西 
	            System.out.println("密文======="+cipherText1);
	            //开始解密 
	            String plainText = key.decrypt(cipherText1,privateKey); //私钥解密
	            System.out.println("解密后明文===== " + new String(plainText));
	            
	        } catch (Exception e) {
	            e.printStackTrace();
	        }

	    }
	     
	}

