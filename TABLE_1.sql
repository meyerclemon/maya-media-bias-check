-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 22, 2019 at 10:46 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mediaBias`
--

-- --------------------------------------------------------

--
-- Table structure for table `TABLE 1`
--

CREATE TABLE `TABLE 1` (
  `News Source` varchar(25) DEFAULT NULL,
  `Vertical Rank` int(3) DEFAULT NULL,
  `Horizontal Rank` int(3) DEFAULT NULL,
  ` URL` varchar(28) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `TABLE 1`
--

INSERT INTO `TABLE 1` (`News Source`, `Vertical Rank`, `Horizontal Rank`, ` URL`) VALUES
('The New Yorker', 47, -9, ' /newyorker.com'),
('Reason', 42, 18, ' /reason.com'),
('Time', 43, -1, ' /time.com'),
('ABC', 57, 0, ' abcnews.com'),
('AFP', 62, 0, ' afp.com'),
('Al Jazeera US/Canada News', 54, -1, ' aljazeera.com'),
('Alternet', 18, -23, ' alternet.org'),
('Axios', 52, -2, ' axios.com'),
('BBC', 54, -3, ' bbc.com'),
('Bipartisan Report', 13, -27, ' bipartisanreport.com'),
('Bloomberg', 58, 4, ' bloomberg.com'),
('Breitbart', 8, 34, ' breitbart.com'),
('Business Insider', 39, 0, ' businessinsider.com'),
('BuzzFeed News', 51, -15, ' buzzfeednews.com'),
('CSPAN', 59, 0, ' c-span.org'),
('CBS', 57, 4, ' cbsnews.com'),
('CNN', 32, -6, ' cnn.com'),
('Christian Science Monitor', 54, 6, ' csmonitor.com'),
('Daily Caller', 12, 24, ' dailycaller.com'),
('Daily Kos', 20, -24, ' dailykos.com'),
('Daily Mail', 19, 13, ' dailymail.co.uk'),
('Daily Signal', 30, -15, ' dailysignal.com'),
('Daily Wire', 16, 28, ' dailywire.com'),
('David Wolfe', 2, -32, ' davidwolfe.com'),
('Democracy Now', 48, -19, ' democracynow.org'),
('Drudge Report', 38, 16, ' drudgereport.com'),
('The Economist', 48, 4, ' economist.com'),
('Forbes', 44, 3, ' forbes.com'),
('Foreign Policy', 45, 9, ' foreignpolicy.com'),
('Fortune', 46, 5, ' fortune.com'),
('Forward Progressives', 15, -25, ' forward.com'),
('Fox', 20, 27, ' foxnews.com'),
('Washington Free Beacon', 41, 24, ' freebeacon.com'),
('FreeSpeech TV', 37, -25, ' freespeech.org'),
('Guacamoley', 17, -20, ' guacamoley.com'),
('Huffington Post', 24, -20, ' huffpost.com'),
('IJR', 41, 2, ' ijr.com'),
('InfoWars', 1, 44, ' infowars.com'),
('Jacobin', 47, -28, ' jacobinmag.com'),
('LA Times', 58, -6, ' latimes.com'),
('Marketwatch', 50, 5, ' marketwatch.com'),
('Mother Jones', 40, -24, ' motherjones.com'),
('MSNBC', 34, -19, ' msnbc.com'),
('National Enquirer', 6, 10, ' nationalenquirer.com'),
('National Review', 51, 20, ' nationalreview.com'),
('NBC', 57, -3, ' nbcnews.com'),
('New Republic', 46, -19, ' newrepublic.com'),
('News and Guts', 31, -15, ' newsandguts.com'),
('NewsMax', 43, -28, ' newsmax.com'),
('NPR', 56, -5, ' npr.org'),
('New York Post', 20, 18, ' nypost.com'),
('New York Times', 52, -5, ' nytimes.com'),
('OAN', 23, 28, ' oann.com'),
('Occupy Democrats', 9, -30, ' occupydemocrats.com'),
('Palmer Report', 8, -34, ' palmerreport.com'),
('Patribotics', 1, -40, ' patribotics.blog'),
('PBS', 57, -5, ' pbs.org'),
('PJ Media', 17, 26, ' pjmedia.com'),
('Politico', 55, -3, ' politico.com'),
('ProPublica', 46, -5, ' propublica.org'),
('Quartz', 44, -5, ' qz.com'),
('RedState', 11, 29, ' redstate.com'),
('Reuters', 62, 0, ' reuters.com'),
('Second Nexus', 23, -23, ' secondnexus.com'),
('ShareBlue', 33, -21, ' shareblue.com'),
('Slate', 43, -20, ' slate.com'),
('Talking Points Memo', 41, -13, ' talkingpointsmemo.com'),
('The Advocate', 40, -23, ' theadvocate.com'),
('The American Conservative', 33, 28, ' theamericanconservative.com'),
('The Atlantic', 46, -15, ' theatlantic.com'),
('The Blaze', 8, 27, ' theblaze.com'),
('Daily Beast', 41, -21, ' thedailybeast.com'),
('The Federalist', 26, 27, ' thefederalist.com'),
('Fiscal Times', 39, 12, ' thefiscaltimes.com'),
('The Gateway Pundit', 12, 35, ' thegatewaypundit.com'),
('The Guardian', 48, -6, ' theguardian.com'),
('The Hill', 54, 9, ' thehill.com'),
('Intercept', 49, -23, ' theintercept.com'),
('The Nation', 47, -17, ' thenation.com'),
('The Skimm', 49, -2, ' theskimm.com'),
('The Week', 44, -10, ' theweek.com'),
('Think Progress', 42, -13, ' thinkprogress.org'),
('Truthout', 36, -24, ' truthout.org'),
('Twitchy', 14, 29, ' twitchy.com'),
('The Young Turks', 27, -24, ' tyt.com'),
('USA Today', 52, 0, ' usatoday.com'),
('Vanity Fair', 38, -12, ' vanityfair.com'),
('Vice', 42, -10, ' vice.com'),
('Vox', 43, -16, ' vox.com'),
('Washington Examiner', 35, 18, ' washingtonexaminer.com'),
('Washington Monthly', 30, -23, ' washingtonmonthly.com'),
('Washington Post', 51, -10, ' washingtonpost.com'),
('Washington Times', 33, 20, ' washingtontimes.com'),
('The Weekly Standard', 46, 18, ' weeklystandard.com'),
('Conservative Tribune', 12, 35, ' westernjournal.com'),
('WND', 4, 36, ' wnd.com'),
('Wonkette', 12, -34, ' wonkette.com'),
('WorldTruth.Tv', 1, 20, ' worldtruth.tv'),
('Wall Street Journal', 53, 11, ' wsj.com'),
('AP', 62, 0, ' www.ap.org'),
('APNews', 62, 0, ' www.apnews.com'),
('Financial Times', 48, 3, ' www.ft.com'),
('Mic', 39, -18, ' www.mic.com'),
('OZY', 43, 0, ' www.ozy.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `TABLE 1`
--
ALTER TABLE `TABLE 1`
  ADD PRIMARY KEY (` URL`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
