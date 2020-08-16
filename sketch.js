const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drops=[];
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
    world=engine.world;
    for(var i=0;i<200;i++){
      d1=new Raindrop(random(0,800),random(0,400),random(1,15));
     drops.push(d1);
      World.add(world,d1);
}
  

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  for(var j=0;j<drops.length;j++){
    drops[j].display();
    drops[j].update();
}

    
}