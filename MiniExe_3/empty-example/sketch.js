var x= 0;
var speed = 0;
var words = ['82%', '19%', '99%', '22%', '39%', '13%', '1%', '77%', '63%'];
var words = random(words);
var sound;

//function preload(){
 // sound = loadSound('Sound.wav');
}
 function setup () {
   createCanvas(800, 577);
   frameRate(random(3));
   img=loadImage('blank_page.jpg');
sound.loop();
 }
 function draw() {
 image(img,0,0)
//White square surrounding loading bar
fill(250)
rect(400, 250, 180, 30)
//Random ''Wait'' Throbber
push();
   noStroke();
    x=x+30;
   translate(width / random(4), height / random(4));
rotate(radians(x));
fill(0)
textSize(random(120));
text('wait', 10, 30);
pop();
// Blue loading square
fill(0,0,200)
rect(400, 250, random(170), 30)
//loading
textSize(14);
text('Loading ...'+random(words), 300, 270);
 }
