
let bugs = []; // array of Jitter objects

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function setup() {
    createCanvas(windowWidth, windowHeight);


  // Create objects
  for (let i = 0; i < 150; i++) {
    bugs.push(new Jitter());
    img = loadImage('https://carriehott.github.io/joan5000/img/bee_cursor.gif'); // Load the image

  }
}

function draw() {
background('#E6FFF4');
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    image(img, this.x, this.y,);
  }
}
