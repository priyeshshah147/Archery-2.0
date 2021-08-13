// document.addEventListener("DOMContentLoaded", () => { 
const {displayHearts} = require("./scripts/hearts")
const {arrow} = require('./scripts/arrow')
const {bow} = require('./scripts/bow')
const { drawScore } = require("./scripts/drawScore")
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


let heartCount = 3;
let stop = false;
let ax = 20;
let ay = 150;
let dy = 0;
let dx = 0;
let bdy = 0;
let x2=20;
let y2= 150;
let upPressed = false;
let downPressed = false;
let score = 0;
let gameOver = false;
let youWin = false;
let ending = false;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener('keyup', event, false);
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

function handleGameStatus(){
    if (gameOver){
        ctx.fillStyle = 'brown';
        ctx.font = '90px Tahoma';
        ctx.fillText('GAME OVER', 200, 300);
        ctx.fillStyle = 'brown';
        ctx.font = '40px Orbitron';
        ctx.fillText('Your Score is:'+ " " +score, 300, 370); 
        ending = true;           
    }
}
function handleGameStatus2(){
    if (youWin){
        ctx.fillStyle = 'brown';
        ctx.font = '70px Orbitron';
        ctx.fillText('Congratulation', 250, 200); 
        ctx.fillStyle = 'brown';
        ctx.font = '120px Tahoma';
        ctx.fillText('You win!!!', 200, 350);
        ending =true;           
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



let boardY = (canvas.height-160+70)/2;

function board(){
    ctx.beginPath()
    ctx.rect(canvas.width-10, boardY,  10, 160);
    ctx.fillStyle = "white";
    ctx.strokeSyle = "black";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}


let board2Y = (canvas.height-128+70)/2;

function board2(){
    ctx.beginPath()
    ctx.rect(canvas.width-20, board2Y,  10, 128);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}

let board3Y = (canvas.height-96+70)/2;

function board3(){
    ctx.beginPath()
    ctx.rect(canvas.width-30, board3Y,  10, 96);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
    
}


let board4Y = (canvas.height-64+70)/2;

function board4(){
    ctx.beginPath()
    ctx.rect(canvas.width-40, board4Y,  10, 64);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}


let board5Y = (canvas.height-32+70)/2;

function board5(){
    ctx.beginPath()
    ctx.rect(canvas.width-50, board5Y,  10, 32);
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
    handleGameStatus2();
    
    
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
            ay -= 5;
            y2-=5;
        }
    }
    else if(downPressed  && !stop ) {
        if(ay<=canvas.height-50){
            ay += 5;
            y2+=5;
        }
    }

    if (heartCount ===0) {
        gameOver=true
    }
    
    if (score >= 50){
        youWin = true
    }

    if(score>=40 && Math.abs(bdy)<7 ){  
        board5()
        board5Y += bdy;
        if(board5Y + 16 + 80 + bdy >= canvas.height || board5Y - 64 - 70  + bdy <= 0) {
            bdy = -bdy;
        }
        if(ax+70===canvas.width-50 && ay<=32+board5Y && ay>=board5Y){
            dx=0    
            score +=5;
            ax = 20;
            stop=false;
        } 
    }
 
    else if(score>= 30  && Math.abs(bdy)<7){
        board3();
        board3Y += bdy;
        board4()
        board4Y += bdy;
        board5()
        board5Y += bdy;
        if(board5Y + 16 + 80 + bdy >= canvas.height || board5Y - 64 - 70  + bdy <= 0) {
            bdy = -bdy;
        }
        if(ax+70===canvas.width-50 && ay<=32+board5Y && ay>=board5Y){
            dx=0    
            score +=5;
            ax = 20;
            stop=false;
        } 
        if(ax+70===canvas.width-30 && ay<=64+board4Y && ay>=board4Y){
            dx=0       
            score +=4;
            ax = 20;
            stop=false;        
        }
        if(ax+70===canvas.width-30 && ay<=96+board3Y && ay>=board3Y){
            dx=0
            score +=3;
            ax = 20;
            stop=false;
                
        }  
    }    
    else if(score>= 20  && Math.abs(bdy)<6){
        bdy = 6;
        
    }
    else if(score>= 10  && Math.abs(bdy)<3){
        bdy = 3;

    } 


    else{
        board();
        boardY += bdy;
        board2(); 
        board2Y += bdy;
        board3();
        board3Y += bdy;
        board4()
        board4Y += bdy;
        board5()
        board5Y += bdy;
        if(board5Y + 16 + 80 + bdy >= canvas.height || board5Y - 64 - 70  + bdy <= 0) {
            bdy = -bdy;
        }
        if(ax+70===canvas.width-50 && ay<=32+board5Y && ay>=board5Y){
            dx=0    
            score +=5;
            ax = 20;
            stop=false;
        } 
        if(ax+70===canvas.width-30 && ay<=64+board4Y && ay>=board4Y){
            dx=0       
            score +=4;
            ax = 20;
            stop=false;        
        }
        if(ax+70===canvas.width-30 && ay<=96+board3Y && ay>=board3Y){
            dx=0
            score +=3;
            ax = 20;
            stop=false;
                
        } 
        if(ax+70===canvas.width-10 && ay<=128+board2Y && ay>=board2Y){
            dx=0
            score +=2;
            ax = 20;
            stop=false;
        
        } 
        if(ax+70===canvas.width-10 && ay<=160+boardY && ay>=boardY){
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
    if (!ending ){
        requestAnimationFrame(draw, 1);
    }

}


draw();
// }); 