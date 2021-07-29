// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
export function drawHeart(ctx, fromx, fromy,lw,hlen,color) {

    var x = fromx;
    var y = fromy;
    var width = lw ;
    var height = hlen;
  
    ctx.save();
    ctx.beginPath();
    var topCurveHeight = height * 0.3;
    ctx.moveTo(x, y + topCurveHeight);
    // top left curve
    ctx.bezierCurveTo(
      x, y, 
      x - width / 2, y, 
      x - width / 2, y + topCurveHeight
    );
  
    // bottom left curve
    ctx.bezierCurveTo(
      x - width / 2, y + (height + topCurveHeight) / 2, 
      x, y + (height + topCurveHeight) / 2, 
      x, y + height
    );
  
    // bottom right curve
    ctx.bezierCurveTo(
      x, y + (height + topCurveHeight) / 2, 
      x + width / 2, y + (height + topCurveHeight) / 2, 
      x + width / 2, y + topCurveHeight
    );
  
    // top right curve
    ctx.bezierCurveTo(
      x + width / 2, y, 
      x, y, 
      x, y + topCurveHeight
    );
  
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  
  }


export function displayHearts (ctx, heartCount) {
  for(let i=0; i<heartCount; i++){
    let j = i * 65 + 400
    drawHeart(ctx, j, 15, 50, 50, "red")
  }
}