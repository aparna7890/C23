const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box2 = new Box(200,300,50, 50);
    box1 = new Box(160,100,50, 100);

    ground = new Ground (200, 390, 400, 20)
   
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x)

    box2.display();
    box1.display();
    ground.display();
}