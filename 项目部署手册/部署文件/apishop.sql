/*
SQLyog v10.2 
MySQL - 5.5.15 : Database - apishop
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`apishop` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `apishop`;

/*Table structure for table `api` */

DROP TABLE IF EXISTS `api`;

CREATE TABLE `api` (
  `aid` int(10) NOT NULL AUTO_INCREMENT,
  `aname` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `request_parameter` varchar(100) DEFAULT NULL,
  `parameter_message` varchar(100) DEFAULT NULL,
  `request_ex` varchar(100) DEFAULT NULL,
  `uid` int(10) DEFAULT NULL,
  `cid` int(10) DEFAULT NULL,
  `check_message` varchar(100) DEFAULT NULL,
  `test_message` varchar(100) DEFAULT NULL,
  `pic_path` int(10) DEFAULT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

/*Data for the table `api` */

insert  into `api`(`aid`,`aname`,`address`,`request_parameter`,`parameter_message`,`request_ex`,`uid`,`cid`,`check_message`,`test_message`,`pic_path`) values (1,'快递查询','https://api.apiopen.top/EmailSearch','number','number:快递单号','https://api.apiopen.top/EmailSearch?number=1012002',1,1,'true','true',1),(3,'天气获取接口','https://www.apiopen.top/weatherApi','city','city:城市','https://www.apiopen.top/weatherApi?city=成都',1,1,'true','true',1),(4,'小说搜索接口','https://www.apiopen.top/novelSearchApi','name','name:小说名称','https://www.apiopen.top/novelSearchApi?name=盗墓笔记',1,1,'true','true',1),(5,'获取宋朝古诗词','https://api.apiopen.top/getSongPoetry','page，count','page：页数，count：句子数目','https://api.apiopen.top/getSongPoetry?page=1&count=20',1,8,'true','true',0),(6,'个性网名获取接口','https://www.apiopen.top/femaleNameApi','page','page：页数','https://www.apiopen.top/femaleNameApi?page=1',1,1,'true','true',0);

/*Table structure for table `classify` */

DROP TABLE IF EXISTS `classify`;

CREATE TABLE `classify` (
  `cid` int(10) NOT NULL AUTO_INCREMENT,
  `cname` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `classify` */

insert  into `classify`(`cid`,`cname`) values (0,'未分类'),(1,'生活服务'),(8,'学习');

/*Table structure for table `role` */

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `rid` int(10) NOT NULL AUTO_INCREMENT,
  `rname` varchar(100) DEFAULT NULL,
  `admin_power` varchar(100) DEFAULT NULL,
  `check_power` varchar(100) DEFAULT NULL,
  `test_power` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`rid`),
  UNIQUE KEY `rname` (`rname`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `role` */

insert  into `role`(`rid`,`rname`,`admin_power`,`check_power`,`test_power`) values (0,'普通用户','false','false','false'),(1,'超级用户','true','true','true'),(3,'审核用户','false','true','false'),(4,'测试用户','false','false','true');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `USERNAME` varchar(100) DEFAULT NULL,
  `PASSWORD` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `telnumber` varchar(100) DEFAULT NULL,
  `rid` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `USERNAME` (`USERNAME`),
  UNIQUE KEY `telnumber` (`telnumber`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`USERNAME`,`PASSWORD`,`name`,`telnumber`,`rid`) values (1,'admin','21232f297a57a5a743894a0e4a801fc3','管理员','18229707759',1),(2,'check','0ba4439ee9a46d9d9f14c60f88f45f87','审核用户','18229707756',3),(3,'test','098f6bcd4621d373cade4e832627b4f6','测试用户','18229707753',4);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
