
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var hammer;
var stone;
var rubber;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(40,350);
  ground = new Ground(600,height,1200,20);
  stone = new Stone(500,550,100,110);
  rubber = new Rubber(200,550,55);

  
}


function draw() {
  background("cyan");
  Engine.update(engine);

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();

  drawSprites();
 
}



