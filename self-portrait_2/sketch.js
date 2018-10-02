/*
Self Portait
v 3
by Dawn Joseph
MMP 210 example week 2
Interactive example
*/


function setup() {
	createCanvas(500, 640);
}

function draw() {
	background(143, 188, 139,);
    ellipseMode(CENTER);
    rectMode(CENTER);
    
   //Interactive background
    var r1 = map(mouseX, 0, width, 0, height);
    var r2 = height - r1;
    var r = map(mouseX, 0, 550, 0, 250);
    var b = map(mouseX, 0, 550, 250, 0);
  
    fill(r, 0, b, r1);
    rect(width/2 + r1/2, height/2, r1, r1);
  
    fill(b, 0 , r, r2);
    rect(width/2 - r2/2, height/2, r2, r2);
  
	
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
    var hatA = 5;
    
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
    var mouthStroke = 'SADDLEBROWN'; 
    var mouthW = 1;
    var mouthColor1 = 'MAGENTA';
    var mouthColor2 = 'DARKGOLDENROD';
    
    var mouthX = 225;
    var mouthY = 275;
    var mouthWidth = 100;
    var mouthHeight = 20;
    var mouthA = 20;
    
    var mouthX2 = 215;
    var mouthY2 = 260;
    var mouthW2 = 100;
    var mouthH2 = 35;
    var mouthA2 = 35;
    
    
    //Variables eyes pupil
    var eyesPupilColor = 'SADDLEBROWN';
    
    var eyesPupilX = 175;
    var eyesPupilY = 182; 
    var eyesPupilW = 15;
    var eyesPupilH = 20;
    
    var eyesPX = 270;
    var eyesPupilY = 182; 
    var eyesPupilW = 15;
    var eyesPupilH = 20;
    
    var eyesPupilColor2 = 'black';
    
    var eyesPupilX1 = 178;
    var eyesPupilY1 = 182; 
    var eyesPupilW1 = 8;
    var eyesPupilH1 = 8;
    
    var eyesPX2 = 272;
    var eyesPupilY2 = 182; 
    var eyesPupilW2 = 8;
    var eyesPupilH2 = 8;
    
    
    //Variables body
    var bodyStroke = 'black';
    var bodyW = 2;
    var bodyColor = 'MAGENTA';
    
    var bodyX = 220;
    var bodyY = 500; 
    var bodyWidth = 225;
    var bodyHeight = 280;
    var bodyA = 5;
    
    
    //Variables hands
    var handsC = 'DARKGOLDENROD';
    var handsW = 15;
    
    var handsLineX = mouseX;
    var handsLineY = mouseY;
    var handsLineW = 340;
    var handsLineH = 364;
    
    var handsLine0X = mouseX - 100;
    var handsLineY = mouseY;
    var handsLine0W = 99;
    var handsLineH = 364;
    
    
    //Variables buttons
    var buttonW = 13;
    
    var buttonX1 = 220;
    var buttonY1 = 380;
    var buttonX2 = 220;
    var buttonY2 = 410;
    var buttonX3 = 220;
    var buttonY3 = 440;
    var buttonX4 = 220;
    var buttonY4 = 470;
    var buttonX5 = 220;
    var buttonY5 = 500;
    
    //Variables legs
    /*var legsColor = 'DARKGOLDENROD';
    
    var legsRightX = 175;
    var legsRightY = 715;
    var legsRightWidth = 60;
    var legsRightHeight = 148;
    var legsRightA = 5;
    
    var legsLeftX = 270;
    var legsLeftY = 715;
    var legsLeftWidth = 60;
    var legsLeftHeight = 148;
    var legsLeftA = 5;*/
    
    
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
    rect(hatX, hatY, hatWidth, hatHeight, hatA);
    line(hatLineX, hatLineY, hatLineW, hatLineH);
    line(hatLine0X, hatLineY, hatLine0W, hatLineH);
   
    // nose
    noFill();
    stroke(noseStroke);
    strokeWeight(noseW);
    rect(noseX, noseY, noseWidth, noseHeight, noseA);
    
    //mouth
    stroke(mouthStroke);
    strokeWeight(mouthW);
    fill(mouthColor1);
    ellipse(mouthX, mouthY, mouthWidth, mouthHeight, mouthA);
    fill(mouthColor2);
    noStroke();
    ellipse(mouthX2, mouthY2, mouthW2, mouthH2, mouthA2);
    
    //eyes pupil
    fill(eyesPupilColor);
    ellipse(eyesPupilX, eyesPupilY, eyesPupilW, eyesPupilH);//right
    ellipse(eyesPX, eyesPupilY, eyesPupilW, eyesPupilH);//left
    fill(eyesPupilColor2);
    ellipse(eyesPupilX1, eyesPupilY1, eyesPupilW1, eyesPupilH1);//right
    ellipse(eyesPX2, eyesPupilY2, eyesPupilW2, eyesPupilH2);//left
    
    //body
    stroke(bodyStroke);
    strokeWeight(bodyW);
    fill(bodyColor);
    rect(bodyX, bodyY, bodyWidth, bodyHeight, bodyA);
    
    //hands
    stroke(handsC);
    strokeWeight(handsW);
    line(handsLineX, handsLineY, handsLineW, handsLineH);
    line(handsLine0X - 100, handsLineY, handsLine0W, handsLineH);
   
    //buttons
    strokeWeight(buttonW);
    stroke(0);
    point(buttonX1, buttonY1);//1
    point(buttonX2, buttonY2);//2
    point(buttonX3, buttonY3);//3
    point(buttonX4, buttonY4);//4
    point(buttonX5, buttonY5);//5
    
    //legs
    /*fill(legsColor);
    noStroke();
    rect(legsRightX, legsRightY, legsRightWidth, legsRightHeight, legsRightA);//right
    rect(legsLeftX, legsLeftY, legsLeftWidth, legsLeftHeight, legsLeftA);//left*/
 
}
