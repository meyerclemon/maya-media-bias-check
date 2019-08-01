

/* RegEx version of background.js

for (var i = 0; i < links.length; i++) {
    const href = links[i].href;
    const re = /(bbc.com|thehill.com|csmonitor.com|politico.com|npr.org|pbs.org)/g
    if (!re.test(href)) {
      continue;
    }
  links[i].style.color = "green";
}

for (var i = 0; i < links.length; i++) {
  const href = links[i].href;
  const re = /(nytimes.com|washingtonpost.com)/g
  if (!re.test(href)) {
    continue;
  }
links[i].style.color = "rgba(145,232,66,1)";
}

for (var i = 0; i < links.length; i++) {
    const href = links[i].href;
    const re = /(usatoday.com)/g
    if (!re.test(href)) {
      continue;
    }
  links[i].style.color = "#CCCC00";
}

for (var i = 0; i < links.length; i++) {
    const href = links[i].href;
    const re = /(foxnews.com)/g
    if (!re.test(href)) {
      continue;
    }
  links[i].style.color = "red";
}
*/