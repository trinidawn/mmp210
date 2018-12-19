/*
    Final 
*/
var serial;
var portName = "/dev/cu.usbmodem1411";
var sensorValue;
var canvasWidth = 800;
var canvasHeight = 660;
var score = 0;
var img;  // Declare variable 'img'.
var blaster;
var button = 0;

//player
var player = {
   x : 100,
   y : 590, 
    width: 70,
    height:70,
    draw : function(){
        image(img_player, this.x, this.y, this.width, this.height);
    }
}

//bullets
var bullets = [];

function Bullet(I){
    I.active = true; 
    I.x = player.x + player.width/2;
    I.y = player.y + player.height/2;
    I.yvelocity = 5;
    I.width = 4;
    I.height = 4;
    I.inBounds = function(){
        return I.y >= 0 && I.y <= canvasHeight - I.height;
    }
    
    I.update = function(){
        I.active = I.active && I.inBounds();
        I.y -= I.yvelocity;
    }
    I.draw = function(){
			image(img_bullet, I.x, I.y, I.width, I.height);
		}
    return I;
}

//enemies
var enemies= [];


function Enemy(I){
    I.active = true;
    I.width = 35;
    I.height = 35;
    I.yvelocity = 2;
    I.y = 0;
    I.x = Math.random() * (canvasWidth-I.width);
    I.inBounds = function(){
        return I.y >= 0 && I.y < canvasHeight - I.height;
    };
    I.draw = function(){
			image(img_enemy, I.x, I.y, I.width, I.height);
    };
    I.update = function(){
        I.active = I.active && I.inBounds();
        I.y += I.yvelocity
    };
    
    return I;
}

function collision(bullet, enemy){
    return bullet.x + bullet.width >= enemy.x && bullet.x <= enemy.x + enemy.width && 
        bullet.y + bullet.height >= enemy.y && bullet.y <= enemy.y + enemy.height;
}

//canvas functions 
var img_enemy, img_player, img_bullet;
function preload(){
    img_enemy = loadImage("star_2.png");
    img_player = loadImage("starwar.png");
    img_bullet = loadImage("bull2.png");
    blaster = loadSound('blaster.wav');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
//    noCursor();
  img = loadImage("sky1.png");  // Load the image
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open(portName);
}

function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}


function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height/2, img.width/2, img.height/2);
    
    if(keyIsDown(32) && button ==0){
        button =1;
    }
    
    if(button ==1){
        
    
//  player.x= int(map(sensorValue, 0, 1023, 0, canvasWidth - player.width));
    player.draw();
    console.log(player.x);
   if(keyIsDown(LEFT_ARROW)){
        if(player.x-5 >= 0)
            player.x -= 5;
        else
            player.x =0;
    }
//        Arrow keys for moving
    if(keyIsDown(RIGHT_ARROW)){
        if(player.x+5 < canvasWidth - player.width)
           player.x += 5;
        else
            player.x = canvasWidth - player .width;
    }
    if(keyIsDown(32)){
        blaster.setVolume(0.5);
        blaster.play();
        bullets.push(Bullet({}));
    }
    
    bullets = bullets.filter(function(bullet){
        return bullet.active;
    });
    
    bullets.forEach(function(bullet){
        bullet.update();
        bullet.draw();
    });
    
  if(Math.random() < 0.04){
        enemies.push(Enemy({}));
    }
    
    enemies = enemies.filter(function(enemy){
        return enemy.active;
    });
    
    enemies.forEach(function(enemy){
        enemy.update();
        enemy.draw();
    });
    
    bullets.forEach(function(bullet){
        enemies.forEach(function(enemy){
            if(collision(bullet, enemy)){
                bullet.active = false;
                enemy.active = false;
                score ++;
                console.log(score);
            }
        });
    });
    
    enemies.forEach(function(enemy){
        if(collision(enemy, player)){
            enemy.active = false;
            noLoop();
            textSize(50);
            fill('red');
            textFont("Arial Rounded MT Bold");
            text("GAME OVER", 270, 400);
        }
    });
        }
}

//R keyPressed to start game
function keyPressed() {
    
    if(keyCode == 82) {
        location.reload();
    }

}
    
    
  

