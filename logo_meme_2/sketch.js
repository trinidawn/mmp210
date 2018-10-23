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


function setup() {
    createCanvas(800, 600);
    img = loadImage('mrbounce.jpg');     
}

var tumble = -200;
var read = 950;
var book = -200;
var club = 950;

function draw() {
background(189, 189, 189);
    //rectMode(CENTER);
    

    //rect(0, 0, 100, 100);
    //rect(0, 0, 400, 400);
    
    //Text box tumble read
    //rect(80, 285, 1000, 120);
    
    //Text box book club
    //rect(230, 395, 1000, 140);
    
    //image(img,0, 0);
     image(img,585, 170, img.width/3, img.height/3);
    /*translate(width/2, height/2);
	let img = frameCount / 1000 * PI;
	rotate(r);*/
     

    //Text and color
    fill(255, 5, 80);
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
    book += 5;
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
    arc(71, 260, 200, 200, PI + QUARTER_PI, TWO_PI);
    arc(281, 260, 220, 220, PI, TWO_PI);
    arc(501, 260, 220, 220, PI, TWO_PI);
}





