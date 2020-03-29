var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;

var xspeed = 10;
var xpos = 0;
var yspeed = 10;
var ypos = 500;


function preload() {
    img1 = loadImage("../images/static.jpg");
    img2 = loadImage("../images/computer.png");
    img3 = loadImage("../images/computer2.png");
    img4 = loadImage("../images/chair.png");
    img5 = loadImage("../images/ghost.png");
    img6 = loadImage("../images/desk_2.png");
    img7 = loadImage("../images/laptop.png");
    img8 = loadImage("../images/hourglass.png");
    img9 = loadImage("../images/sunset.jpg")
    img10 = loadImage("../images/computer3.png")
}

function setup() {
    createCanvas(1800, 780);
    noCursor();
}

function draw() {

    if (mouseIsPressed) {
        background(0, 0, 0, 0);
        textSize(50);
        fill('#B0FF1C');
        text("she's coming", mouseX + 3, mouseY + 10);

    } else {
        image(img9, 0, 0, 1800, 780);
        image(img8, mouseX, mouseY);
        image(img6, 550, 400);

        image(img4, ypos, 500);
        if (ypos > 1800) {
            yspeed = -5;
        }
        if (ypos < 0) {
            yspeed = 4;
        }
        ypos += yspeed;
    }


}
