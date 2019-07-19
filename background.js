

// var elementsInsideBody = [...document.body.getElementsByTagName('*')];

var source = document.getElementsByTagName('html')[0].innerHTML;
var nytimes = source.search("nytimes.com");

// foreach(nytimes in source) {
// nytimes.style['color'] = '#03fc24';
// }

console.log(nytimes);