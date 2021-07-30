export function board(ctx,boardX, boardY, boardWidth, boardHeight, color){
    ctx.beginPath();
    ctx.rect(boardX, boardY,  boardWidth, boardHeight);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// export function board1() { board(ctx, canvas.width-15, (canvas.height-150+70)/2, 10, 150, "white" )}
// export function board2() { board(ctx, canvas.width-25, (canvas.height-120+70)/2, 10, 120, "black" )}
// export function board3() { board(ctx, canvas.width-35, (canvas.height-90+70)/2, 10, 90, "blue" )}
// export function board4() { board(ctx, canvas.width-45, (canvas.height-60+70)/2, 10, 60, "red" )}
// export function board5() { board(ctx, canvas.width-55, (canvas.height-30+70)/2, 10, 30, "yellow" )}

