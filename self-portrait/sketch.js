/*
Self Portait
v 1
by Dawn Joseph
MMP 210 example week 2
*/


function setup() {
	createCanvas(640, 360);
}

function draw() {
	background(220);
    
    //head
    fill('plum')
    noStroke();
    rect(100, 100, 200, 250);
    
    //hair
    
    
    //eyes
    noFill();
    stroke('yellow');
    strokeWeight(10);
    ellipse(280, 180, 100);
    ellipse(120, 180, 100, 50);
    
    // mouth
    rect(150, 280, 100, 25, 10);
    
 
}
