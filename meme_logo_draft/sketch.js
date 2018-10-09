/*
Meme 
v 0
by Dawn Joseph
10.2.2018
rough draft
MMMP 210 week 5
*/
var dog1; // global
var dog2;

function preload() {
    dog1 = loadImage("dog1.jpg");
    dog2 = loadImage("dog2.jpg");
}

function setup() {
    createCanvas(800, 800);
}

function draw() {
    background(0);
    
    image(dog1, 0, 0, width/2, height);
    image(dog2, width/2, 0, width/2, height);
    
    fill(10, 63, 247);
    textAlign(LEFT);
    textSize(31);
    textFont("Arial Rounded MT Bold");
    text("Day Before 2016 Election!", width/78, height/20);
    stroke('black')
    strokeWeight(3);
    
    fill(255, 0, 0);
    textAlign(RIGHT);
    textSize(31);
    textFont("Arial Rounded MT Bold");
    text("Day After 2016 Election!", width/1, height/20);
    stroke('white')
    strokeWeight(3);
}

