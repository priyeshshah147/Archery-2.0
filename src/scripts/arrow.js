export function arrow(ctx, fromx, fromy, color){
    let ax = fromx; 
    let ay = fromy;

    ctx.save();
    ctx.beginPath();
    ctx.lineTo(ax, ay-4);
    ctx.lineTo(ax+10, ay-4);
    ctx.lineTo(ax+15, ay);
    ctx.lineTo(ax+70, ay);
    ctx.lineTo(ax+70, ay-4);
    ctx.lineTo(ax+80, ay+1);
    ctx.lineTo(ax+70, ay+6);
    ctx.lineTo(ax+70, ay+2);
    ctx.lineTo(ax+15, ay+2); 
    ctx.lineTo(ax+10, ay+6);
    ctx.lineTo(ax, ay+6);
    ctx.lineTo(ax+4, ay+1)
    ctx.lineTo(ax,ay-4)
    ctx.fillStyle = color;
    ctx.fill();

}