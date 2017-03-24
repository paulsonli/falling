/*global $*/
$(document).ready(function (){
var RNGspawn = Math.floor((Math.random() * 1600) + 1);
$("#pic").css("left", RNGspawn);
console.log(RNGspawn);


    
var interval = setInterval(function () {
    var picTop = $("#pic").offset().top;
    var picBottom = picTop + $("#pic").height();
    var groundTop = $("#ground").offset().top;
    var groundBottom = groundTop + $("#ground").height();
    if (picBottom > groundTop) {
        clearInterval(interval);
    }
    $("#pic").css("top", $("#pic").offset().top + 10);
}, 50);
    
    
    
});