function setup() {
  createCanvas(128,128);
}

function draw() {
  background(5);
  strokeWeight(4);
  fill(178, 100, 150);
  triangle(12,120,116,120,106,0);
  fill(94, 185, 84);
  triangle(0,108,106,108,106,0);
  fill(225);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
