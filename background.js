var links = [...document.body.getElementsByTagName("a")];
var greens = ["bbc.com","thehill.com","csmonitor.com","politico.com","npr.org","pbs.org"];
var greenYellows = ["nytimes.com", "washingtonpost.com", "axios.com", "newyorker.com", "wsj.com"];
var yellows = ["usatoday.com", "cnn.com", "vanityfair.com"];
var oranges = ["dailykos.com"];
var orangeReds = ["alternet.org", "dailymail.co.uk", ];
var reds = ["foxnews.com", "breitbart.com"];

for (var i = 0; i < links.length; i++) {
    if (!greens.some(green => links[i].href.includes(green))) {
      continue;
    }
    links[i].style["color"] = "green";
  }

  for (var i = 0; i < links.length; i++) {
    if (!greenYellows.some(greenYellow => links[i].href.includes(greenYellow))) {
      continue;
    }
    links[i].style["color"] = "rgba(145,232,66,1)";
  }

  for (var i = 0; i < links.length; i++) {
    if (!yellows.some(yellow => links[i].href.includes(yellow))) {
      continue;
    }
    links[i].style["color"] = "#CCCC00";
  }

  for (var i = 0; i < links.length; i++) {
    if (!oranges.some(orange => links[i].href.includes(orange))) {
      continue;
    }
    links[i].style["color"] = "#e67300";
  }

  for (var i = 0; i < links.length; i++) {
    if (!orangeReds.some(orangeRed => links[i].href.includes(orangeRed))) {
      continue;
    }
    links[i].style["color"] = "#FF4500";
  }


  for (var i = 0; i < links.length; i++) {
    if (!reds.some(red => links[i].href.includes(red))) {
      continue;
    }
    links[i].style["color"] = "#8b0000";
  }

// for (var i = 0; i < links.length; i++) {
//     const href = links[i].href;
//     const re = /(bbc.com|thehill.com|csmonitor.com|politico.com|npr.org|pbs.org)/g
//     if (!re.test(href)) {
//       continue;
//     }
//   links[i].style.color = "green";
// }

// for (var i = 0; i < links.length; i++) {
//   const href = links[i].href;
//   const re = /(nytimes.com|washingtonpost.com)/g
//   if (!re.test(href)) {
//     continue;
//   }
// links[i].style.color = "rgba(145,232,66,1)";
// }


// for (var i = 0; i < links.length; i++) {
//     const href = links[i].href;
//     const re = /(usatoday.com)/g
//     if (!re.test(href)) {
//       continue;
//     }
//   links[i].style.color = "#CCCC00";
// }

// for (var i = 0; i < links.length; i++) {
//     const href = links[i].href;
//     const re = /(foxnews.com)/g
//     if (!re.test(href)) {
//       continue;
//     }
//   links[i].style.color = "red";
// }
