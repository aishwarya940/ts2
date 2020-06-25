const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, ground, box1, polygon, slingshot;

function setup() {

  createCanvas(900,400);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(400, 395, 800, 10);
   stand = new Ground(500, 300, 400, 10);

  box1 = new Box(500, 250, 50, 50);
  box2 = new Box(450, 250, 50, 50);
  box3 = new Box(550, 250, 50, 50);
  box4 = new Box(475, 200, 50, 50);
  box5 = new Box(525, 200, 50, 50);
  box6 = new Box(500, 150, 50, 50);

  polygon = Bodies.circle(100, 200, 50);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon,{x:100, y:200});
  
}

function draw() {

  background(0);

 // Engine.update(engine);

  ground.display();
  stand.display();

  box1.display();
  box2.display();
  box3.display();
 
  box4.display();
  box5.display();
  box6.display();
  
  ellipse(this.polygon.position.x,this.polygon.position.y,50,50)
  
  slingshot.display();

 // drawSprites();
  
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
      slingshot.attach(this.polygon);
  }
}

