const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var meds,meds_Img;
var bg_img;
var helicopter,helicopterAnim;

function preload() {
  meds_Img = loadImage("medkit.png");
  bg_img = loadImage("background.jpg");

  helicopterAnim = loadAnimation("helicopter1.png","helicopter2.png","helicopter3.png","helicopter4.png");
  
}

function setup() {
  createCanvas(800,500);

  engine = Engine.create();
  world = engine.world;
  
  helicopter = createSprite(200,100,100,100);
  helicopter.scale = 0.2;

  helicopter.addAnimation('helicopter',helicopterAnim);

  var medsOptions = {
    restitution: 1,
    friction:0,
    isStatic: false
  };

  meds = Bodies.circle(400,100,20,medsOption);
  World.add(world,meds);
}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);

  Engine.update(engine);

  if (helicopter.position.x > 1) {
    helicopter.velocityX = 3; 
  }

  else if (helicopter.position.x > 750){
    helicopter.velocityX = -3;
  }
  
  push();
  imageMode(CENTER);
  if(meds !=null){
    image(meds_Img,meds.position.x,meds.position.y,70,70);
  }
  pop();



}

