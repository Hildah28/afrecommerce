-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2023 at 09:06 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `afrecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productid` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productid`, `name`, `description`, `image`, `category`, `quantity`, `price`) VALUES
(1, 'alex', 'very nice', 'url', 'clothing', '50', '50'),
(2, 'alex', 'very nice', 'url', 'clothing', '50', '50'),
(3, 'cap', 'very warm and come in differennt colors', 'C:\\fakepath\\image3.jpg', 'Clothing', 'fif', 'fif'),
(4, 'cap', 'very warm and come in differennt colors', 'C:\\fakepath\\image3.jpg', 'Clothing', 'fif', 'fif'),
(5, 'cap', 'very warm and come in differennt colors', 'C:\\fakepath\\image3.jpg', 'Clothing', 'fif', 'fif'),
(6, 'cap', 'very warm and come in differennt colors', 'C:\\fakepath\\image3.jpg', 'Clothing', 'fif', 'fif'),
(7, 'cap', 'very warm and come in differennt colors', 'C:\\fakepath\\image3.jpg', 'Clothing', 'fif', 'fif'),
(8, 'cap', 'very warm and come in differennt colors', 'C:\\fakepath\\image3.jpg', 'Clothing', 'fif', 'fif'),
(9, 'cap', 'very warm and come in differennt colors', 'C:\\fakepath\\image3.jpg', 'Clothing', 'fif', 'fif'),
(10, 'kiatu', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(11, 'kiatu', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(12, 'shuka', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(13, 'shuka', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(14, 'watch', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(15, 'watch', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(16, 'watch', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(17, 'watch', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(18, 'watch', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(19, 'watch', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(20, 'watch', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(21, 'watch', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(22, 'watch', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300'),
(23, 'watch', 'all sizes available', 'C:\\fakepath\\image2.jpg', 'Clothing', '20', '300');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
