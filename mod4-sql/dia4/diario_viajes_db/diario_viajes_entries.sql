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
-- Table structure for table `entries`
--

DROP TABLE IF EXISTS `entries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `entries` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `place` varchar(1000) NOT NULL,
  `description` text,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `entries_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entries`
--

LOCK TABLES `entries` WRITE;
/*!40000 ALTER TABLE `entries` DISABLE KEYS */;
INSERT INTO `entries` VALUES (1,'2022-01-18 11:35:50','Milwaukee','Sit officiis repudiandae voluptates ducimus autem similique doloremque magni placeat. Aperiam eius illum dolor et voluptatum commodi. Eos qui odio est reprehenderit voluptatem a sed autem quis. Fugiat neque et modi. Dolores quia esse aperiam qui. Est reiciendis nostrum est ut velit.',4),(2,'2022-01-18 11:35:54','North D\'angelofurt','Laudantium quod possimus. Eaque sit aspernatur aut quo dolorem numquam consequuntur. Accusantium totam voluptates excepturi aspernatur qui sit labore ullam.',5),(3,'2022-01-18 11:35:55','East Josiane','Reprehenderit corrupti beatae. Aut non eligendi dolore accusantium non totam consequatur non. Voluptas eius voluptatum nihil ratione repellendus voluptates qui.',7),(4,'2022-01-18 11:35:56','Alpharetta','Aperiam omnis et. Occaecati modi voluptatem rem vero porro et. Vitae rerum non mollitia aperiam placeat eaque fuga eligendi. Rem ab aut et et. Ex rem qui laborum.',7),(5,'2022-01-18 11:35:57','Kingsport','Porro quis impedit sit cupiditate amet cum error dolorum. Aperiam rem exercitationem qui maxime est et quis doloribus reprehenderit. Fuga in dolore sapiente. Et quia et omnis eius possimus nihil. A odio perferendis assumenda ut quisquam est voluptas perspiciatis. Expedita laboriosam sed natus sunt velit.',9),(6,'2022-01-18 11:35:58','West Georgiana','Incidunt eos exercitationem excepturi aut occaecati quas voluptatem dolorem maxime. Consequatur repellendus inventore optio aspernatur corporis quod neque. Nostrum iure sint.',9),(7,'2022-01-18 11:35:59','Schillerview','Ipsam illo voluptatem. Ut voluptatem est autem itaque. Quia aut nam voluptate est non voluptatem. Eos debitis maxime et quae consequatur est commodi. Dolor et ut animi temporibus. Quia mollitia quod.',5),(8,'2022-01-18 11:36:01','North Emory','Expedita dolorem vel dolore. Deserunt labore est necessitatibus dolores quod illum consequatur. Dolore dolor sunt voluptas est quia consectetur rerum quod inventore. Qui error nam velit cumque eius aut sit maxime perspiciatis.',11),(9,'2022-01-18 11:36:03','Hattiesburg','Similique sunt enim quia doloremque. Iste at est dolorum. Quia cumque et aut. Officia nam fugiat. Voluptas itaque animi. Suscipit fugit iste nobis adipisci ea et est placeat corporis.',6),(10,'2022-01-18 11:36:04','Lake Kasey','Eveniet cupiditate at et sunt est omnis tempora. Reprehenderit aperiam omnis. Et totam et quaerat quos aut voluptate. Dolorum qui quae quae quisquam.',8),(11,'2022-01-18 11:39:49','La Coruña','Que bonita es! :D',1);
/*!40000 ALTER TABLE `entries` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-19 12:02:22
