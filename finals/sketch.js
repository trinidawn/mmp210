/*
    Finals 
*/
//var serial;
//var portName = "/dev/cu.usbmodem1411";
//var sensorValue;
var img;

//sky


//player


//star


//bullets
var bullets;




function setup() {
    img = loadImage("sky.png");
     createCanvas(800, 800);
    
    
}

function draw() {
    background(0);
    
    
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  star(0, 0, 30, 70, 5); 
  pop();
    
    
  
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
}

