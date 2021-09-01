-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.7.33 - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para contact_app
CREATE DATABASE IF NOT EXISTS `contact_app` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `contact_app`;

-- Volcando estructura para tabla contact_app.contacts
CREATE TABLE IF NOT EXISTS `contacts` (
  `name` varchar(150) DEFAULT NULL,
  `email` varchar(500) NOT NULL,
  `phone_number` int(9) NOT NULL DEFAULT '0',
  `id` int(4) NOT NULL AUTO_INCREMENT,
  `user_id` int(4) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone_number` (`phone_number`),
  KEY `FK_contacts_users` (`user_id`),
  CONSTRAINT `FK_contacts_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla contact_app.contacts: ~4 rows (aproximadamente)
DELETE FROM `contacts`;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` (`name`, `email`, `phone_number`, `id`, `user_id`) VALUES
	('Pepe', 'pepe@pepe.com', 666333999, 1, 7),
	('Antonio', 'antonio@antonio.com', 653789123, 2, 7),
	('José María', 'jose@maria.com', 555999777, 3, 7),
	('Jesús', 'jesus@jesus.com', 558887766, 4, 7),
	('Rita Suarez', 'ritasuarez@ritasuarez.com', 444555111, 5, 7),
	('Ricardo Ramos', 'ricardo@ramos.com', 777888999, 6, 8);
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;

-- Volcando estructura para tabla contact_app.sessions
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla contact_app.sessions: ~1 rows (aproximadamente)
DELETE FROM `sessions`;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
	('DPW0MOosex62ztBC_WKM9pZ_Lr4AGcsj', 1630023988, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"flash":{"error":["Something goes wrong...","Something goes wrong..."]},"passport":{"user":8}}'),
	('_zPXi7cZ_lCEcwlCKkpS35cCOhl2VoXB', 1630078050, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"flash":{},"passport":{"user":7}}'),
	('gejl9Yinx0qIj1-PF1l-rFRCtP0-NMUm', 1630161464, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"flash":{},"passport":{}}'),
	('z5lKhjLkgADoquKBtZazrRWoGy59apEn', 1630072123, '{"cookie":{"originalMaxAge":null,"expires":null,"httpOnly":true,"path":"/"},"flash":{},"passport":{}}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;

-- Volcando estructura para tabla contact_app.users
CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(150) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `id` int(4) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla contact_app.users: ~6 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`username`, `email`, `password`, `id`) VALUES
	('Test', 'test@test.com', '$2b$10$ISh59ismi/UhPS0Aycj/OOvtlZ07TeLTsBHF9YT0tI7xwU1guwSVi', 1),
	('test2', 'test2@test.com', '$2b$10$4D5IhgK20HX0ExuafUpNK.bZ0aTtWlf56GQ14cSwbezKZDoOWdxhy', 2),
	('test3', 'test3@test.com', '$2b$10$cZyqmdP/l8xZVkDuyktWIO0ZVHqHy2rIwNxgXoDYZYyTBN6uoQmoe', 3),
	('test4', 'test4@test.com', '$2b$10$xxwKG00tmRe8QA79EY2hcuFPv8fr4sXLNNv72Fpx4cQcCCBoEWZBa', 4),
	('test5', 'test5@test.com', '$2b$10$At.ujVZOv9gAHIyjevi0MeKm27./emwz4nqFStihUAkj.DY75jmbu', 5),
	('FloatingHero', 'floatinghero@gmail.com', '$2b$10$Gk8IsYrNWuUKRFAexU9mwOhL2zDgosPxJQfGRIiHxwiWk4TQKuyQW', 7),
	('Álvaro', 'alvaro@alvaro.com', '$2b$10$wtG0UksWHE0PYR6iyfQ26uAndOSw.E9SvO0ZOrwRPxwT/WI6mj/Ma', 8);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
