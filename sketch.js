var sea,ship,seaImg,shipImg;
function preload(){
seaImg=loadImage("sea.png")
shipImg=loadAnimation("ship1.png","ship2.png")
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200)
  sea.addImage(seaImg)
  sea.scale=0.3
  sea.velocityX=-3
  ship=createSprite(100,200)
  ship.addAnimation("sail",shipImg)
  ship.scale=0.2
}

function draw() {
  background("blue");
  if(sea.x<0)
    {
     sea.x=sea.width/8
     }
  drawSprites()
  
 
}