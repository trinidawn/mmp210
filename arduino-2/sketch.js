/*
    Arduino + p5 example
*/
var serial;
var portName = "/dev/cu.usbmodem1411";
var sensorValue;
var img;
var mario;

function setup() {
    img = loadImage("city.jpg");
    createCanvas(800, 600);
    mario = loadImage("mario02.png")
    
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
    background(img);
    var c = map(sensorValue, 0, 1023, 0, 200);
    
    
    // sky
    //background(c, c, c + 55);
    var y = map(sensorValue, 0, 1023, height, 0);
    
    //mario
    var y = map(sensorValue, 0, 1023, height, 50);
    
    
    // sun
    noStroke();
    fill('orange');
    ellipse(320, y, 100);
    
    image(mario, y,340);
    image(mario, 625, 340);
    
}
