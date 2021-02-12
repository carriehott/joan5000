var candle;

function preload() {
    candle=loadImage("img/candle.gif"); 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor(); 
}

function draw() {
    imageMode(CENTER); 
    image(candle, mouseX, mouseY); 
}
