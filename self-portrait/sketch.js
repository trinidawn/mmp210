/*
Self Portait
v 1
by Dawn Joseph
MMP 210 example week 2
*/


function setup() {
	createCanvas(700, 860);
}

function draw() {
	background(143, 188, 139);
    ellipseMode(CENTER);
    rectMode(CENTER);
    
    //head
    fill('DARKGOLDENROD');
    noStroke();
    ellipse(220, 220, 220, 280);
    
    
    //eyes
    noFill();
    stroke('black');
    strokeWeight(4);
    line(217, 180, 230, 180);
    line(116, 180, 135, 180);
    line(312, 180, 325, 180);
    ellipse(175, 180, 80, 40);//left
    ellipse(270, 180, 80, 40);//right
    
   
    //hat
    stroke('black');
    strokeWeight(10);
    fill('black');
    rect(220, 90, 180, 80);
    line(70, 130, 135, 130);
    line(305, 130, 370, 130);
   
    // nose
    noFill();
    stroke('black');
    strokeWeight(2);
    rect(220, 215, 17, 25, 25);
    
    //mouth
    stroke('SADDLEBROWN');
    strokeWeight(1);
    fill('MAGENTA');
    ellipse(225, 275, 100, 15, 15);
    
    //eyes dot
    fill('SADDLEBROWN');
    ellipse(175, 180, 10, 10);//left
    ellipse(270, 180, 10, 10);//right
    
    //body
     stroke('black');
    strokeWeight(2);
    fill('MAGENTA');
    rect(220, 500, 225, 280);
    
    //hands
    stroke('DARKGOLDENROD');
    strokeWeight(15);
    line(390, 520, 340, 364);
    line(50, 520, 99, 364);
     
    //legs
    fill('DARKGOLDENROD');
    noStroke();
    rect(175, 715, 60, 148);//left
    rect(270, 715, 60, 148);//right
    
    
    //dots
    strokeWeight(13);
    stroke(0);
    point(220, 380);//1
    point(220, 410);//2
    point(220, 440);//3
    point(220, 470);//4
    point(220, 500);//5
 
}
