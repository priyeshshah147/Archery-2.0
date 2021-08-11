document.addEventListener("DOMContentLoaded", () => { 
const {displayHearts} = require("./scripts/hearts")
const {arrow} = require('./scripts/arrow')
const {bow} = require('./scripts/bow')
const { drawScore } = require("./scripts/drawScore")
const {instructions, instructions2, instructions3} = require('./scripts/instructions')

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let heartCount = 3;
let stop = false;
let ax = 20;
let y = (canvas.height+70)/2;
let ay = (canvas.height+70)/2;
let dy = 0;
let dx = 0;
let bdy = 0;
let x2=20;
let y2=(canvas.height+70)/2;
let upPressed = false;
let downPressed = false;
let score = 0;
let gameOver = false;
let ending = false


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener('keyup', event, false);

function handleGameStatus(){
    if (gameOver){
        ctx.fillStyle = 'black';
        ctx.font = '90px Tahoma';
        ctx.fillText('GAME OVER', 200, 300);
        ctx.fillStyle = 'Black';
        ctx.font = '40px Orbitron';
        ctx.fillText('Your Score is:'+ " " +score, 345, 400); 
        ending = true;           
    }
}


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
let boardY = (canvas.height-boardHeight+70)/2;

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
let board2Y = (canvas.height-board2Height+70)/2;

function board2(){
    ctx.beginPath()
    ctx.rect(canvas.width-board2Width*2, board2Y,  board2Width, board2Height);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

let board3Width = 10;
let board3Height = 96;
let board3Y = (canvas.height-board3Height+70)/2;

function board3(){
    ctx.beginPath()
    ctx.rect(canvas.width-board3Width-boardWidth-board2Width, board3Y,  board3Width, board3Height);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

let board4Width = 10;
let board4Height = 64;
let board4Y = (canvas.height-board4Height+70)/2;

function board4(){
    ctx.beginPath()
    ctx.rect(canvas.width-boardWidth*4, board4Y,  board4Width, board4Height);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

let board5Width = 10;
let board5Height = 32;
let board5Y = (canvas.height-board5Height+70)/2;

function board5(){
    ctx.beginPath()
    ctx.rect(canvas.width-boardWidth*5, board5Y,  board5Width, board5Height);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}
 

function draw(){

    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    displayHearts(ctx, heartCount)
    bow(ctx,x2,y2); 
    drawScore(ctx, score);
    arrow(ctx, ax, ay, "brown");
    handleGameStatus();
    // instructions(ctx);

    ax += dx;
    ay += dy;

    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
          dx=20;
          stop = true;
        }
    })
 
     
    if(upPressed && !stop) {
        if(ay>=120  ){
            ay -= 1;
            y2-=1;
        }
    }
    else if(downPressed  && !stop ) {
        if(ay<=canvas.height-50){
            ay += 1;
            y2+=1;
        }
    }
    


    if (heartCount ===0) {
        gameOver=true
    }

    if(score>= 10 && Math.abs(bdy)<2 ){
        bdy = 2;

    } 
    else if (score>=20 && Math.abs(bdy)<3){
      
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



            


        if(ax+70===canvas.width-boardWidth*5 && ay<=board5Height+board5Y && ay>=board5Y){
            dx=0    
            score +=5;
            ax = 20;
            stop=false;
            
        }else if(ax+70===canvas.width-boardWidth*4 && ay<=board4Height+board4Y && ay>=board4Y){
            dx=0       
            score +=4;
            ax = 20;
            stop=false;

            
        }else if(ax+70===canvas.width-boardWidth*3 && ay<=board3Height+board3Y && ay>=board3Y){
            dx=0
            score +=3;
            ax = 20;
            stop=false;
                
        }
    }
    else if(score>= 30 && Math.abs(bdy)<4 ){
        bdy = 3;

    } 

    else{

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



            


        if(ax+70===canvas.width-boardWidth*5 && ay<=board5Height+board5Y && ay>=board5Y){
            dx=0    
            score +=5;
            ax = 20;
            stop=false;
            
        }else if(ax+70===canvas.width-boardWidth*4 && ay<=board4Height+board4Y && ay>=board4Y){
            dx=0       
            score +=4;
            ax = 20;
            stop=false;

            
        }else if(ax+70===canvas.width-boardWidth*3 && ay<=board3Height+board3Y && ay>=board3Y){
            dx=0
            score +=3;
            ax = 20;
            stop=false;
                
        }else if(ax+70===canvas.width-boardWidth*2 && ay<=board2Height+board2Y && ay>=board2Y){
            dx=0
            score +=2;
            stop=false;
            ax = 20;
        
        }
        else if(ax+70===canvas.width-15 && ay<=boardHeight+boardY && ay>=boardY){
            dx=0
            score +=1 ;
            stop=false;
            ax = 20;
        
            
        }
    }
     if (ax >= canvas.width){
        heartCount -= 1;
        stop= false;
        ax=20;
        dx=0;  
    }
    if (!ending){
        requestAnimationFrame(draw, 1);
    }

}


draw();
});