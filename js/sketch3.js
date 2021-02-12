var candle;
var meeting; 

function preload() {
    candle = loadImage("img/candle.gif");
    meeting = loadImage("img/meeting.png");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
}

function draw() {
    background(meeting);

    if (mouseX > width / 1.5 && mouseY > height / 1.5) {

        fill('yellow');
        textSize(25);
        textFont('Oxanium');
        text("come with me....", width / 1.15, height / 1.5);
    }
    imageMode(CENTER);
    image(candle, mouseX, mouseY);
}

function mousePressed() {
  if (mouseX > width / 1.15 && mouseY > height / 1.5) {
    window.location.href = 'https://carriehott.github.io/joan5000/006.html'
  }
  }