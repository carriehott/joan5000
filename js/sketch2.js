var capture;
var jar; 

function preload() {
    jar=loadImage("jar_cursor.png")
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
    capture = createCapture(VIDEO);
    capture.size(220, 150);
    capture.hide();
}

function draw() {
    background('lightpink');
    tint('pink');
    image(capture, width/4, height/4);
    tint('yellow');
    image(capture, width/3, height/3);
    tint('orange');
    image(capture, width/2, height/2);
    tint('red');
    image(capture, width/1.5, height/1.5);

    imageMode(CENTER);
    image(jar, mouseX, mouseY);
}

function mousePressed() {
    if (mouseX > width / 1.5 && mouseY > height / 1.5) {
        window.location.href = 'https://carriehott.github.io/joan5000/004.html'
    }
}
