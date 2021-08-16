export function drawScore(ctx, score){
    ctx.font= "bold 45px serif";
    ctx.fillStyle = "darkblue";
    ctx.fillText("Score:" + score, 20, 60) 
}

export function drawLevel(ctx, level){
    ctx.font= "bold 45px serif";
    ctx.fillStyle = "darkblue";
    ctx.fillText("Level:" + level, 200, 60) 
}

