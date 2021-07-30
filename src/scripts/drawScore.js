export function drawScore(ctx, score){
    ctx.font= "35px Tahoma";
    ctx.fillStyle = "darkblue";
    ctx.fillText("Score:" + score, 20, 60) 
}
