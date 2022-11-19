
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ball 
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_option = {
	restitution:0.3,
	friction:0,
	density:1.2
}
Ball=Bodies.circle(100,100,20,ball_option)
World.add(world,Ball)
 ground= Bodies.rectangle(600,690,1200,10,{isStatic:true})
World.add(world,ground)
ground1= Bodies.rectangle(800,600,20,170,{isStatic:true})
World.add(world,ground1)
ground2= Bodies.rectangle(1100,600,20,170,{isStatic:true})
World.add(world,ground2)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  rect(ground.position.x,ground.position.y,1200,10)
  rect(ground1.position.x,ground1.position.y,20,170)
  rect(ground2.position.x,ground2.position.y,20,170)
  fill("white")
  ellipse(Ball.position.x, Ball.position.y, 20, 20)
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(Ball, Ball.position, {x:85, y:-85})
	}
}


