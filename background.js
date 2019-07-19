
var elementsInsideBody = [...document.body.getElementsByTagName('*')];

let links = document.getElementsByTagName('a');
for (elt of links) {
elt.style['color'] = '#FF00FF';
}
console.log(links);