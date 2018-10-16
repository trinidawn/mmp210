/*
Meme 
v 1
by Dawn Joseph
10.11.2018
Interactive meme
MMMP 210 Week 6
*/
var mr1; // global
var mr2;
var mr3;
var mr4;

function preload() {
    mr1 = loadImage("mr1.jpg");
    mr2 = loadImage("mr2.jpg");
    mr3 = loadImage("mr3.jpg");
    mr4 = loadImage("mr4.jpg");
}

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(91, 96, 115);
    
    /* draw quandrant lines */
	strokeWeight(2);
	stroke("white");
    
	line(width/2, 0, width/2, height);
	line(0, height/2, width, height/2);

	fill("white");
    noStroke();

	/* for each quandrant, determine of mouse 
		is inside bounds */	
	if (mouseX > width/2 && mouseY > height/2) {
		image(mr1, width/2, height/2, width, height);
	} else if (mouseX < width/2 && mouseY > height/2) {
		image(mr2, 0, height/2, width/2, height);
	} else if (mouseX > width/2 && mouseY < height/2) {
		image(mr3, width/2, 0, width, height/2);
	} else {
		image(mr4, 0, 0, width/2, height/2);
	}
    
    
    fill(255, 0, 0);
    textAlign(LEFT);
    textSize(31);
    textFont("Arial Rounded MT Bold");
    text("Mr. Liar liar pants on fire!", width/78, height/2);
    stroke('black')
    strokeWeight(3);
    
    fill(255, 0, 0);
    textAlign(RIGHT);
    textSize(31);
    textFont("Arial Rounded MT Bold");
    text("Mr. My way McConnell!", width/1, height/2);
    stroke('black')
    strokeWeight(3);
    
    fill(255, 0, 0);
    textAlign(LEFT);
    textSize(31);
    textFont("Arial Rounded MT Bold");
    text("Mr Rude Giuliani!", width/78, height/1);
    stroke('black')
    strokeWeight(3);
    
    fill(255, 0, 0);
    textAlign(RIGHT);
    textSize(31);
    textFont("Arial Rounded MT Bold");
    text("Ms. Press Huck-a-bee!", width/1, height/1);
    stroke('black')
    strokeWeight(3);
    

}

