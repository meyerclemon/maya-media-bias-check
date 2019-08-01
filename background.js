var links = [...document.body.getElementsByTagName("a")];
var greens = [
  "abcnews.go.com",
  "afp.com",
  "aljazeera.com",
  "apnews.com",
  "bbc.com",
  "bloomberg.com",
  "cbsnews.com",
  "cnbc.com",
  "csmonitor.com",
  "c-span.org",
  "latimes.com",
  "pbs.org",
  "politico.com",
  "nbcnews.com",
  "npr.org",
  "thehill.com",
  "reuters.com",
  "www.ap.org",
  "www.apnews.com"
];
var greenYellows = [
  "axios.com",
  "buzzfeednews.com",
  "economist.com",
  "fivethirtyeight.com",
  "foreignpolicy.com",
  "fortune.com",
  "marketwatch.com",
  "newyorker.com",
  "nytimes.com",
  "propublica.org",
  "theatlantic.com",
  "theguardian.com",
  "thenation.com",
  "theskimm.com",
  "usatoday.com",
  "vox.com",
  "washingtonpost.com",
  "wsj.com",
  "www.ft.com"
];
var yellows = [
  "cnn.com",
  "democracynow.org",
  "msnbc.com",
  "nationalreview.com",
  "newrepublic.com",
  "shareblue.com",
  "slate.com",
  "talkingpointsmemo.com",
  "theadvocate.com",
  "thedailybeast.com",
  "theintercept.com",
  "vanityfair.com",
  "washingtonexaminer.com",
  "washingtonmonthly.com",
  "washingtontimes.com",
  "weeklystandard.com"
];
var oranges = ["huffpost.com", "motherjones.com"];
var orangeReds = [
  "alternet.org",
  "dailykos.com",
  "dailymail.co.uk",
  "foxnews.com",
  "guacamoley.com",
  "nypost.com",
  "pjmedia.com"   
];
var reds = [
  "bipartisanreport.com",
  "breitbart.com",
  "dailycaller.com",
  "dailywire.com",
  "davidwolfe.com",
  "forward.com",
  "infowars.com",
  "nationalenquirer.com",
  "occupydemocrats.com",
  "palmerreport.com",
  "patribotics.blog",
  "redstate.com",
  "theblaze.com",
  "thegatewaypundit.com",
  "twitchy.com",
  "westernjournal.com",
  "wnd.com",
  "wonkette.com",
  "worldtruth.tv"
];


for (var i = 0; i < links.length; i++) {
  if (!greens.some(green => links[i].href.includes(green))) {
    continue;
  }
  links[i].style["color"] = "green";
  links[i].style["font-weight"] = "bold";
}

for (var i = 0; i < links.length; i++) {
  if (!greenYellows.some(greenYellow => links[i].href.includes(greenYellow))) {
    continue;
  }
  links[i].style["color"] = "rgba(145,232,66,1)";
  links[i].style["font-weight"] = "bold";
}

for (var i = 0; i < links.length; i++) {
  if (!yellows.some(yellow => links[i].href.includes(yellow))) {
    continue;
  }
  links[i].style["color"] = "#CCCC00";
  links[i].style["font-weight"] = "bold";
}

for (var i = 0; i < links.length; i++) {
  if (!oranges.some(orange => links[i].href.includes(orange))) {
    continue;
  }
  links[i].style["color"] = "#e67300";
  links[i].style["font-weight"] = "bold";
}

for (var i = 0; i < links.length; i++) {
  if (!orangeReds.some(orangeRed => links[i].href.includes(orangeRed))) {
    continue;
  }
  links[i].style["color"] = "brown";
  links[i].style["font-weight"] = "bold";
}

for (var i = 0; i < links.length; i++) {
  if (!reds.some(red => links[i].href.includes(red))) {
    continue;
  }
  links[i].style["color"] = "red";
  links[i].style["font-weight"] = "bold";
}



