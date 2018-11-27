/*
Final Project Presentation Slides
*/

var slide = 0;

function preload() {
    stars = loadImage("stars.jpg");
}

function setup() {
    createCanvas(800, 600);
    textSize(20)
    textFont('Verdana');
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}
 function draw() {
    background(192);
    
    if (slide == 0) {
        textSize(60);
        fill(8, 27, 79);
        text("Dawn J", 400, 190);
        text("Shooting Stars", width/2, height/2);
    } else if (slide == 1) {
        textSize(50);
        fill(8, 27, 79)
        text("Potentiometer Sensor", 400, 150);
        // Potentiometer sensor
        fill(212, 175, 55);
        rect(262, 370, 40, 15, 5);
        rect(262, 400, 40, 15, 5);
        rect(262, 430, 40, 15, 5);
        rect(450, 400, 160, 60, 15);
        fill(50, 50, 50);
        ellipse(370, 400, 200, 200);
        stroke(2);
        ellipse(370, 400, 100, 100);
        
        
    } else if (slide == 2) {
        image(stars, 1, 1);
        textSize(33);
        fill(8, 27, 79);
        text("Theme: sky stars-war", 605, 200);
        // Bullets launcher
        rect(670, 580, 30, 30);
        fill(255, 0, 0);
        noStroke();
        ellipse(640, 555, 15, 15);
        ellipse(570, 510, 14, 14);
        ellipse(490, 460, 13, 13);
        ellipse(420, 410, 12, 12);
        ellipse(320, 360, 11, 11);
    } 
}
 function mousePressed() {
    if (mouseX > width/2) {
        if (slide < 3) {
            slide++;
        }
    } else {
        if (slide > 0) {
            slide--;
        }
    }
}
  
