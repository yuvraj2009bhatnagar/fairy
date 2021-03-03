const Engine =  Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;


var engine , world;
var object ;
var ground ;
var fairy,fairyImg;
var 



function setup() {
  var Canvas = createCanvas(400,400);
  


engine = Engine.create(200,340,20,20,);
world = engine.world;

fairy = createSprite(200,200,30,30);


star = Bodies.rectangle(300,130,10,10,options);
World.add(world,star)
var options ={

isStatics: true,

}
ground= Bodies.rectangle(200,390,600,20,Option)
World.add(world,ground)
var Option={

  isStatics: true,

}




function draw() {
  background("black");

Engine.update(engine);


Engine.update(engine);
rect(ground.position.x,ground.position.y,600,20)


if(starBody.position.y > 470){

}


keyLeft();
  keyRight();
keydown();

 drawSprites();
  
}

function keyLeft(){

if(keyWentDown("LEFT_ARROW")){

	fairy.velocityX = -3;

}
	
if(keyWentUp("LEFT_ARROW")){
	
	fairy.velocityX = 0;

}



}
function keyRight(){

	if(keyWentDown("RIGHT_ARROW")){
	
	fairy.velocityX = 3;
	}
		if(keyWentUp("RIGHT_ARROW")){
	
			fairy.velocityX = 0;
	
    
}
	
	
}
}
function keydown(){

	if(keyWentDown("DOWN_ARROW")){
	
    Matter.Body.setStatic(body, false);

	}
	
}
