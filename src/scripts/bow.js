export function bow(ctx, fromx, fromy ){
    let x = fromx;
    let y = fromy;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 50, -1.2, -1.6 * Math.PI);
    ctx.lineTo(x+2, y);
    ctx.arc(x, y, 50, -1.2, -1.6 * Math.PI);
    ctx.stroke();
}
