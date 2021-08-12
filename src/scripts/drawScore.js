export function drawScore(ctx, score){
    ctx.font= "bold 48px serif";
    ctx.fillStyle = "darkblue";
    ctx.fillText("Score:" + score, 20, 60) 
}
