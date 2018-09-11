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
	background(143, 188, 139)
    ellipseMode(CENTER)
    rectMode(CENTER)
    
    //head
    fill('DARKGOLDENROD')
    noStroke();
    ellipse(220, 220, 220, 280);
    
    
    //eyes
    noFill();
    stroke('black');
    strokeWeight(2);
    ellipse(175, 180, 80, 40);//right
    ellipse(270, 180, 80, 40);//left
   
    // nose
    rect(220, 230, 15, 25, 25);
    
    //mouth
    fill('MAGENTA')
    ellipse(225, 280, 100, 15, 15);
    
    //eyes dot
    fill('black');
    ellipse(175, 180, 5, 5, 5);//right
    ellipse(270, 180, 5, 5, 5);//left
    
    //glasses line
   // line(810, 490, 220, 220, 50)
    
    //body
            fill('MAGENTA');
            rect(220, 500, 225, 280);
    
    //legs
            fill('DARKGOLDENROD');
            rect(175, 715, 60, 150);//right
            rect(270, 715, 60, 150);//left
            
    
 
            
 
}
