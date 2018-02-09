
function setup() {
    createCanvas(2200, 1600);
    background(0);
    frameRate(60);
}
function draw() {
    fill( (mouseX/width)*0, (mouseY/height)*200, 1, 50);
    textSize(50);
    text('Hide n seek', 1800, 500);(mouseX, mouseY);
}
