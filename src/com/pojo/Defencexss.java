package com.pojo;

public class Defencexss {
public String  filter(String message) {
	String result="";
	for(int i=0;i<message.length();i++) {
		if(message.charAt(i)=='<') result+='＜';
		else if(message.charAt(i)=='>') result+='＞';
		else if(message.charAt(i)=='&') result+='＆';
		else if(message.charAt(i)=='\\') result+='＼';
		else if(message.charAt(i)=='#') result+='＃';
		else if(message.charAt(i)==':') result+='：';
		else if(message.charAt(i)=='%') result+="\\%";
		else result+=message.charAt(i);
	}
	return result;
}
}
