
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground;
var score,banana;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup()
{
  
  
  
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
 
  
  ground= createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  
  obstacleGroup = createGroup();
  foodGroup = createGroup();
}


function draw()
{
  background(255);
  
  score = score + Math.round(getFrameRate()/60);
  
  text("Survival Time: "+score,200,20)
  
  
  if(keyDown("space")&&(monkey.y>300)){
    
    monkey.velocityY = -17;
  }
  
  monkey.velocityY = monkey.velocityY+0.8;
  console.log(monkey.y)
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(frameCount%80===0){
    banana = createSprite(400,Math.round(random(142,156)),10,10);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -2;
  banana.lifetime = 200;
  foodGroup.add(banana);
  }
 
  if(frameCount%300===0){
    obstacle = createSprite(400,330,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX = -2;
  obstacle.lifetime = 200;
  obstacleGroup.add(obstacle);
  }
  
  if(monkey.isTouching(obstacleGroup))
    {
     obstacleGroup.setVelocityXEach(0);
    
      foodGroup.setVelocityXEach(0);
      obstacleGroup.setLifetimeEach(-1);
      foodGroup.destroyEach();
      score = 0;
    
    }
  
   
  monkey.collide(ground);
  
  
  drawSprites();
  
}






