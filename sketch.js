const Engine=Matter.Engine
const World =Matter.World
const Bodies=Matter.Bodies

var engine , world ;

function setup() {
  createCanvas(400,400);
 engine=Engine.create()
 world=engine.world 

 var options={isStatic:true }
 
 ground=Bodies.rectangle(200,380,400,20,options);
 World.add(world,ground);
 console.log(box);

 var balloptions={
   restitution:0.5
 }
 ball=Bodies.circle(200,100,30,balloptions);
 World.add(world,ball)
}

function draw() {
  background("grey");
  Engine.update(engine)
  fill ("red");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20) ;
  
  fill("green")
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30)
  drawSprites();
}