var sound;
var sizing = 1
var lift = 1
var slide = 1
var cornerslideX = 1
var CornerslideY = 1
function preload(){
  sound = loadSound('circus.m4a');
}
function setup() {
  createCanvas(1800, 1250);
  frameRate(40)
  sound.loop();
}
function draw () {
background(250, 90, 90);
textSize(30);
text('Click Me!', mouseX+100, mouseY+100);

fill(color(0, 0, 255));
rect(230+slide, 680, 50, 40);
fill(color(0, 0, 255));
rect(120+slide, 680, 50, 40);
fill(51);
ellipse(200+slide, 800, 200, 40);
fill('rgb(100%,0%,10%)');
triangle(200+slide, 765, 180+slide, 740, 220+slide, 740);

fill(color(0, 0, 255));
rect(830, 1080+lift, 50, 40);
fill(color(0, 0, 255));
rect(720, 1080+lift, 50, 40);
fill(51);
ellipse(800, 1200+lift, 200, 40);
fill('rgb(100%,0%,10%)');
triangle(800, 1165+lift, 780, 1140+lift, 820, 1140+lift);

fill(color(0, 0, 255));
rect(1430+cornerslideX, 80+CornerslideY, 50, 40);
fill(color(0, 0, 255));
rect(1320+cornerslideX, 80+CornerslideY, 50, 40);
fill(51);
ellipse(1400+cornerslideX, 200+CornerslideY, 200, 40);
fill('rgb(100%,0%,10%)');
triangle(1400+cornerslideX, 165+CornerslideY, 1380+cornerslideX, 140+CornerslideY, 1420+cornerslideX, 140+CornerslideY);

CornerslideY = CornerslideY +2
cornerslideX = cornerslideX -2
lift = lift -2
slide = slide +2
}
function mousePressed() {
  fill(51);
  textSize(2+sizing);
  text('You Lose', mouseX-45, mouseY);

sizing = sizing +7
}
