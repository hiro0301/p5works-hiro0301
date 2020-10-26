// 小手調べ
function setup(){
  createCanvas(100,100);
  noFill();
  stroke(0,0,255);
  for(let x=5;x<25; x=x+5){ellipse(50,50,x)
  }
  stroke(255,0,0);
  for(let x=25;x<50; x=x+5){ellipse(50,50,x)
}
}
