const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,200,50,50);
    box2 = new Box(170,100,50,50);
    ground = new Ground(200,385,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("green");
    box1.display();
    fill("blue");
    box2.display();
    fill("grey");
    ground.display();
   
}