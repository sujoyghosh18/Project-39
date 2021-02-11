var man, manImg, lion, lionImg, bgImg,bg;
var canvas;
var manEnd, lionEnd;
var count = 0;
var gameState = 1;

function preload(){
  bgImg = loadImage("jungle.jpg");
  lionImg = loadAnimation("lion.png","lion1.png","lion2.png","lion3.png");
  manImg = loadAnimation("man.png","man1.png","man2.png","man3.png");
  manEnd = loadImage("man.png");
  lionEnd = loadImage("lion.png");
}

function setup() {
  bg = createSprite(550,350,500,500);
  bg.addImage(bgImg);
  bg.scale = 1.5;
  bg.velocityX = -2;
  bg.x = bg.width/2;

  man = createSprite(300,520,5,5);
  man.addAnimation("running",manImg);

  canvas = createCanvas(displayWidth - 500, displayHeight - 150);

  lion = createSprite(100,580,100,100);
  lion.addAnimation("lionrunning",lionImg);
}

function draw() {
  background("white");
  
  
  if (bg.x < 350) {
    bg.x = bg.width/2;
  }
  
  camera.position.x = man.x;

  if(frameCount>200){
    gameState = 0;
    end();
  }

  if(gameState === 0){

  }

  drawSprites();
}

function end(){
  if(count === 0){
    alert("Game Ended");
    count++;
  }
  man.addImage(manEnd);
  lion.addImage(lionEnd);
}