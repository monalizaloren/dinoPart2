var PLAY = 1;
var END = 0;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4;
var backgroundImg
var score=0;
var jumpSound, collidedSound;
var gameOver, restart;


function preload(){
  
  
  backgroundImg = loadImage("assets/backgroundImg.png")
  sunAnimation = loadImage("assets/sun.png");
  
  trex_running = loadAnimation("assets/trex_2.png","assets/trex_1.png","assets/trex_3.png");
  trex_collided = loadAnimation("assets/trex_collided.png");
  
  groundImage = ;
  
  cloudImage = ;
  
  obstacle1 = ;
  obstacle2 = ;
  
  
  gameOverImg = ;
  restartImg = ;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  sun = ???(width-50,100,10,10);
  sun.addAnimation("sun", sunAnimation);
  sun.scale = 0.1
  
  trex = createSprite(50,height-70,20,50);
  
  
  trex.addAnimation("running", trex_running);
  trex.addAnimation("collided", trex_collided);
  trex.setCollider('circle',0,0,350)
  trex.scale = 0.08
  
  
  invisibleGround = ???(width/2,height-10,width,125);  
  invisibleGround.shapeColor = "#f4cbaa";
  
  ground = ???(width/2,height,width,2);
  ground.addImage("ground",groundImage);
  ground.x = width/2
  ???= -(6 + 3*score/100);
  
  gameOver = ???(width/2,height/2- 50);
  gameOver.addImage(gameOverImg);
  
  restart = ???(width/2,height/2);
  restart.addImage(restartImg);
  
  gameOver.scale = 0.5;
  ???= 0.1;

  gameOver.visible = false;
 ???
  


  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = ???;
}

function draw() {

  background(backgroundImg);
  textSize(20);
  fill("black")
  text("Score: "+ score,30,50);
  
  
  if (gameState===PLAY){
    ??? = score + Math.round(getFrameRate()/60);
    ???= -(6 + 3*score/100);
    
    if((touches.length > 0 || ???) && trex.y  >= height-120) {
      
     ???
       touches = [];
    }
    
    trex.velocityY = trex.velocityY + ???
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    trex.collide(invisibleGround);
    
  
    if(obstaclesGroup.???(trex)){
        
        ????
    }
  }
  else if (gameState === END) {
    ???
    
    /
    ground.velocityX = ??;
    trex.velocityY = ???;
    obstaclesGroup.setVelocityXEach(???);
    cloudsGroup.setVelocityXEach(???);
    
    
    trex.????("collided",trex_collided);
    
    
    obstaclesGroup.setLifetimeEach(-1);
    cloudsGroup.setLifetimeEach(-1);
    
    if(touches.length>0 || keyDown("SPACE")) {      

      touches = []
    }
  }
  
  
  drawSprites();
}

    
