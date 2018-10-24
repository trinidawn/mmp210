/*
Meme 
v 2
by Dawn Joseph
10.11.2018
Animation 
MMMP 210 Week 6
*/

//image variable
let img
let img2
let img3
let img4
let img5

function setup() {
    createCanvas(800, 600);
    img = loadImage('mrbounce.jpg');
    img2 = loadImage('missstubborn.jpg');
    img3 = loadImage('mrworry.jpg')
    img4 = loadImage('missgiggles.jpg');
    img5 = loadImage('missmagic.jpg');
}

// variables for text animation
var tumble = -200;
var read = 950;
var book = -200;
var club = 950;

// variables for image animation img
var xv = 40;
var yv = -160;

// variables for image animation img2
var xv2 = 50;
var yv2 = -180;

// variables for image animation img3
var xv3 = 60;
var yv3 = -180;

// variables for image animation img4
var xv4 = 80;
var yv4 = -180;

// variables for image animation img5
var xv5 = 100;
var yv5 = -180;

function draw() {
background(189, 189, 189);
    
    //Text and color
    //fill(255, 5, 80);
    ram(255, 0, 0);
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
    read -= 6;
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
    book += 8;
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
    
    //Arc stroke
    noFill();
    stroke('#401E1F');
    strokeWeight(2);
    arc(71, 260, 200, 200, PI + QUARTER_PI, TWO_PI);
    arc(281, 260, 220, 220, PI, TWO_PI);
    arc(501, 260, 220, 270, PI, TWO_PI);
    
    //image animation
    //image(img2, 585, 170, img.width/3, img.height/3);
    image(img2, xv2, yv2, img.width/3, img.height/3);
    xv2 += 8;
    yv2 += 20;
    if(xv2 >= 585 || yv2 >= 170){
        xv2 = 585;
        yv2 = 170;
    } 
    
    //image animation
    //image(img3, 585, 170, img.width/3, img.height/3);
    image(img3, xv3, yv3, img.width/3, img.height/3);
    xv3 += 8;
    yv3 += 16;
    if(xv3 >= 585 || yv3 >= 170){
        xv3 = 585;
        yv3 = 170;
    } 
    
    //image animation
    //image(img4, 585, 170, img.width/3, img.height/3);
    image(img4, xv4, yv4, img.width/3, img.height/3);
    xv4 += 8;
    yv4 += 12;
    if(xv4 >= 585 || yv4 >= 170){
        xv4 = 585;
        yv4 = 170;
    } 
    
    //image animation
    //image(img5, 585, 170, img.width/3, img.height/3);
    image(img5, xv5, yv5, img.width/3, img.height/3);
    xv5 += 8;
    yv5 += 6;
    if(xv5 >= 585 || yv5 >= 170){
        xv5 = 585;
        yv5 = 170;
    } 
    
    //image animation
    //image(img, 585, 170, img.width/3, img.height/3);
    image(img, xv, yv, img.width/3, img.height/3);
    xv += 8;
    yv += 2;
    if(xv >= 585 || yv >= 170){
        xv = 585;
        yv = 170;
    } 
    
    
}
    // Color animation
    function ram(x){
    r = random(0, x); 
    fill(r, 5, 80);
   }





