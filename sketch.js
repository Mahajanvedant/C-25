const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ball;
var ground;
var b1,b2,b3,b4,b5;
var g1;
var p1,p2;
var l1,l2,l3,l4;
var bird;
var bg;

function preload(){
bg=loadImage("sprites/bg.png");

}

function setup() {
  createCanvas(1200,400);
 myEngine=Engine.create();
myWorld=myEngine.world;

b1=new Box(700,320,70,70);
b2=new Box(920,320,70,70);
b3=new Box(700,240,70,70);
b4=new Box(920,240,70,70);
b5=new Box(810,160,70,70);

g1=new Ground(600,height,1200,20)
p1=new Pig(810,350);
p2=new Pig(810,220);
l1=new Log(810,260,300,PI/2);
l2=new Log(810,180,300,PI/2);
l3=new Log(760,120,150,PI/7);
l4=new Log(870,120,150,-PI/7);


bird=new Bird(200,300);

 

 



}

function draw() {
  background(bg);  

Engine.update(myEngine);

b1.display()
b2.display()

g1.display()
p1.display()
l1.display()
b3.display()
b4.display()
p2.display()
l2.display()
b5.display()
l3.display()
l4.display()

bird.display()


  drawSprites();
}


  
  
    

     

        