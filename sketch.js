var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var leftbox1,midbox,rightbox,ground,ball,dust;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;
	leftbox1=new Box(900,375,200,20);
midbox=new Box(1000,335,20,100);
rightbox=new Box(800,335,20,100);
ball=new Paper(200,200,70);
dust=new Dustbin(900,300,150,175);
slingShot = new SlingShot(ball.body,{x:200,y:100});
ground = Bodies.rectangle(width/2,380 , width, 10 , {isStatic:true} );


World.add(world,ground);


	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.run(engine);
  rect(ground.position.x,ground.position.y,1200,10);
//keyPressed();
  
  
  leftbox1.display();
  midbox.display();
  rightbox.display();
  dust.display();
  ball.display();
  slingShot.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
   slingShot.fly();
}


