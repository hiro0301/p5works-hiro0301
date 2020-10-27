// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  strokeWeight(1);
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      rect(size*i, size*j, 25,25);
      if (i%2==0, j%2==1) {
        fill(150);
        rect(size*j, size*j, 25,25)
      }

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
