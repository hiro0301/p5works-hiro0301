// 小手調べ
function setup(){
  noFill();
  for(let i=0; i<10; i=i++){
    let r=i*10+10
    if (i<5) {
      stroke(255,0,0);
    }
    else {
      stroke(0,0,255);
    }
    ellipse(50,50,r,r)
  }
}
