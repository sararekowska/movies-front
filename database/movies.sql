-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 12 Lis 2021, 23:26
-- Wersja serwera: 10.4.13-MariaDB
-- Wersja PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `filmy`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `filmy`
--

CREATE TABLE `filmy` (
  `id` int(11) NOT NULL,
  `tytul` varchar(40) NOT NULL,
  `rok` varchar(4) NOT NULL,
  `rezyser` varchar(40) NOT NULL,
  `gatunek` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `filmy`
--

INSERT INTO `filmy` (`id`, `tytul`, `rok`, `rezyser`, `gatunek`) VALUES
(1, 'Hercules', '1997', 'Ron Clements', 'Animation'),
(2, 'Donnie Darko', '2001', 'Richard Kelly', 'Thriller'),
(3, 'We Need to Talk About Kevin', '2011', 'Lynne Ramsay', 'Drama'),
(4, 'Scott Pilgrim vs. the World', '2010', 'Edgar Wright', 'Comedy'),
(5, 'Brokeback Mountain', '2005', 'Ang Lee', 'Drama'),
(6, 'Nightcrawler', '2014', 'Dan Gilroy', 'Thriller'),
(7, 'Midsommar', '2019', 'Ari Aster', 'Horror'),
(8, 'The Truman Show', '1998', 'Dan Gilroy', 'Drama'),
(9, 'Eternal Sunshine of the Spotless Mind', '2004', 'Michel Gondry', 'Drama'),
(10, 'The Lighthouse', '2019', 'Robert Eggers', 'Horror'),
(11, 'Marriage Story', '2019', 'Noah Baumbach', 'Drama'),
(12, 'Sorry to Bother You', '2018', 'Boots Riley', 'Comedy'),
(13, 'But I\'m a Cheerleader', '1999', 'Jamie Babbit', 'Comedy'),
(14, 'The Mask', '1994', 'Chuck Russel', 'Comedy'),
(15, 'Corpse Bride', '2015', 'Tim Burton', 'Animation'),
(16, 'Greener Grass', '2019', 'Jocelyn DeBoer', 'Comedy'),
(17, 'Coco', '2017', 'Lee Unkrich', 'Animation'),
(18, 'Human Traffic', '1999', 'Justin Kerrigan', 'Comedy'),
(19, 'Moonrise Kingdom', '2012', 'Wes Anderson', 'Drama'),
(20, 'Thirteen', '2003', 'Catherine Hardwicke', 'Drama'),
(21, 'Luca', '2021', 'Enrico Casarosa', 'Animation'),
(22, 'Another Round', '2020', 'Thomas Vinterberg', 'Drama'),
(23, 'Porco Rosso', '1992', 'Hayao Miyazaki', 'Animation'),
(24, 'American Beauty', '1999', 'Sam Mendes', 'Drama');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `filmy`
--
ALTER TABLE `filmy`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `filmy`
--
ALTER TABLE `filmy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
