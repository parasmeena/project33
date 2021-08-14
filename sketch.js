var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  
  var engine , world;
var particles = [];
var plinkos = [];
var particle;
var division = [particle];
var line; 

var divisionHeight=300;
var gameState = "play"
var score =0;
var count  = 0;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("0");
  Engine.update(engine)
  textSize(20)
 text("Score : "+score,20,30);
fill(255);

 
textSize(30)
text ("500",5,500);
text ("500",90,500);
text ("500",159,500);
text ("500",250,500);
text ("500",300,500);
text ("100",400,500);
text ("100",430,500);
text ("100",480,500);
text ("200",500,500);
text ("200",550,500);
text ("200",530,500);


ground.display();
IF (gameState =="END") {
background("black");
fill ("green")
textSize(100);
text("GAME OVER",200,400)
} 

for (var k = 0;k < plinkos.length; k++){
  plinkos[k].display();

}
if (particle!=null)
{
  particle.display();

  if (particle.body.position.y>700)





   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
    }}}
