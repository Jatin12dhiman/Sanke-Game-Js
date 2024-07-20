var lastPaintTime =0 ;
const SNAKE_SPEED = 1;

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

}
function update(){
    
}