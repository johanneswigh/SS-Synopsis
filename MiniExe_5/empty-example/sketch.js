var fodbold;
var fod;
var wallTop, wallRight, wallLeft;
var fodboldimg, fodimg;
var WALL_THICKNESS = 30;
var MAX_SPEED = 10;
let bubbles = [];
var GRAVITY = 10;
var FLAP = -7;


function setup() {
  createCanvas(600,1000);
  fodimg = loadAnimation('fod.png');
  fodboldimg = loadAnimation('Fodbold.png');

//Foot
  fod = createSprite(500,500);
    fod.addAnimation("normal", "fod.png");
//Ball
    fodbold = createSprite(100, 100);
    fodbold.addAnimation("normal", "Fodbold.png");
    fodbold.velocity.x = 4;

//Wall
    wallTop = createSprite(width/2, -30/2, width, 30);
    wallTop.immovable = true;

    wallLeft = createSprite(-WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
    wallLeft.immovable = true;

    wallRight = createSprite(width+WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
    wallRight.immovable = true;

  }

  function mouseClicked() {
  let r = random(1, 10);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);

// fod position
  drawSprite(fod);
  fod.position.x = mouseX;
  fod.position.y = mouseY;

// fodboldimg
  drawSprite(fodbold);
  fodbold.bounce(wallTop);
  fodbold.bounce(wallLeft);
  fodbold.bounce(wallRight);
  fodbold.bounce(fod);

  if(fodbold.bounce(fod))
  {
    fodbold.velocity.y = FLAP;

  fodbold.velocity.y += GRAVITY;
}
if(fodbold.position.y<1000) {
  createSprite(100, 100);
  fodbold.setSpeed(MAX_SPEED, 100);
  }

//bubbles
    for (let bubble of bubbles) {
      bubble.move();
      bubble.show();
    }

    for (let i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].show();
    }
  }

  class Bubble {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }

    move() {
      this.x = this.x + random(-5, 5);
      this.y = this.y + random(-5, 5);
    }

    show() {
      stroke(255);
      strokeWeight(4);
      ellipse(this.x, this.y, this.r * 2);
    }
  }
