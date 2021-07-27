// const drawHeart = require("./scripts/hearts")
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// console.log(ctx);

let x = 20;
let y = canvas.height/2;
let dx = 2;
let dy = 0;
// let bdx = 0;
let bdy = +1;


function arrow(fromx, fromy, color){
    let x = fromx; 
    let y = fromy;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+30, y);
    ctx.lineTo(x+30, y-6);
    ctx.lineTo(x+40, y+1);
    ctx.lineTo(x+30, y+8);
    ctx.lineTo(x+30, y+2);
    ctx.lineTo(x, y+2);
    // ctx.lineTo(10, 26);
    ctx.fill();

}


let boardWidth = 10;
let boardHeight = 160;
let boardY = (canvas.height-boardHeight)/2;

function board(){
    ctx.beginPath()
    ctx.rect(canvas.width-boardWidth, boardY,  boardWidth, boardHeight);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

let board2Width = 10;
let board2Height = 128;
let board2Y = (canvas.height-board2Height)/2;

function board2(){
    ctx.beginPath()
    ctx.rect(canvas.width-board2Width-boardWidth, board2Y,  board2Width, board2Height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

let board3Width = 10;
let board3Height = 96;
let board3Y = (canvas.height-board3Height)/2;

function board3(){
    ctx.beginPath()
    ctx.rect(canvas.width-board3Width-boardWidth-board2Width, board3Y,  board3Width, board3Height);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

let board4Width = 10;
let board4Height = 64;
let board4Y = (canvas.height-board4Height)/2;

function board4(){
    ctx.beginPath()
    ctx.rect(canvas.width-board4Width-boardWidth*3, board4Y,  board4Width, board4Height);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

let board5Width = 10;
let board5Height = 32;
let board5Y = (canvas.height-board5Height)/2;

function board5(){
    ctx.beginPath()
    ctx.rect(canvas.width-boardWidth*5, board5Y,  board5Width, board5Height);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

function drawHeart( fromx, fromy,lw,hlen,color) {

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


function draw(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHeart( 385, 15, 50, 50, "red");
    drawHeart( 450, 15, 50, 50, "red");
    drawHeart( 515, 15, 50, 50, "red");
    arrow(x, y, "red");
    board();
    boardY += bdy;
    if(boardY + boardHeight + bdy > canvas.height || boardY -70  + bdy < 0) {
        bdy = -bdy;
    }
    board2()
    board2Y += bdy;
    if(board2Y + board2Height + bdy > canvas.height || board2Y -70  + bdy < 0) {
        bdy = -bdy;
    }
    board3()
    board3Y += bdy;
    if(board3Y + board3Height + bdy > canvas.height || board3Y -70  + bdy < 0) {
        bdy = -bdy;
    }
    board4()
    board4Y += bdy;
    if(board4Y + board4Height + bdy > canvas.height || board4Y -70  + bdy < 0) {
        bdy = -bdy;
    }
    board5()
    board5Y += bdy;
    if(board5Y + board5Height + bdy > canvas.height || board5Y -70  + bdy < 0) {
        bdy = -bdy;
    }
    x += dx; 
    y += dy;
    
}
setInterval(draw, 10);