//create a program that enables us to customize the number of squares in a grid
let img;

function preload (){
  img = loadImage('Assets/Graphic1.png');
}

function setup() {//runs once
 createCanvas (windowWidth, windowWidth); // creates a canvas 720x720 pixels
 background (173, 216, 230); background color
}

function draw() {//runs in a loop
fill ('turquoise'); //fills shape with RGB color
strokeWeight (1); //assigns stroke weight

var num = 5; //number of sides in the array
var sideLen = windowWidth/num; //side length variable


for (var y = 0; y < windowWidth; y = y + sideLen) {
  for (var x = 0; x < windowWidth; x = x + sideLen) {
image (img, x, y, windowWidth/num, windowWidth/num);
  }
}



}
