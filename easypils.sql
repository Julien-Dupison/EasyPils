/*
SQLyog Community v11.3 (64 bit)
MySQL - 5.5.24-log : Database - easypils
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`easypils` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `easypils`;

/*Table structure for table `alergies` */

DROP TABLE IF EXISTS `alergies`;

CREATE TABLE `alergies` (
  `id_alerg` int(12) NOT NULL AUTO_INCREMENT,
  `id_pat` int(12) DEFAULT NULL,
  `libellé` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_alerg`),
  KEY `id_pat` (`id_pat`),
  CONSTRAINT `alergies_ibfk_1` FOREIGN KEY (`id_pat`) REFERENCES `patients` (`id_pat`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `alergies` */

/*Table structure for table `demandes_renouv` */

DROP TABLE IF EXISTS `demandes_renouv`;

CREATE TABLE `demandes_renouv` (
  `id_drenouv` int(12) NOT NULL AUTO_INCREMENT,
  `date_drenouv` date DEFAULT NULL,
  `id_pat` int(12) DEFAULT NULL,
  `id_ordo` int(12) DEFAULT NULL,
  `visibilite` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_drenouv`),
  KEY `id_pat` (`id_pat`),
  KEY `id_ordo` (`id_ordo`),
  CONSTRAINT `demandes_renouv_ibfk_1` FOREIGN KEY (`id_pat`) REFERENCES `patients` (`id_pat`),
  CONSTRAINT `demandes_renouv_ibfk_2` FOREIGN KEY (`id_ordo`) REFERENCES `ordonnances` (`num_ord`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `demandes_renouv` */

insert  into `demandes_renouv`(`id_drenouv`,`date_drenouv`,`id_pat`,`id_ordo`,`visibilite`) values (4,'2016-05-24',2,45,0),(5,'2016-05-24',2,45,0),(6,'2016-05-24',2,40,0),(7,'2016-05-24',2,40,0),(8,'2016-05-24',2,40,0),(9,'2016-05-24',2,46,0);

/*Table structure for table `login_patient` */

DROP TABLE IF EXISTS `login_patient`;

CREATE TABLE `login_patient` (
  `id_login_patient` int(12) NOT NULL AUTO_INCREMENT,
  `username_patient` varchar(255) DEFAULT NULL,
  `password_patient` varchar(255) DEFAULT NULL,
  `id_pat` int(12) DEFAULT NULL,
  PRIMARY KEY (`id_login_patient`),
  KEY `id_pat` (`id_pat`),
  CONSTRAINT `login_patient_ibfk_1` FOREIGN KEY (`id_pat`) REFERENCES `patients` (`id_pat`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

/*Data for the table `login_patient` */

insert  into `login_patient`(`id_login_patient`,`username_patient`,`password_patient`,`id_pat`) values (1,'user2','user2',2),(24,'DupisonJulien75','Grcvi1a3',36),(25,'LaffitteValentin56','nAdwLCpY',37),(26,'MantinThibault77','MlYVCDqF',38),(27,'Totototo29','1olwxUVy',39),(28,'Totototo64','Qfi36Rov',40);

/*Table structure for table `medecins` */

DROP TABLE IF EXISTS `medecins`;

CREATE TABLE `medecins` (
  `id_med` int(12) NOT NULL AUTO_INCREMENT,
  `nom_med` varchar(256) DEFAULT NULL,
  `adresse_med` varchar(256) DEFAULT NULL,
  `postal_med` varchar(8) DEFAULT NULL,
  `ville_med` varchar(256) DEFAULT NULL,
  `telephone_med` varchar(12) DEFAULT NULL,
  `spe_med` int(12) DEFAULT NULL,
  `visibilite` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_med`),
  KEY `spe_med` (`spe_med`),
  CONSTRAINT `medecins_ibfk_1` FOREIGN KEY (`spe_med`) REFERENCES `specialite` (`id_spe`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `medecins` */

insert  into `medecins`(`id_med`,`nom_med`,`adresse_med`,`postal_med`,`ville_med`,`telephone_med`,`spe_med`,`visibilite`) values (1,'Ben Farah','12 avenue de Istanbul','19210','Brive','0555555555',2,1),(2,'Theil','85 rue delarue','19100','Brive','0585965874',10,1),(5,'Tribucky','41Bis avenue Edmond michelet','19100','Brive','0512121212',7,1),(6,'Armangaud','180 rue Lespines','19100','Brive','0515134679',10,1);

/*Table structure for table `medicaments` */

DROP TABLE IF EXISTS `medicaments`;

CREATE TABLE `medicaments` (
  `id_medic` int(12) NOT NULL AUTO_INCREMENT,
  `nom_medic` varchar(256) DEFAULT NULL,
  `image_medic` varchar(256) DEFAULT NULL,
  `type_medic` int(12) DEFAULT NULL,
  `dosage_medic` varchar(255) DEFAULT NULL,
  `visibilite` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_medic`),
  KEY `type_med` (`type_medic`),
  CONSTRAINT `medicaments_ibfk_1` FOREIGN KEY (`type_medic`) REFERENCES `volume_medic` (`id_vol`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `medicaments` */

insert  into `medicaments`(`id_medic`,`nom_medic`,`image_medic`,`type_medic`,`dosage_medic`,`visibilite`) values (1,'doliprane',NULL,3,'1g',0),(2,'doliprane',NULL,1,'500mg',1),(3,'doliprane',NULL,1,'200mg',1),(4,'lexomil',NULL,1,'6mg',1),(5,'sertralin',NULL,1,'50mg',1),(6,'sertralin',NULL,1,'25mg',1),(7,'Ventoline',NULL,7,'100mg',1),(8,'Viagra',NULL,1,'1mg',0),(9,'doliprane',NULL,1,'1g',1);

/*Table structure for table `messages` */

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id_msg` int(20) NOT NULL AUTO_INCREMENT,
  `contenu_msg` text,
  `id_pat` int(12) DEFAULT NULL,
  `auteur_msg` tinyint(1) DEFAULT '0',
  `id_pharm` int(12) DEFAULT NULL,
  PRIMARY KEY (`id_msg`),
  KEY `id_pat` (`id_pat`),
  KEY `id_pharm` (`id_pharm`),
  CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`id_pat`) REFERENCES `patients` (`id_pat`),
  CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`id_pharm`) REFERENCES `pharmaciens` (`id_pharm`)
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=latin1;

/*Data for the table `messages` */

insert  into `messages`(`id_msg`,`contenu_msg`,`id_pat`,`auteur_msg`,`id_pharm`) values (143,'Hey :D !',6,1,1),(144,'test ?',6,1,1),(145,'Coucou :D',6,1,NULL),(146,'aer',2,1,NULL);

/*Table structure for table `ordo_medic` */

DROP TABLE IF EXISTS `ordo_medic`;

CREATE TABLE `ordo_medic` (
  `id_ordo_medic` int(12) NOT NULL AUTO_INCREMENT,
  `id_ord` int(12) NOT NULL,
  `id_medic` int(12) NOT NULL,
  `qte_mat` int(2) DEFAULT NULL,
  `qte_midi` int(2) DEFAULT NULL,
  `qte_soir` int(2) DEFAULT NULL,
  `qte_nuit` int(2) DEFAULT NULL,
  `duree` int(2) DEFAULT NULL,
  PRIMARY KEY (`id_ordo_medic`),
  KEY `id_medic` (`id_medic`),
  KEY `id_ord` (`id_ord`,`id_medic`),
  CONSTRAINT `ordo_medic_ibfk_1` FOREIGN KEY (`id_ord`) REFERENCES `ordonnances` (`num_ord`),
  CONSTRAINT `ordo_medic_ibfk_2` FOREIGN KEY (`id_medic`) REFERENCES `medicaments` (`id_medic`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;

/*Data for the table `ordo_medic` */

insert  into `ordo_medic`(`id_ordo_medic`,`id_ord`,`id_medic`,`qte_mat`,`qte_midi`,`qte_soir`,`qte_nuit`,`duree`) values (12,33,1,1,1,0,0,1),(19,38,1,1,1,1,1,5),(20,38,4,2,2,2,2,3),(21,39,1,1,1,1,1,5),(22,39,2,2,2,2,2,6),(23,40,4,2,0,0,0,5),(24,41,1,10,0,0,0,1),(25,42,3,1,1,1,0,3),(26,43,1,1,1,0,0,2),(27,43,4,0,0,1,0,1),(28,44,8,0,1,2,0,15),(29,45,2,1,2,3,4,2),(30,46,2,1,2,3,4,3),(31,46,4,1,2,3,4,3);

/*Table structure for table `ordonnances` */

DROP TABLE IF EXISTS `ordonnances`;

CREATE TABLE `ordonnances` (
  `num_ord` int(12) NOT NULL AUTO_INCREMENT,
  `id_pat` int(12) NOT NULL,
  `id_phar` int(12) NOT NULL,
  `id_med` int(12) NOT NULL,
  `date_ord` date DEFAULT NULL,
  `renouv_ord` int(2) DEFAULT NULL,
  `nb_renouv_ord` int(2) DEFAULT NULL,
  `visibilite` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`num_ord`),
  KEY `id_pat` (`id_pat`,`id_phar`,`id_med`),
  KEY `id_phar` (`id_phar`),
  KEY `id_med` (`id_med`),
  CONSTRAINT `ordonnances_ibfk_1` FOREIGN KEY (`id_pat`) REFERENCES `patients` (`id_pat`),
  CONSTRAINT `ordonnances_ibfk_2` FOREIGN KEY (`id_phar`) REFERENCES `pharmaciens` (`id_pharm`),
  CONSTRAINT `ordonnances_ibfk_3` FOREIGN KEY (`id_med`) REFERENCES `medecins` (`id_med`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

/*Data for the table `ordonnances` */

insert  into `ordonnances`(`num_ord`,`id_pat`,`id_phar`,`id_med`,`date_ord`,`renouv_ord`,`nb_renouv_ord`,`visibilite`) values (33,10,1,5,'2016-03-21',3,0,1),(38,2,1,6,'2016-04-05',3,2,1),(39,2,1,1,'2016-04-05',0,0,1),(40,2,1,6,'2016-04-06',3,0,1),(41,2,1,6,'2016-04-06',0,0,0),(42,8,1,2,'2016-04-06',0,0,1),(43,12,1,2,'2016-04-07',2,2,1),(44,2,1,2,'2016-05-03',0,0,1),(45,2,1,2,'2016-05-24',1,1,1),(46,2,1,2,'2016-05-24',2,1,1);

/*Table structure for table `patients` */

DROP TABLE IF EXISTS `patients`;

CREATE TABLE `patients` (
  `id_pat` int(12) NOT NULL AUTO_INCREMENT,
  `nom_pat` varchar(256) DEFAULT NULL,
  `prenom_pat` varchar(256) DEFAULT NULL,
  `mail_pat` varchar(255) DEFAULT NULL,
  `dob_pat` date DEFAULT NULL,
  `adresse_pat` varchar(256) DEFAULT NULL,
  `postal_pat` varchar(8) DEFAULT NULL,
  `ville_pat` varchar(256) DEFAULT NULL,
  `id_med` int(12) DEFAULT NULL,
  `visibilite` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_pat`),
  KEY `id_med` (`id_med`),
  CONSTRAINT `patients_ibfk_1` FOREIGN KEY (`id_med`) REFERENCES `medecins` (`id_med`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

/*Data for the table `patients` */

insert  into `patients`(`id_pat`,`nom_pat`,`prenom_pat`,`mail_pat`,`dob_pat`,`adresse_pat`,`postal_pat`,`ville_pat`,`id_med`,`visibilite`) values (2,'Boissonade','Clement',NULL,'1996-07-12','12 avenue de la paix','19100','brive',1,1),(5,'Mantin','Thibault',NULL,'1996-11-06','58 rue des lilas','19100','brive',1,0),(6,'Ramos','Nicolas',NULL,'1994-03-26','66 rue des lilas','19100','brive',1,1),(8,'Duraz','Jordan',NULL,'1995-11-21','63 rue des lilas','19100','Brive',1,1),(10,'Thibault','Louis',NULL,'1994-05-15','456 rue des lilas','19100','brive',2,1),(11,'Marcombe','Marcus',NULL,'1995-11-17','Chez Marcus','19100','Brive',1,1),(12,'De Lima','Fabio',NULL,'1993-05-30','rue des lilas','19100','brive',5,1),(13,'Peyre-Brosson','Clothilde',NULL,'1996-01-01','rue des lilas','19100','Brive',5,1),(36,'Dupison','Julien','Neiades1@gmail.com','1996-11-12','120 allée des places','19100','Brive',1,1),(37,'Laffitte','Valentin','Pactoxa@gmail.com','1996-11-11','Machin','19100','Brive',2,1),(38,'Mantin','Thibault','thibault.mantin@gmail.com','1990-11-11','Rue des lilas','19100','Brive',6,1),(39,'Toto','toto','Neaides1@gmail.com','2016-05-06','1 rue des lilas','19100','brive',6,0),(40,'Toto','toto','Neaides1@gmail.com','2016-05-06','1 rue des lilas','19100','brive',6,0);

/*Table structure for table `periode` */

DROP TABLE IF EXISTS `periode`;

CREATE TABLE `periode` (
  `id_per` int(1) NOT NULL AUTO_INCREMENT,
  `lib_per` varchar(5) NOT NULL,
  PRIMARY KEY (`id_per`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

/*Data for the table `periode` */

insert  into `periode`(`id_per`,`lib_per`) values (1,'Matin'),(2,'Midi'),(3,'Soir'),(4,'Nuit');

/*Table structure for table `pharmaciens` */

DROP TABLE IF EXISTS `pharmaciens`;

CREATE TABLE `pharmaciens` (
  `id_pharm` int(12) NOT NULL AUTO_INCREMENT,
  `nom_pharm` varchar(256) DEFAULT NULL,
  `prenom_pharm` varchar(256) NOT NULL,
  `mail_pharm` varchar(255) DEFAULT NULL,
  `login_pharm` varchar(256) NOT NULL,
  `password_pharm` varchar(256) DEFAULT NULL,
  `embauche_pharm` date DEFAULT NULL,
  `adresse_pharm` varchar(256) DEFAULT NULL,
  `postal_pharm` varchar(8) DEFAULT NULL,
  `ville_pharm` varchar(126) DEFAULT NULL,
  `img_pharm` varchar(500) DEFAULT 'Includes/profilepicture.png',
  `visibilite` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id_pharm`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `pharmaciens` */

insert  into `pharmaciens`(`id_pharm`,`nom_pharm`,`prenom_pharm`,`mail_pharm`,`login_pharm`,`password_pharm`,`embauche_pharm`,`adresse_pharm`,`postal_pharm`,`ville_pharm`,`img_pharm`,`visibilite`) values (1,'Doe','John','johndoe@easypils.com','admin','admin','2016-03-03','7 Rue des Lilas','19100','Brive','Includes/pharma.jpg',1),(3,'test','test','test','test','test','2016-05-07','test','test','test','test',0);

/*Table structure for table `renouvellements` */

DROP TABLE IF EXISTS `renouvellements`;

CREATE TABLE `renouvellements` (
  `id_renouv` int(12) NOT NULL AUTO_INCREMENT,
  `date_renouv` date DEFAULT NULL,
  `id_ordo` int(12) DEFAULT NULL,
  `id_pharm` int(12) DEFAULT NULL,
  PRIMARY KEY (`id_renouv`),
  KEY `id_ordo` (`id_ordo`),
  KEY `id_pharm` (`id_pharm`),
  CONSTRAINT `renouvellements_ibfk_1` FOREIGN KEY (`id_ordo`) REFERENCES `ordonnances` (`num_ord`),
  CONSTRAINT `renouvellements_ibfk_2` FOREIGN KEY (`id_pharm`) REFERENCES `pharmaciens` (`id_pharm`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

/*Data for the table `renouvellements` */

insert  into `renouvellements`(`id_renouv`,`date_renouv`,`id_ordo`,`id_pharm`) values (1,'2016-05-24',38,1),(2,'2016-05-24',38,1),(3,'2016-05-24',43,1),(4,'2016-05-24',43,1),(5,'2016-05-24',45,1),(6,'2016-05-24',46,1);

/*Table structure for table `specialite` */

DROP TABLE IF EXISTS `specialite`;

CREATE TABLE `specialite` (
  `id_spe` int(12) NOT NULL AUTO_INCREMENT,
  `lib_spe` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_spe`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `specialite` */

insert  into `specialite`(`id_spe`,`lib_spe`) values (1,'Anatomo-pathologie'),(2,'Cardiologie'),(3,'Chirurgie'),(4,'Dermatologie'),(5,'Gastroentérologie'),(6,'Médecine du travail'),(7,'Neurochirurgie'),(8,'Ophtalmologie'),(9,'Pneumologie'),(10,'Psychiatrie'),(11,'Rhumatologie');

/*Table structure for table `volume_medic` */

DROP TABLE IF EXISTS `volume_medic`;

CREATE TABLE `volume_medic` (
  `id_vol` int(12) NOT NULL AUTO_INCREMENT,
  `nom_vol` varchar(256) DEFAULT NULL,
  `image_vol` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id_vol`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

/*Data for the table `volume_medic` */

insert  into `volume_medic`(`id_vol`,`nom_vol`,`image_vol`) values (1,'Comprime',NULL),(2,'Cuilliere a cafe',NULL),(3,'Gelule',NULL),(4,'Suppositoire',NULL),(5,'Goutte',NULL),(6,'Sachet',NULL),(7,'Bouffee',NULL),(8,'Application',NULL),(9,'Cuillere à soupe ',NULL),(10,'Injection',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
