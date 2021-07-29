export function drawScore(ctx, score){
    ctx.font= "35px Arial";
    ctx.fillStyle = "Red";
    ctx.fillText("Score:" + score, 20, 60) 
}
