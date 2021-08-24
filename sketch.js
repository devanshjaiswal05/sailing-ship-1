var ship,ship_sailing;
var sea,sea_back;
function preload(){
  ship_sailing=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")  
 sea_back=loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
 sea=createSprite(0,200,400,400);
 sea.addAnimation("back",sea_back)
 sea.scale=0.3
 ship=createSprite(200,200,20,20);
 ship.addAnimation("sailing",ship_sailing) 
ship.scale=0.2
}

 function draw(){
 background("black");
 sea.velocityX=1
drawSprites();
}

