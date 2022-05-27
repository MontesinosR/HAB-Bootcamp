-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: diario_viajes
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(512) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `active` tinyint(1) DEFAULT '0',
  `role` enum('admin','normal') NOT NULL DEFAULT 'normal',
  `registrationCode` varchar(100) DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `lastAuthUpdate` datetime DEFAULT NULL,
  `recoverCode` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2022-01-18 11:35:45','stefano.peraldini@hackaboss.com','ba3253876aed6bc22d4a6ff53d8406c6ad864195ed144ab5c87621b6c233b548baeae6956df346ec8c17f5ea10f35ee3cbc514797ed7ddd3145464e2a0bab413','Stefano Peraldini',NULL,1,'admin',NULL,0,NULL,NULL),(2,'2022-01-18 11:35:46','Cruz.Kling@yahoo.com','8ec08c9a7f789e0fce60bc6b7a8b7cceb7a7fe932408700e4f594174d1890a31cb334942cde342a8135925cd724c748487a95eab41a839c02a8fa629e53abe41','Rosa Conn','f9dc1d33-b710-4129-88c4-cac5bb5e61af.jpg',1,'normal',NULL,0,NULL,NULL),(3,'2022-01-18 11:35:47','Margarett35@yahoo.com','8c038f63c44eeb1910bcea6d5a097fdf79a7f3524953503e21ed6d674a7ea995787a0e3c9785edaeac785d978192ac1ffa89b22d3aaa83954f0c96027172719c','Marilyn Tremblay','c28335e7-9220-4fc2-9b3e-ea8aaad10ebd.jpg',1,'normal',NULL,0,NULL,NULL),(4,'2022-01-18 11:35:47','Christy.Armstrong93@hotmail.com','e768c81ef97121ddf26ce57ef1132107d02413f85b8e0c0f3778881c6417bcb47f9d78ab5c53f4e94d8b571e83b7d623c56eb39da93337ef9f70430ad9e98551','Diana Shanahan','6651de46-8324-4e32-bd5b-373b025b7af9.jpg',1,'normal',NULL,0,NULL,NULL),(5,'2022-01-18 11:35:48','Adam_Abshire68@yahoo.com','fa9521bd217507bd5a80a34cff7f7d497366d4fcd2ba5af7f425f388a04ac3c5929ff26b108fa1a01174de3cde7028e6933afb347d389e214e8c7a0356d0fc89','Colleen Fritsch','0f534b68-9dc5-4391-8e79-14fa4fc4570b.jpg',1,'normal',NULL,0,NULL,NULL),(6,'2022-01-18 11:35:48','Lillie.Robel97@hotmail.com','42999465983dffa6246a1121ae4902d0c8dfabcd4fab19322f6460fb10544c2173886c0fc71ebdd73e66f0ef475492730551f45dbb94cdf8734b4e577ffbbd53','Jaime Sawayn','ee7c6b60-03bc-4bbc-8602-f62b60e3939c.jpg',1,'normal',NULL,0,NULL,NULL),(7,'2022-01-18 11:35:48','Jeffrey_Strosin@hotmail.com','d51dbf3fd23bf491cb5f7dbe63201a5fae4d4edd01abb8ad9dc206dce645f18a60bee40a8161e30c3059e8689ded712d71c3ac017c57e12d37628f424c18246b','Freda Moen','4b4beb3e-761d-4764-ba31-2aeb23f01129.jpg',1,'normal',NULL,0,NULL,NULL),(8,'2022-01-18 11:35:49','Ole_VonRueden@hotmail.com','1f752f5e2dba959247ea84d72794b03f3e5c406409b275f64a325fbc73494bbc7393900e21bfc542e04e5e5a0ede5f200a8dd7c0e3060148b506a1b260124124','Desiree Rolfson','869c8e67-e037-4599-a6b2-0038e99493e9.jpg',1,'normal',NULL,0,NULL,NULL),(9,'2022-01-18 11:35:49','Brady.Pagac@gmail.com','1b95149aa2eb7d1cd1641f86ef671ec3eac0ad8a5649541fe46da55f9ebccc5f60724d412512d2d84dd08b63701084563cbfb854b7d0b6e9f2f6d016c556ee56','Roger Beatty I','57038be8-1db1-4ad5-8d96-30e05d0f1e58.jpg',1,'normal',NULL,0,NULL,NULL),(10,'2022-01-18 11:35:50','Kim10@gmail.com','aef4b897a607bf0816e428cc7653c08265c725bbc8ff23f602164ae8de2abe32091fabdb4d159f0f714bc90c500d63aabff4222977beb09080096ed69c735613','Maria Dickinson','3e69fbbd-7c97-4f0c-a563-9632854ae3a1.jpg',1,'normal',NULL,0,NULL,NULL),(11,'2022-01-18 11:35:50','Rozella.Hamill@yahoo.com','59bfc8e37ff3fcf99bbf8a2b973313f4b51882d7469e8f1c9a901cc75ce37190138a61cfbea207edcbd2d1e666fe1de2d61b617056825c8c3731966c9cad5e1d','Jody Simonis DVM','88b5d11b-c0fa-47cd-9465-5c1684a6c0c6.jpg',1,'normal',NULL,0,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-19 12:02:21
