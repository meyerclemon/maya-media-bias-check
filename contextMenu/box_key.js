
//
if ((x >= -18 && x < 18) 
&& (y >= 45 && y <= 64)) {
    return "Green Rectangle: News";
}

if((x > -24 && x < 24) 
&& (y >= 21 && y <= 53)){
    return "Yellow Rectangle: Fair interpretations of the news";
}

if((x >= -42 && x <= -24) 
&& (y >= 24 && y < 52) 
|| (x <= 42 && x >= 24) 
&& (y >= 24 && y < 52) 
||  (y >= 16 && y < 24 )) {
    return "Orange Rectangle: Unfair interpretations of the news";
}

if(y <= 20) {
    return "Red Rectangle: Nonsense damaging to public discourse";
}


/*
var sources = require(contentMenu/sources.json);
if ((sources[3]).includes onclick link)
return [0],[1],[2]
*/