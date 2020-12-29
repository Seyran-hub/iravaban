-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 29, 2020 at 08:14 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iravabanakan`
--

-- --------------------------------------------------------

--
-- Table structure for table `aboutus`
--

CREATE TABLE `aboutus` (
  `id` int(11) NOT NULL,
  `content_am` text CHARACTER SET utf8 NOT NULL,
  `content_en` text CHARACTER SET utf8 NOT NULL,
  `content_ru` text CHARACTER SET utf8 NOT NULL,
  `content_fr` text CHARACTER SET utf8 NOT NULL,
  `img_url` varchar(300) CHARACTER SET utf8 NOT NULL,
  `img_name` varchar(300) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `aboutus`
--

INSERT INTO `aboutus` (`id`, `content_am`, `content_en`, `content_ru`, `content_fr`, `img_url`, `img_name`) VALUES
(4, 'About_us<div><ul><li>ok</li><li>es</li><li>if</li><li>i</li><li>was</li><li>you</li></ul><b><font size=\"7\">Yete dues aba dues</font></b></div>', 'Arman', '<span>Arman</span>', '<span>Arman</span>', 'http://localhost:3000/images/about_us/1608884989137slider-img-1.jpg', '1608884989137slider-img-1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `title_am` varchar(300) CHARACTER SET utf8 NOT NULL,
  `title_en` varchar(300) CHARACTER SET utf8 NOT NULL,
  `title_ru` varchar(300) CHARACTER SET utf8 NOT NULL,
  `title_fr` varchar(300) CHARACTER SET utf8 NOT NULL,
  `content_am` text CHARACTER SET utf8 NOT NULL,
  `content_en` text CHARACTER SET utf8 NOT NULL,
  `content_ru` text CHARACTER SET utf8 NOT NULL,
  `content_fr` text CHARACTER SET utf8 NOT NULL,
  `img_url` varchar(300) CHARACTER SET utf8 NOT NULL,
  `img_name` varchar(300) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `title_am`, `title_en`, `title_ru`, `title_fr`, `content_am`, `content_en`, `content_ru`, `content_fr`, `img_url`, `img_name`) VALUES
(4, 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'http://localhost:3000/images/blog/1609153525922spider-mans-worst-nightmare-spider-man-venom-teeturtle-500x500.jpg', '1609153525922spider-mans-worst-nightmare-spider-man-venom-teeturtle-500x500.jpg'),
(5, 'Barev', 'Barev', 'Barev', 'Barev', 'Barev', 'Barev', 'Barev', 'Barev', 'http://localhost:3000/images/blog/1609154619863avart8.jpg', '1609154619863avart8.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `contactus`
--

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL,
  `time` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `date_am` varchar(300) CHARACTER SET utf8 NOT NULL,
  `date_en` varchar(300) CHARACTER SET utf8 NOT NULL,
  `date_ru` varchar(300) CHARACTER SET utf8 NOT NULL,
  `date_fr` varchar(300) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `address_am` varchar(300) CHARACTER SET utf8 NOT NULL,
  `address_en` varchar(300) CHARACTER SET utf8 NOT NULL,
  `address_ru` varchar(300) CHARACTER SET utf8 NOT NULL,
  `address_fr` varchar(300) CHARACTER SET utf8 NOT NULL,
  `email` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `lang_am` varchar(300) CHARACTER SET utf8 NOT NULL,
  `lang_en` varchar(300) CHARACTER SET utf8 NOT NULL,
  `lang_ru` varchar(300) CHARACTER SET utf8 NOT NULL,
  `lang_fr` varchar(300) CHARACTER SET utf8 NOT NULL,
  `facebook` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `instagram` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `linkedin` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `twitter` varchar(500) CHARACTER SET utf8 DEFAULT NULL,
  `lat` float DEFAULT NULL,
  `lot` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contactus`
--

INSERT INTO `contactus` (`id`, `time`, `date_am`, `date_en`, `date_ru`, `date_fr`, `phone`, `address_am`, `address_en`, `address_ru`, `address_fr`, `email`, `lang_am`, `lang_en`, `lang_ru`, `lang_fr`, `facebook`, `instagram`, `linkedin`, `twitter`, `lat`, `lot`) VALUES
(3, '10:00 - 24:00', 'test', 'test', 'test', 'test', '777777777', 'Xaxax don 1/83', 'Xaxax don 1/83', 'Xaxax don 1/83', 'Xaxax don 1/83', 'test@test1.am', 'Armenian, English, Russian', 'Armenian, English, Russian', 'Armenian, English, Russian', 'Armenian, English, Russian', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 'https://www.facebook.com/', 40.5551, 42.5511);

-- --------------------------------------------------------

--
-- Table structure for table `cv`
--

CREATE TABLE `cv` (
  `id` int(11) NOT NULL,
  `status` int(10) NOT NULL DEFAULT 0,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `surname` varchar(100) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(100) CHARACTER SET utf8 NOT NULL,
  `education` text CHARACTER SET utf8 NOT NULL,
  `experience` text CHARACTER SET utf8 NOT NULL,
  `img_url` varchar(100) CHARACTER SET utf8 NOT NULL,
  `img_name` text CHARACTER SET utf8 NOT NULL,
  `languages` text CHARACTER SET utf8 NOT NULL,
  `computer_skills` text CHARACTER SET utf8 NOT NULL,
  `email` varchar(300) CHARACTER SET utf8 NOT NULL,
  `info` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cv`
--

INSERT INTO `cv` (`id`, `status`, `name`, `surname`, `phone`, `education`, `experience`, `img_url`, `img_name`, `languages`, `computer_skills`, `email`, `info`) VALUES
(10, 1, 'Arman', 'Title', '77554444', 'newCv', 'newCv', 'http://localhost:3000/images/cv/1609147003345spider-mans.jpg', '1609147003345spider-mans.jpg', 'newCv', 'newCv', 'babajanyan.seyran@mail.ru', ''),
(11, 1, 'Arman', 'Title', '77554444', 'newCv', 'newCv', 'http://localhost:3000/images/cv/1609147390775', '1609147390775', 'newCv', 'newCv', 'babajanyan.seyran@mail.ru', ''),
(12, 1, 'Arman', 'Title', '77554444', 'aaa', 'aaaa', 'http://localhost:3000/images/cv/1609223856034', '1609223856034', 'aaa', 'aaa', 'babajanyan.seyran@mail.ru', 'aaaa');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `title_am` varchar(300) CHARACTER SET utf8 NOT NULL,
  `title_en` varchar(300) CHARACTER SET utf8 NOT NULL,
  `title_ru` varchar(300) CHARACTER SET utf8 NOT NULL,
  `title_fr` varchar(300) CHARACTER SET utf8 NOT NULL,
  `content_am` text CHARACTER SET utf8 NOT NULL,
  `content_en` text CHARACTER SET utf8 NOT NULL,
  `content_ru` text CHARACTER SET utf8 NOT NULL,
  `content_fr` text NOT NULL,
  `img_url` text CHARACTER SET utf8 NOT NULL,
  `img_name` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `title_am`, `title_en`, `title_ru`, `title_fr`, `content_am`, `content_en`, `content_ru`, `content_fr`, `img_url`, `img_name`) VALUES
(2, 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'test', 'http://localhost:3000/images/slider/avart8.jpg', 'avart8.jpg'),
(6, 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaa', 'http://localhost:3000/images/service/1607932299067avart8.jpg', '1607932299067avart8.jpg'),
(7, 'go', 'go', 'go', 'go', '<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry17711771s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', '<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry17711771s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', '<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry17711771s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', '<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry17711771s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', 'http://localhost:3000/images/service/1608898704983slider-img-1.jpg', '1608898704983slider-img-1.jpg'),
(8, 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'http://localhost:3000/images/service/1609225641840spider-mans-worst-nightmare-spider-man-venom-teeturtle-500x500.jpg', '1609225641840spider-mans-worst-nightmare-spider-man-venom-teeturtle-500x500.jpg'),
(9, 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'http://localhost:3000/images/service/1609225659073slider-img-1.jpg', '1609225659073slider-img-1.jpg'),
(10, 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'Title', 'http://localhost:3000/images/service/1609225674519spider-mans-worst-nightmare-spider-man-venom-teeturtle-500x500.jpg', '1609225674519spider-mans-worst-nightmare-spider-man-venom-teeturtle-500x500.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `slider`
--

CREATE TABLE `slider` (
  `id` int(11) NOT NULL,
  `title_am` varchar(300) CHARACTER SET utf8 NOT NULL,
  `title_en` varchar(300) CHARACTER SET utf8 NOT NULL,
  `title_ru` varchar(300) CHARACTER SET utf8 NOT NULL,
  `title_fr` varchar(300) CHARACTER SET utf8 NOT NULL,
  `img_url` varchar(300) CHARACTER SET utf8 NOT NULL,
  `img_name` varchar(300) CHARACTER SET utf8 NOT NULL,
  `service_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `slider`
--

INSERT INTO `slider` (`id`, `title_am`, `title_en`, `title_ru`, `title_fr`, `img_url`, `img_name`, `service_id`) VALUES
(12, 'Arman', 'test', 'test', 'test', 'http://localhost:3000/images/slider/avart8.jpg', 'avart8.jpg', 2),
(18, 'aaaaa', 'aaaaa', 'aaaaa', 'aaaa', 'http://localhost:3000/images/slider/1607932393600avart8.jpg', '1607932393600avart8.jpg', -1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name_am` varchar(100) CHARACTER SET utf8 NOT NULL,
  `name_en` varchar(100) CHARACTER SET utf8 NOT NULL,
  `name_ru` varchar(100) CHARACTER SET utf8 NOT NULL,
  `name_fr` varchar(100) CHARACTER SET utf8 NOT NULL,
  `surname_am` varchar(100) CHARACTER SET utf8 NOT NULL,
  `surname_en` varchar(100) CHARACTER SET utf8 NOT NULL,
  `surname_ru` varchar(100) CHARACTER SET utf8 NOT NULL,
  `surname_fr` varchar(100) CHARACTER SET utf8 NOT NULL,
  `facebook` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `instagram` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `linkedin` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `twitter` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `content_am` text CHARACTER SET utf8 NOT NULL,
  `content_en` text CHARACTER SET utf8 NOT NULL,
  `content_ru` text CHARACTER SET utf8 NOT NULL,
  `content_fr` text CHARACTER SET utf8 NOT NULL,
  `img_url` varchar(300) CHARACTER SET utf8 NOT NULL,
  `img_name` varchar(300) CHARACTER SET utf8 NOT NULL,
  `email` varchar(300) CHARACTER SET utf8 NOT NULL,
  `position_am` varchar(300) CHARACTER SET utf8 NOT NULL,
  `position_en` varchar(300) CHARACTER SET utf8 NOT NULL,
  `position_ru` varchar(300) CHARACTER SET utf8 NOT NULL,
  `position_fr` varchar(300) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name_am`, `name_en`, `name_ru`, `name_fr`, `surname_am`, `surname_en`, `surname_ru`, `surname_fr`, `facebook`, `instagram`, `linkedin`, `twitter`, `content_am`, `content_en`, `content_ru`, `content_fr`, `img_url`, `img_name`, `email`, `position_am`, `position_en`, `position_ru`, `position_fr`) VALUES
(6, 'Seyrans', 'Seyran', 'Seyran', 'Seyran', 'Babajanyan', 'Babajanyan', 'Babajanyan', 'Babajanyan', 'https://www.facebook.com/arman.babajanyan.9/', 'https://www.facebook.com/arman.babajanyan.9/', 'https://www.facebook.com/arman.babajanyan.9/', 'https://www.facebook.com/arman.babajanyan.9/', 'Arman', 'Arman', 'Arman', 'Arman', 'http://localhost:3000/images/user/1608888673857avart8.jpg', '1608888673857avart8.jpg', 'arman.babajanyan.fd@gmail.com', 'Iravaban', 'Iravaban', 'Iravaban', 'Iravaban'),
(7, 'Arman', 'Arman', 'Arman', 'Arman', 'Babajanyan', 'Babajanyan', 'Babajanyan', 'Babajanyan', 'https://www.facebook.com/arman.babajanyan.9/', 'https://www.facebook.com/arman.babajanyan.9/', 'https://www.facebook.com/arman.babajanyan.9/', 'https://www.facebook.com/arman.babajanyan.9/', 'Babajanyan', 'Babajanyan', 'Babajanyan', 'Babajanyan', 'http://localhost:3000/images/user/1608889686227avart8.jpg', '1608889686227avart8.jpg', 'arman.babajanyan.fd@gmail.com', 'Avag Iravaban', 'Avag Iravaban', 'Avag Iravaban', 'Avag Iravaban'),
(8, 'Karlen', 'Karlen', 'Karlen', 'Karlen', 'Karlenyan', 'Karlenyan', 'Karlenyan', 'Karlenyan', 'HR', 'HR', 'HR', 'HR', '<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry17711771s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', '<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry17711771s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', '<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry17711771s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', '<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&#160;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry17711771s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>', 'http://localhost:3000/images/user/1609222610859spider-mans-worst-nightmare-spider-man-venom-teeturtle-500x500.jpg', '1609222610859spider-mans-worst-nightmare-spider-man-venom-teeturtle-500x500.jpg', 'undefined@mm.ru', 'HR', 'HR', 'HR', 'HR'),
(9, 'twst', 'twst', 'twst', 'twst', 'twst', 'twst', 'v', 'twst', '', '', '', '', 'twst', 'twst', 'twst', 'twst', 'http://localhost:3000/images/user/1609223359684slider-img-1.jpg', '1609223359684slider-img-1.jpg', 'undefined', 'twst', 'twst', 'twst', 'twst'),
(10, 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', '', '', '', '', 'Arman', 'Arman', 'Arman', 'Arman', 'http://localhost:3000/images/user/1609223485427slider-img-1.jpg', '1609223485427slider-img-1.jpg', 'undefined', 'Arman', 'Arman', 'Arman', 'Arman'),
(11, 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman', 'http://localhost:3000/images/user/1609223568393avart8.jpg', '1609223568393avart8.jpg', 'Arman', 'Arman', 'Arman', 'Arman', 'Arman');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aboutus`
--
ALTER TABLE `aboutus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactus`
--
ALTER TABLE `contactus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cv`
--
ALTER TABLE `cv`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slider`
--
ALTER TABLE `slider`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aboutus`
--
ALTER TABLE `aboutus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contactus`
--
ALTER TABLE `contactus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cv`
--
ALTER TABLE `cv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `slider`
--
ALTER TABLE `slider`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
