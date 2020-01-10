-- MySQL dump 10.13  Distrib 5.7.28, for Linux (x86_64)
--
-- Host: localhost    Database: Restaurant
-- ------------------------------------------------------
-- Server version	5.7.28-0ubuntu0.18.04.4

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `Restaurant`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `Restaurant` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `Restaurant`;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments` (
  `id` varchar(100) NOT NULL,
  `dishId` varchar(40) NOT NULL,
  `rating` int(11) NOT NULL,
  `comment` varchar(100) NOT NULL,
  `author` varchar(20) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES ('10','2',5,'Imagine all the eatables being servded!!','John Lemon','2020-01-08 10:46:36'),('14','2',2,'It\'s your birthday, we\'re gonna party!','25 Cent','2020-01-08 10:46:41'),('15','3',5,'All the eatables are very amazing','John Lemon','2020-01-08 10:46:47'),('19','3',2,'It\'s your birthday, we\'re gonna party!','25 Cent','2020-01-08 10:46:53'),('280737d0-32e6-11ea-adfa-87595c245366','1',4,'This is very nice!!','Omkar','2020-01-09 13:44:28'),('32f2a0d0-32e6-11ea-adfa-87595c245366','1',4,'Must try!!','Aniket','2020-01-09 13:44:46'),('4','0',2,'It\'s your birthday, we\'re gonna party!','25 Cent','2020-01-08 10:44:24'),('5','1',5,'All the eatables are cool','John Lemon','2020-01-08 10:46:14'),('9','1',2,'It\'s your birthday, we\'re gonna party!','25 Cent','2020-01-08 10:46:31'),('d6222b70-32e3-11ea-be73-af9c9a67b97c','74b15d80-32e2-11ea-9b01-7db382d687bd',5,'Amazing','Aniket','2020-01-09 13:27:51');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dishes`
--

DROP TABLE IF EXISTS `dishes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dishes` (
  `id` varchar(40) NOT NULL,
  `name` varchar(20) NOT NULL,
  `category` varchar(20) NOT NULL,
  `label` varchar(20) NOT NULL,
  `price` float NOT NULL,
  `featured` tinyint(1) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dishes`
--

LOCK TABLES `dishes` WRITE;
/*!40000 ALTER TABLE `dishes` DISABLE KEYS */;
INSERT INTO `dishes` VALUES ('0','Uthappizza','mains','Hot',4.99,1,'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'),('1','Zucchipakoda','appetizer','Hot',2.5,0,'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'),('2','Vadonut','drink','New',1.9,0,'A quintessential ConFusion experience, is it a vada or is it a donut?'),('3','ElaiCheese Cake','dessert','New',2.99,0,'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'),('74b15d80-32e2-11ea-9b01-7db382d687bd','Aniket Fry','Fried','garam',1.45,1,'some description');
/*!40000 ALTER TABLE `dishes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-10 12:09:33
