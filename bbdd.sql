-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 16, 2019 at 03:48 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `aplicacionjaime3`
--
CREATE DATABASE IF NOT EXISTS `aplicacionjaime3` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `aplicacionjaime3`;

-- --------------------------------------------------------

--
-- Table structure for table `curso`
--

CREATE TABLE `curso` (
                       `ID` int(10) NOT NULL,
                       `Nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
                       `CaracteristicaUno` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
                       `CaracteristicaDos` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
                       `CaracteristicaTres` varchar(100) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `curso`
--

INSERT INTO `curso` (`ID`, `Nombre`, `CaracteristicaUno`, `CaracteristicaDos`, `CaracteristicaTres`) VALUES
(1, 'ADAT', 'Jaime', 'SQL', 'PHP');

-- --------------------------------------------------------

--
-- Table structure for table `personas`
--

CREATE TABLE `personas` (
                          `ID` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
                          `Nombre` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
                          `CaracteristicaUno` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
                          `CaracteristicaDos` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
                          `CaracteristicaTres` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
                          `ID_curso` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `personas`
--

INSERT INTO `personas` (`ID`, `Nombre`, `CaracteristicaUno`, `CaracteristicaDos`, `CaracteristicaTres`, `ID_curso`) VALUES
('1', 'Joaquin', 'DR', 'Naves', 'Espaciales', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `personas`
--
ALTER TABLE `personas`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `personas` (`ID_curso`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `personas`
--
ALTER TABLE `personas`
  ADD CONSTRAINT `personas` FOREIGN KEY (`ID_curso`) REFERENCES `curso` (`ID`);