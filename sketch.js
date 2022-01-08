var guitar_player;
var gameOver;
var other_band_players;

var stage;

var left_arrow;
var right_arrow;
var up_arrow;
var down_arrow;

var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){

  guitar_player = loadImage("Remove background (1).png");
  gameOver = loadImage("gameOver.png");
  other_band_players = loadImage("other band players.jpg");
  

  stage = loadImage("stage.jpg");

  left_arrow = loadImage("Remove background (2).png");
  right_arrow = loadImage("right side arrow.png");
  up_arrow = loadImage("Remove background (3).png");
  down_arrow = loadImage("Remove background (4).png");
}

function setup() {

  
  createCanvas(windowWidth, windowHeight);

  player = createSprite(970,454, 84,20,15);
  player.addImage(guitar_player);

  player.scale = 0.5;

  leftarrow = createSprite(1499,323,20,15);
  leftarrow.addImage(left_arrow);

  leftarrow.scale = 0.3;

  rightarrow = createSprite(1789, 320, 20, 15);
  rightarrow.addImage(right_arrow);

  rightarrow.scale = 0.5;

  uparrow = createSprite(1640, 187, 20, 15);
  uparrow.addImage(up_arrow);

  uparrow.scale = 0.3;

  downarrow = createSprite(1642, 457, 20, 15);
  downarrow.addImage(down_arrow);

  downarrow.scale = 0.7;


  game_over = createSprite(961, 397, 20, 15);
  game_over.addImage(gameOver);

 

  
}

function draw() {
  background(stage);

  text(mouseX + ','+ mouseY, 10, 15);

 

  if(gameState === PLAY){

    game_over.visible = false;


  }
  drawSprites();
}


