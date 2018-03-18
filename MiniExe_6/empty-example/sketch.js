var noiseScale=0.02;
var x=0;
var speed=-1;
var sol=100;
var Ned=0;
var bjerge=1;
var farve1=0;
var farve2=0;
var farve3=0;

function setup() {
  createCanvas(1500,880);
frameRate(60);
}
function draw() {
  //Colours of the background
  background(farve1, farve2, farve3);
  sol=sol+1
    if(sol>360){
      farve1=255;
      farve2=140;
      farve3=0;
    }
    if(sol<220){
    farve1=175
    farve2=200
    farve3=220
  }

  //ellipse Skal op og ned i x-værdi
  fill(255, 204, 0);
  ellipse(600, sol, 200, 200);

  if(sol>500){
    speed=2
  }
  if(sol<200){
  sol=sol-speed
}


  //bjerge med noise
  bjerge=bjerge+3
  for (var x=0; x < width; x++) {
      var noiseVal = noise((x+bjerge)*noiseScale, 100);
      stroke(noiseVal+50);
      line(x,noiseVal*500, x, height);

      if(x>=width){
        x=0;
      }
}
}
