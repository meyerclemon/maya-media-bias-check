var links = [...document.body.getElementsByTagName("a")];
var green = ["nytimes.com"];
var red = ["foxnews.com"]

for (var i = 0; i < links.length; i++) {
  if (links[i]["href"].indexOf(green) == -1) {
    continue;
  }
  links[i].style["color"] = "green";
}

for (var i = 0; i < links.length; i++) {
  if (links[i]["href"].indexOf(red) == -1) {
    continue;
  }
  links[i].style["color"] = "red";
}
