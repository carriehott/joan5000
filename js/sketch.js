var towel;

function preload() {
    towel = loadImage("img/HangingTowel.png");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
}

function draw() {
    background('#E6FFF4');

    if (mouseX > width / 1.5 && mouseY > height / 1.5) {

        fill('#FF07D6');
        textSize(35);
        textFont('Oxanium');
        text("Here I Am", width / 1.5, height / 1.5);
    }
    imageMode(CENTER);
    image(towel, mouseX, mouseY);
}

function mousePressed() {
  if (mouseX > width / 1.5 && mouseY > height / 1.5) {
    window.location.href = 'https://carriehott.github.io/joan5000/002.html'
  }
  }
