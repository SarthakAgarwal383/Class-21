//creating global variables for rectangles
var MovingRect,FixedRect;
var aa,bb;
var cc,dd,ee;


function setup() {
  createCanvas(800,400);
  //creating sprites for rectangles
  FixedRect=createSprite(100, 100, 50, 50);
  FixedRect.shapeColor="red";

  MovingRect=createSprite(300,300,50,50);
  MovingRect.shapeColor="yellow";

  aa=createSprite(550,200,50,50);
  aa.shapeColor="blue";
  aa.velocityX=-5;

  bb=createSprite(150,200,40,40);
  bb.velocityX=5;
  bb.shapeColor="green";

  cc=createSprite(100,300,50,50);
  cc.shapeColor="pink";

  dd=createSprite(700,100,50,50);
  dd.shapeColor="aqua";

  ee=createSprite(700,300,50,50);
  ee.shapeColor="red";
}

function draw() {
  background(0);  
//allowing the MovingRect to move with Mouse
MovingRect.x=mouseX;
MovingRect.y=mouseY;

//writing the conditions to change the color of sprites on their collision
if(istouching(MovingRect,FixedRect)){
  MovingRect.shapeColor="blue";
  FixedRect.shapeColor="green";
}
else{
  FixedRect.shapeColor="red";
  MovingRect.shapeColor="yellow";
}
bounceOff(aa,bb);

if(istouching(MovingRect,cc)){
  MovingRect.shapeColor="blue";
  cc.shapeColor="green";
}
else{
  MovingRect.shapeColor="yellow";
  cc.shapeColor="pink";
}
if(istouching(MovingRect,dd)){
  MovingRect.shapeColor="blue";
  dd.shapeColor="green";

}
else{
  MovingRect.shapeColor="yellow";
  dd.shapeColor="aqua";
}
if(istouching(MovingRect,ee)){
  MovingRect.shapeColor="blue";
  ee.shapeColor="green";
}
else{
  MovingRect.shapeColor="yellow";
  ee.shapeColor="red";
}


  drawSprites();
}
