// const drawHeart = require("./scripts/hearts")
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// console.log(ctx);

let stop = false;
let x = 20;
let y = (canvas.height+70)/2;
let ay = (canvas.height+70)/2;
let dy = 0;
let bdy = 2;
let x2=20;
let y2=(canvas.height+70)/2;
let upPressed = false;
let downPressed = false;
let score = 0;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}


let boardWidth = 10;
let boardHeight = 160;
let boardY = (canvas.height-boardHeight)/2;

function board(){
    ctx.beginPath()
    ctx.rect(canvas.width-boardWidth, boardY,  boardWidth, boardHeight);
    ctx.fillStyle = "white";
    ctx.strokeSyle = "black";
    ctx.stroke();
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
    ctx.rect(canvas.width-boardWidth*4, board4Y,  board4Width, board4Height);
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

  function collisionDetection(){

  }
  
function arrow(fromx, fromy, color){
    let x = fromx; 
    let y = fromy;

    ctx.save();
    ctx.beginPath();
    ctx.lineTo(x, y-4);
    ctx.lineTo(x+10, y-4);
    ctx.lineTo(x+15, y);
    ctx.lineTo(x+70, y);
    ctx.lineTo(x+70, y-4);
    ctx.lineTo(x+80, y+1);
    ctx.lineTo(x+70, y+6);
    ctx.lineTo(x+70, y+2);
    ctx.lineTo(x+15, y+2); 
    ctx.lineTo(x+10, y+6);
    ctx.lineTo(x, y+6);
    ctx.lineTo(x+4, y+1)
    ctx.lineTo(x,y-4)
    ctx.fillStyle = color;
    ctx.fill();

}

function bowArc(fromx, fromy ,color){
    let x = fromx;
    let y = fromy;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, 50, -1.2, -1.6 * Math.PI);
    ctx.lineTo(x+2, y);
    ctx.arc(x, y, 50, -1.2, -1.6 * Math.PI);
    ctx.stroke();
}


function drawScore(){
    ctx.font= "35px Arial";
    ctx.fillStyle = "Red";
    ctx.fillText("score:" + score, 20, 60) 
}





function draw(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHeart( 385, 15, 50, 50, "red");
    drawHeart( 450, 15, 50, 50, "red");
    drawHeart( 515, 15, 50, 50, "red");
    drawScore();
    board();
    // boardY += bdy;
    // if(boardY + boardHeight + bdy > canvas.height || boardY -70  + bdy < 0) {
    //     bdy = -bdy;
    // }
    board2()
    // board2Y += bdy;
    // if(board2Y + board2Height + bdy > canvas.height || board2Y -70  + bdy < 0) {
    //     bdy = -bdy;
    // }
    board3()
    // board3Y += bdy;
    // if(board3Y + board3Height + bdy > canvas.height || board3Y -70  + bdy < 0) {
    //     bdy = -bdy;
    // }
    board4()
    // board4Y += bdy;
    // if(board4Y + board4Height + bdy > canvas.height || board4Y -70  + bdy < 0) {
    //     bdy = -bdy;
    // }
    board5()
    // board5Y += bdy;
    // if(board5Y + board5Height + bdy > canvas.height || board5Y -70  + bdy < 0) {
    //     bdy = -bdy;
    // }

    arrow(x, y, "brown");
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
          dx=5;
            stop = true;
        }
      })
    if(upPressed && !stop) {
        if(y>=120  ){
            y -= 1;
            y2-=1;
        }
    }
    else if(downPressed  && !stop ) {
        if(y<=canvas.height-50){
            y += 1;
            y2+=1;
        }
    }

    bowArc(x2,y2);      
     x += dx;
     y += dy;

    if(x+80===canvas.width-boardWidth*5 && y<=board5Height+board5Y && y>=board5Y){
    dx=0
        score =5
        // dy=bdy
        
    }else if(x+80===canvas.width-boardWidth*4 && y<=board4Height+board4Y && y>=board4Y){
    dx=0
        score =4
        // dy=bdy
        
    }else if(x+80===canvas.width-boardWidth*3 && y<=board3Height+board3Y && y>=board3Y){
    dx=0
        score =3
        // dy=bdy
            
    }else if(x+80===canvas.width-boardWidth*2 && y<=board2Height+board2Y && y>=board2Y){
    dx=0
        score =2
        // dy=bdy
        
    }else if(x+80===canvas.width-boardWidth && y<=boardHeight+boardY && y>=boardY){
    dx=0
        score =1 
        // dy=bdy
        
    }
    
}
setInterval(draw, 10);