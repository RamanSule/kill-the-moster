const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
ground = new Ground(1500, 500,3000,50)
b1 = new Box(600,400,50,50 )
b2 = new Box(600,350,50,50 )
b3 = new Box(600,300,50,50 )
b4 = new Box(600,250,50,50 )
b5 = new Box(600,200,50,50 )
b6 = new Box(650,400,50,50 )
b7 = new Box(650,350,50,50 )
b8 = new Box(650,300,50,50 )
b9 = new Box(650,250,50,50 )
b10 = new Box(650,200,50,50 )
hero = new Hero(200,400,50)
monster = new Monster(750,200,100)
rope= new Rope(hero.body, {x:200, y:100});
}

function draw() {
  background(bg);
  Engine.update(engine);
 ground.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 hero.display()
 monster.display()
 rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}