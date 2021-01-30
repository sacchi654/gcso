var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1500, 400);


	speed=random(50,90)
	weight=random(400,1400)


	car=createSprite(40, 100, 50,50);   

	car.velocityX = speed;

	car.shapeColor=color(255);


  
  	wall=createSprite(1400,200, 60, height/2)
  	wall.shapeColor=color(70,70,70)
}


function draw() {
  background(0);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}