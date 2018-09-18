/*
Self Portait
v 1
by Dawn Joseph
MMP 210 example week 2
Variables example
*/


function setup() {
	createCanvas(700, 860);
}

function draw() {
	background(143, 188, 139);
    ellipseMode(CENTER);
    rectMode(CENTER);
    
    //Variables head
    var headX = 220;
    var headY = 220; 
    var headWidth = 220;
    var headHeight = 280;
    var headColor = 'DARKGOLDENROD';
    
    //Variables eyes
    var eyeStroke = 'black';
    var eyeW = 4;
    
    var lineX1 = 217;
    var lineY1 = 180;
    var lineX2 = 230;
    var lineY2 = 180;
    
    var lineX01 = 116;
    var lineY01 = 180;
    var lineX02 = 135;
    var lineY02 = 180;
     
    var lineX001 = 312;
    var lineY001 = 180;
    var lineX002 = 325;
    var lineY002 = 180;
    
    var eyeRightX = 175;
    var eyeRightY = 180;
    var eyeRightWidth = 80;
    var eyeRightHeight = 40;
    
    var eyeLeftXX = 270;
    var eyeLeftY = 180;
    var eyeLeftWidth = 80;
    var eyeLeftHeight = 40;
    
    //Variables hat
    var hatStroke = 'black';
    var hatW = 10;
    var hatColor = 'black';
    
    var hatX = 220;
    var hatY = 90;
    var hatWidth = 180;
    var hatHeight = 80;
    
    var hatLineX = 70;
    var hatLineY = 130;
    var hatLineW = 135;
    var hatLineH = 130;
    
    var hatLine0X = 305;
    var hatLineY = 130;
    var hatLine0W = 370;
    var hatLineH = 130;
    
    //Variables nose
    var noseStroke = 'black';
    var noseW = 2;
    
    var noseX = 220;
    var noseY = 215; 
    var noseWidth = 17;
    var noseHeight = 25;
    var noseA = 25;
    
    //Variables mouth
    var mouthColor = 'SADDLEBROWN';
    var mouthW = 1;
    var mouthC = 'DARKGOLDENROD';
    
    var mouthX = 225;
    var mouthY = 275; 
    var mouthWidth = 100;
    var mouthHeight = 15;
    var mouthA = 15;
    
    //head
    fill(headColor);
    noStroke();
    ellipse(headX, headY, headWidth, headHeight);
    
    //eyes
    noFill();
    stroke(eyeStroke);
    strokeWeight(eyeW);
    line(lineX1, lineY1, lineX2, lineY2);
    line(lineX01, lineY01, lineX02, lineY02);
    line(lineX001, lineY001, lineX002, lineY002);
    ellipse(eyeRightX, eyeRightY, eyeRightWidth, eyeRightHeight);//right
    ellipse(eyeLeftXX, eyeRightY, eyeRightWidth, eyeRightHeight);//left
    
    //hat
    stroke(hatStroke);
    strokeWeight(hatW);
    fill(hatColor);
    rect(hatX, hatY, hatWidth, hatHeight);
    line(hatLineX, hatLineY, hatLineW, hatLineH);
    line(hatLine0X, hatLineY, hatLine0W, hatLineH);
   
    // nose
    noFill();
    stroke(noseStroke);
    strokeWeight(noseW);
    rect(noseX, noseY, noseWidth, noseHeight, noseA);
    
    //mouth
    stroke(mouthColor);
    strokeWeight(mouthW);

    fill(mouthC);
    ellipse(mouthX, mouthY, mouthWidth, mouthHeight, mouthA);

    fill('DARKGOLDENROD');
    noStroke();
    ellipse(225, 265, 100, 15, 15);
    
    //eyes dot
    fill('SADDLEBROWN');
    ellipse(175, 180, 15, 15);//right
    ellipse(270, 180, 15, 15);//left
    
    //body
     stroke('black');
    strokeWeight(2);
    fill('MAGENTA');
    rect(220, 500, 225, 280, 5);
    
    //hands
    stroke('DARKGOLDENROD');
    strokeWeight(15);
    line(390, 520, 340, 364);
    line(50, 520, 99, 364);
     
    //legs
    fill('DARKGOLDENROD');
    noStroke();
    rect(175, 715, 60, 148);//right
    rect(270, 715, 60, 148);//left
    
    
    //dots
    strokeWeight(13);
    stroke(0);
    point(220, 380);//1
    point(220, 410);//2
    point(220, 440);//3
    point(220, 470);//4
    point(220, 500);//5
 
}
