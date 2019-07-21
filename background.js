var links = [...document.body.getElementsByTagName("a")];
for (var i = 0; i < links.length; i++) {
  if (links[i]["href"].indexOf("www.nytimes.com") == -1) {
    continue;
  }
  links[i].style["color"] = "green";
}
