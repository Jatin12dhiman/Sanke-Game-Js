var lastPaintTime =0 ;
const SNAKE_SPEED = 3;
let inputDirection= { x:-1 ,y:0 }
const snakeBody = [
    {x:8,y:8},
    {x: 9, y: 8},
    {x: 10, y: 8},
    {x: 11, y: 8},
    {x: 12, y: 8}
]

const gameBoard = document.querySelector(".game-board");

function paint(currentTime){
    var TimeSeconds =  (currentTime-lastPaintTime)/1000;
    requestAnimationFrame(paint);
    if(TimeSeconds <1 /SNAKE_SPEED) return;
    lastPaintTime=currentTime;
    

    update();
    draw();
}
window.requestAnimationFrame(paint)


function draw(){
     drawSnake();
}
function update(){
    gameBoard.innerHTML="";
    snakeMove(); 
}

function drawSnake(){
     snakeBody.forEach((segment,index)=>{
        var snakeElement = document.createElement("div")
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart =segment.y;
        snakeElement.innerHTML = index

        if(index == 0){
            snakeElement.classList.add("head");
            // if(inputDirection.x=1){

            // }else if(inputDirection.x=-1){

            // }else if(inputDirection.y=-1){

            // }
            // else if(inputDirection.y=1){

            // }
        }else{
        snakeElement.classList.add("snake");
        }
        gameBoard.appendChild(snakeElement)
     })
}
    
    function snakeMove(){
        inputDirection=getInputDirection();

        for(i = snakeBody.length - 2;i>=0;i-- ){
            snakeBody[i+1]={...snakeBody[i]}
        }
        snakeBody[0].x+=inputDirection.x;
        snakeBody[0].y+=inputDirection.y;
    }

    function getInputDirection(){
         
        window.addEventListener("keydown",e=>{

            switch(e.key){
                case'ArrowUp' : inputDirection={x:0 , y:-1}
                break;
                case'ArrowDown' : inputDirection={x:0 , y:1}
                break;
                case'ArrowLeft' : inputDirection={x:-1 , y:0}
                break;
                case'ArrowRight' : inputDirection={x:1 , y:0}
                break;
                default : inputDirection={x:0 , y:0}
            }
        }) 
        return inputDirection;

    }