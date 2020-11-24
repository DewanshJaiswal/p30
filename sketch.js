const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var ground;
var particles= []
var plinkos= []
var division= []
var divisionHeight=300
var divisions

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(240,780,500,20)
	for(var k=0;k<=width;k=k+80){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
	}
	for(var k=0;k<=width;k=k+160){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
	}
	for(var k=0;k<=width;k=k+240){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
	}
	for(var k=0;k<=width;k=k+320){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
	}
	for(var k=0;k<=width;k=k+400){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
	}
	for(var k=0;k<=width;k=k+480){
		divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
	}
	for (var j=40; j<=width;j=j+50) {
		plinkos.push(new Plinko(j,75))
	}
	for (var j=15; j<=width-10;j=j+50) {
		plinkos.push(new Plinko(j,175))
	}
	for (var j=40; j<=width;j=j+50) {
		plinkos.push(new Plinko(j,275))
	}
	for (var j=15; j<=width-10;j=j+50) {
		plinkos.push(new Plinko(j,375))
	}
	for(var j=0;j<plinkos.length;j++){
		plinkos[j].display()
	}
	for(var k=0;k<divisions.length;k++){
		divisions[k].display()
	}
	for(var i=0;i<particles.length;i++){
		particles[i].display()
	}
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER); 
  background(0);
  if(frameCount%60===0){
	  particles.push(new Particle(random(width/2-10,width/2+10),10,10))
  }
  ground.display()
  divisions.display()
  plinkos.display()
  particles.display()
  
}

