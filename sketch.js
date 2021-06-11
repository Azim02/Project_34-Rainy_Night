//constracting Matter -
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter .Constraint;

//declaring variables-
var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var night;
var Thunder, thunder1, thunder2, thunder3, thunder4;
var thunderCreatedFrame = 0;

//function to load Images, Animations, Sounds, etc.. - 
function preload(){

  //loading Images

  night = loadImage("rainynight.jpg");
  thunder1 = loadImage("1.png");
  thunder2 = loadImage("2.png");
  thunder3 = loadImage("3.png");
  thunder4 = loadImage("4.png");
}

//setUp function -

function setup(){
   
  //creating the canvas
  var Canvas = createCanvas(500,700);

  //creating the engine and the world
  engine = Engine.create();
  world = engine.world;

  //creating the umbrella
  umbrella = new Umbrella(200,500);  

  //creating rain drops using a for loop -
  for(var i = 0; i < maxDrops; i++){
    drops.push(new Drops(random(0,500), random(0,500)));
 }
}

//draw function -

function draw(){

 //updating the engine
 Engine.update(engine);

 //giving background Image
 background(night); 

 //rounding -
  rand = Math.round(random(1,4));

  //frameCount condition -
  if(frameCount%80 === 0){
      thunderCreatedFrame = frameCount;
      //creating Thunder
      Thunder = createSprite(random(10,370), random(10,30), 10, 10);
      switch(rand){
          case 1: Thunder.addImage(thunder1);
          break;
          case 2: Thunder.addImage(thunder2);
          break; 
          case 3: Thunder.addImage(thunder3);
          break;
          case 4: Thunder.addImage(thunder4);
          break;
          default: break;
      }
      //scaling Thunder
      Thunder.scale = 0.7;
  }

  //destroying Thunder
  if(thunderCreatedFrame + 10 === frameCount && Thunder){
      Thunder.destroy();
  }

//displaying the umbrella
 umbrella.display();

 //using display and update function - 
 for(var i = 0; i < maxDrops; i++){
    drops[i].display();
    drops[i].update();
}
 
//drawing everything
 drawSprites();
}   