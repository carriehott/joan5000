var capture;
var bee; 

function preload() {
    bee=loadImage("img/bee_cursor.gif"); 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    capture = createCapture(VIDEO);
    capture.size(220, 150);
    capture.hide();
    noCursor(); 
}

function draw() {
    background('lightpink');
    tint('pink');
    image(capture, width/5, height/5);
    tint('yellow');
    image(capture, width/3, height/3);
    tint('orange');
    image(capture, width/2, height/2);
    tint('red');
    image(capture, width/1.5, height/1.5);

    imageMode(CENTER); 
    image(bee, mouseX, mouseY); 
}

function mousePressed() {
  if (mouseX > width / 1.5 && mouseY > height / 1.5) {
    window.location.href = 'https://carriehott.github.io/joan5000/004.html'
  }
  }