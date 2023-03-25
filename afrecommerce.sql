-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2023 at 09:06 AM
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
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `clientId` varchar(255) DEFAULT NULL,
  `productId` varchar(255) DEFAULT NULL,
  `noItems` varchar(255) DEFAULT NULL,
  `orderDate` date DEFAULT NULL,
  `orderStatus` varchar(255) DEFAULT NULL,
  `paymentStatus` varchar(255) DEFAULT NULL,
  `deliveryStatus` varchar(255) DEFAULT NULL,
  `totalPrice` varchar(255) DEFAULT NULL,
  `orderTime` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderId`, `clientId`, `productId`, `noItems`, `orderDate`, `orderStatus`, `paymentStatus`, `deliveryStatus`, `totalPrice`, `orderTime`) VALUES
(4138, 'clientId', 'cap', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKshfif', '1679728194138'),
(4139, 'clientId', 'WATCH', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679728253207'),
(4140, 'clientId', 'WATCH', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679728509579'),
(4141, 'clientId', 'WATCH', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679728512056'),
(4142, 'clientId', 'WATCH', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679728587017'),
(4143, 'clientId', 'WATCH', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679728658751'),
(4144, 'clientId', 'WATCH', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679728946415'),
(4145, 'clientId', 'CROCKS', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679729306960'),
(4146, 'clientId', 'CROCKS', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679729317919'),
(4147, 'clientId', 'CROCKS', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679729358466'),
(4148, 'clientId', 'WATCH', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679729502383'),
(4149, 'clientId', 'CROCKS', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679729589162'),
(4150, 'clientId', 'WATCH', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679729765870'),
(4151, 'clientId', 'WATCH', '1', '2023-03-25', 'Active', 'Pending', 'Pending', 'KshKsh500', '1679729939157');

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
(9, 'cap', 'very warm and come in differennt colors', 'cap.jpg', 'Clothing', 'fif', 'fif'),
(36, 'WATCH', 'GOLDEN', 'watch.jpg', 'Accessories', '20', '500'),
(37, 'CROCKS', 'ALL WEATHER', 'watch.jpg', 'Footware', '20', '500'),
(38, 'slippers', 'Comes in many colors', 'kiatu.jpg', 'Footware', '50', '150'),
(39, 'earings', 'Comes in many colors', 'Earings.jpg', 'Accessories', '50', '150'),
(40, 'headcaf', 'Comes in many colors', 'image5.jpg', 'Clothing', '50', '150'),
(41, 'Maasai shuka', 'Comes in many colors', 'shukamaasai.jpg', 'Footware', '50', '150');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `accountType` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `name`, `username`, `password`, `accountType`, `email`) VALUES
(3, 'Alex', 'alex@example', '1234', 'Admin', 'alexkemboi@gmail.com'),
(12, 'Alex', 'alex@exampleb', '1234', 'Admin', 'alexkemboi@gmail.comb'),
(17, 'Peter', 'peter@gmail.com', '123', 'Admin', 'peter@gmail..com'),
(18, 'Peter', 'peter@gmail.com', '123', 'Admin', 'peter@gmail.com'),
(19, 'beva', 'beva@gmail.com', '1234', 'Admin', 'beva@gmail.com'),
(20, 'marion', 'marion23', '12345', 'Customer', 'marion@gmail.com'),
(21, 'wal', '', '', 'Admin', ''),
(22, 'wal', 'werty', '1234', 'Admin', 'afgh@gmail.com'),
(24, 'wal', 'akl', '1234', 'Admin', 'akl@gmail.com'),
(26, 'Alex', 'alex@example', '1234', 'Customer', 'KAMALA@GMAIL.COM');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `username` (`username`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4152;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
