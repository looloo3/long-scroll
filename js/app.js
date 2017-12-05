$(document).foundation()

var canvas = document.getElementById("canvas");
var counter = document.getElementById("counter");
var icon = document.getElementById("icon");

window.onscroll = function(){


  var x = window.pageXOffset;

  console.log(x);

  counter.style.left = 400 + x * .97 + "px";

  counter.innerHTML = x + "px";

  if (x > 2000) {
    counter.style.backgroundColor = "green";
  }else{
    counter.style.backgroundColor = "blue";}



    /*sun2.style.left = 200 + x  + "px";

  if(x > 1000){

      icon.src="mercury.jpg";

  }else{

  icon.src="sun.png";
}*/

};
