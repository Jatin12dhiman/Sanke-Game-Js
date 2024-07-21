var lastPaintTime =0 ;
const SNAKE_SPEED = 3;
let inputDirection= { x:0 ,y:0 }
let lastInputDirection = inputDirection;
let food={x:15,y:10}
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
     drawFood();
}
function update(){
    gameBoard.innerHTML="";
    snakeMove(); 
    snakeEatFood();                                                             
}


function drawSnake(){
     snakeBody.forEach((segment,index)=>{
        var snakeElement = document.createElement("div")
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart =segment.y;
        // snakeElement.innerHTML = index
        snakeElement.style.transform = "rotate(0deg)"; 

        if(index == 0){
            snakeElement.classList.add("head");
             if(inputDirection.x == 1){
                snakeElement.style.transform = "rotate(-90deg)";
             }else if(inputDirection.x == -1){
                snakeElement.style.transform = "rotate(90deg)";

             }else if(inputDirection.y == -1){
                snakeElement.style.transform = "rotate(180deg)";

             }
             else if(inputDirection.y == 1){
                snakeElement.style.transform = "rotate(0deg)";

             }
        }else{
        snakeElement.classList.add("snake");
        }
        gameBoard.appendChild(snakeElement)
     })
}
function drawFood(){
    var foodElement = document.createElement("div")
        foodElement.style.gridColumnStart = food.x;
        foodElement.style.gridRowStart =food.y;
        foodElement.classList.add("food");
        gameBoard.appendChild(foodElement);
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
                case'ArrowUp' : 
                if(lastInputDirection.y ==1) break;
                inputDirection={x:0 , y:-1}
                break;
                case'ArrowDown' :
                if(lastInputDirection.y ==-1) break;
                inputDirection={x:0 , y:1}
                break;
                case'ArrowLeft' :
                if(lastInputDirection.x ==1) break; 
                inputDirection={x:-1 , y:0}
                break;
                case'ArrowRight' :
                if(lastInputDirection.x ==-1) break;
                inputDirection={x:1 , y:0}
                break;
                default : inputDirection={x:0 , y:0}
            }
        }) 
        lastInputDirection = inputDirection;
        return inputDirection;

    }
    function snakeEatFood(){
        if(isEat()){
            food=getFoodrandomPosition();
        }
    }

    function isEat(){
        return (snakeBody[0].x === food.x && snakeBody[0].y === food.y)
    }
    function getFoodrandomPosition(){
        return
    }