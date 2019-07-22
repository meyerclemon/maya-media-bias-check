$(document).ready(function(){
    $("#criteria").submit(function(event){

if ((x > -18 && x < 18) && (y >= 45 && y <= 64)) {
    return green;
}

if((x > -24 && x < -24) && (y >= 21 && y <= 52)){
    return yellow;
}

if((x >= -42 && x <= 24) && (y > 24 && y < 52) || (x <= 42 && x >= -24) && (y > 24 && y < 52) ||  (y > 16 && y < 24 )) {
    return orange;
}

if(y <= 20) {
    return red;
}

$("#match").text(match);
$(".result").show();

event.preventDefault();
});
});