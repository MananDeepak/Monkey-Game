var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var ground;

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(500,500);
  monkey=createSprite(40,427,20,20) 
  monkey.addAnimation("monkey1",monkey_running)
  monkey.scale=0.13

  
  ground=createSprite(300 ,470,1100,15)
  ground.velocityX=-6
  ground.x = ground.width/2;
  
  
}


function draw() {
background(220)
  
  monkey.collide(ground);
  
 text("survival Time :"+ score,50,50)
  
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -16;
  }
  monkey.velocityY=monkey.velocityY+0.8
  
  
   
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  drawSprites();
  spawnObstacles();
  spawnbananas();
  
  score = score + Math.round(frameCount/300);
}

function spawnObstacles(){
 if (frameCount % 80 === 0){
    obstacle = createSprite(500,433,10,40);
  obstacle.addImage("obs",obstacleImage)
   obstacle.scale=0.17;
   obstacle.velocityX=-6
 obstacle.lifetime=83.3
 
 }
}
function spawnbananas(){
 if (frameCount % 80=== 0){
   banana = createSprite(500,200,10,40);
  banana.addImage("bananaa",bananaImage)
   banana.scale=0.1;
   banana.velocityX=-6
 banana.lifetime=83.3
 
 }
}




