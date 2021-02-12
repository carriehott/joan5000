var honey_1;
var honey_2;
var honey_3;
var honey_4;
var honey_5;
var honey_6;
var honey_7;
var bee;

function preload() {
    bee = loadImage("img/bee_cursor.gif");
    honey_1 = loadImage("img/honeycomb_1.jpg");
    honey_2 = loadImage("img/honeycomb_2.jpg");
    honey_3 = loadImage("img/honeycomb_3.jpg");
    honey_4 = loadImage("img/honeycomb_4.jpg");
    honey_5 = loadImage("img/honeycomb_5.jpg");
    honey_6 = loadImage("img/honeycomb_6.jpg");
     honey_7 = loadImage("img/honeycomb_7.jpg");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
}

function draw() {
    tint('red');
    background(honey_7);
    tint('red');
    image(honey_6, width / 5.25, 25);
    tint('red');
    image(honey_1, 25, height / 1.5);
    tint('red');
    image(honey_2, width / 5.5, height / 3);
    tint('red');
    image(honey_3, width / 2, height / 2);
    tint('red');
    image(honey_4, width / 1.5, height / 1.5);
    tint('red');
    image(honey_5, width / 1.25, 25);

     if (mouseX > width / 1.5 && mouseY > height / 1.5) {

        fill('orange');
        textSize(25);
        textFont('Oxanium');
        text("Keep Looking....", width / 1.35, height / 1.25);
    }

    imageMode(CENTER);
    image(bee, mouseX, mouseY);
}

function mousePressed() {
    if (mouseX > width / 1.5 && mouseY > height / 1.5) {
        window.location.href = 'https://carriehott.github.io/joan5000/004.html'
    }
}
