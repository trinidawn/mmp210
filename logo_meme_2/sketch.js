/*
Meme 
v 2
by Dawn Joseph
10.11.2018
Animation 
MMMP 210 Week 6
*/

let img 
//function preload(){



//  img = loadImage('mr1.jpg');
//}
/*function setup() {
  image(img, 0, 0);
}*/

function setup() {
    createCanvas(800, 600);
    img = loadImage('mrbounce.jpg');
       
}

var xt = 1100;

function draw() {
    background(189, 189, 189);
    rectMode(CENTER);
    //rect(0, 0, 400, 400);
    
    //Text box tumble read
    //rect(80, 285, 1000, 120);
    
    //Text box book club
    //rect(230, 395, 1000, 140);
    
    //image(img,0, 0);
     image(img,585, 170, img.width/3, img.height/3);
     

    //Text and color
    fill(255, 5, 80);
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont("Papyrus");
    text("Tumble", width/3.7, height/1.9);
    
    
    fill(5, 80, 255);
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont("Papyrus");
    text("Read", width/1.7, height/1.9);
    
    
    fill(0, 181, 26);
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont("Papyrus");
    text("Book", width/2, height/1.5);
    
    fill(128, 0, 255);
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont("Papyrus");
    text("Club", width/1.3, height/1.5);
    
    noFill();
    //arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
    arc(71, 260, 200, 200, PI + QUARTER_PI, TWO_PI);
    //arc(300, 300, 220, 220, 1, PI + QUARTER_PI, OPEN);
    arc(281, 260, 220, 220, PI, TWO_PI);
    arc(501, 260, 220, 220, PI, TWO_PI);
}

function ram(x){
   r = random(0, x); 
   fill(r, 0, 0);
}



