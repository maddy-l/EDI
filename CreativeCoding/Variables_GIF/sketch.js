//create a program that enables us to customize the number of squares in a grid
let img;


function preload (){
  img = loadImage('Assets/Graphic.png');
}

function setup() {//runs once
 createCanvas (windowWidth, windowWidth); // creates a canvas 720x720 pixels
}

function draw() {//runs in a loop
  background (255, 255, 0); //background color
fill ('turquoise'); //fills shape with RGB color
strokeWeight (1); //assigns stroke weight

var num = 2; //number of sides in the array
var sideLen = windowWidth/num; //side length variable

translate (-100,-100);// translation creates a bleed effect

for (var y = 0; y < 2 * windowWidth; y = y + sideLen) {
  for (var x = 0; x < 2 * windowWidth; x = x + sideLen) {
image (img, x, y, windowWidth/num, windowWidth/num);
  }
}



}
function windowResized (){
  resizeCanvas (windowWidth, windowHeight);
}
