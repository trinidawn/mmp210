/*
Meme 
v 2
by Dawn Joseph
10.11.2018
Animation 
MMMP 210 Week 6
*/

let img 
let img2
//function preload(){


function setup() {
    createCanvas(800, 600);
    img = loadImage('mrbounce.jpg');
    img2 = loadImage('smilefaces.jpeg');
}

// variables for text animation
var tumble = -200;
var read = 950;
var book = -200;
var club = 950;

// variables for image animation
var xv = 50;
var yv = -170;

function draw() {
background(189, 189, 189);
    //rectMode(CENTER);
    
     

    //Text and color
    //fill(255, 5, 80);
    ram(400);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont("Papyrus");
    text("Tumble", tumble, height/1.9);
    tumble += 5;
    if(tumble >= 216){
        tumble = 216;
    }
    
    //Text and color
    fill(5, 80, 255);
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont("Papyrus");
    text("Read", read, height/1.9);
    //text(width/1.7, 400,50); //finding the value of x
    read -= 5;
    if (read <= 471){
        read = 471;
    }
    
    //Text and color
    fill(0, 181, 26);
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont("Papyrus");
    text("Book", book, height/1.5);
    //text(width/2, 400,50);
    book += 7;
    if (book >= 400){
        book = 400;
    }
    
    //Text and color
    fill(128, 0, 255);
    textAlign(CENTER, CENTER);
    textSize(90);
    textFont("Papyrus");
    text("Club", club, height/1.5);
    //text(width/1.3, 400,50);
    club -= 5;
    if (club <= 615){
        club = 615;
    }
    
    noFill();
    stroke('#401E1F');
    strokeWeight(2);
    arc(71, 260, 200, 200, PI + QUARTER_PI, TWO_PI);
    arc(281, 260, 220, 220, PI, TWO_PI);
    arc(501, 260, 220, 220, PI, TWO_PI);
    
    
    //image(img, 585, 170, img.width/3, img.height/3);
    image(img, xv, yv, img.width/3, img.height/3);
    xv += 8;
    yv += 5;
    if(xv >= 585 || yv >= 170){
        xv = 585;
        yv = 170;
    }
    //image(img2, 50, 542, img2.width/2, img.height/8);
     
}

// Color animation
function ram(x){
   r = random(0, x); 
   fill(r, 5, 80);
}





