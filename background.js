var links = [...document.body.getElementsByTagName("a")];
var greens = ["nytimes.com", "washingtonpost.com", "politico.com"];
var yellows = ["usatoday.com", "cnn.com"];
var reds = ["foxnews.com"];

for (var i = 0; i < links.length; i++) {
    if (!greens.some(green => links[i].href.includes(green))) {
      continue;
    }
    links[i].style["color"] = "green";
  }

  for (var i = 0; i < links.length; i++) {
    if (!yellows.some(yellow => links[i].href.includes(yellow))) {
      continue;
    }
    links[i].style["color"] = "#CCCC00";
  }

  for (var i = 0; i < links.length; i++) {
    if (!reds.some(red => links[i].href.includes(red))) {
      continue;
    }
    links[i].style["color"] = "red";
  }

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
