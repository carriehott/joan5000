var capture;


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
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

}