
var bullet,thickness,wall;
var speed,weight,bulletRightEdge, WallLeftedge ;








function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 50);
  
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  
  thickness = random(22,83);
  wall = createSprite(1200, 200,thickness, height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("white"); 
  
  

  if(hasCollided(bullet,wall)){
      bulletRightEdge = bullet.x + bullet.width;
      WallLeftedge = wall.x;
      if(bulletRightEdge>=WallLeftedge)
      {
        return true
      }
      return false
  }


  drawSprites();
}
function hasCollided(bullet,wall)
{
  bullet.velocityX = speed;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10&&bullet.isTouching(wall))
  {
    wall.shapeColor=color(255,0,0);
    bullet.velocityX = 0;
  }
  if(damage<10&&bullet.isTouching(wall))
    {
      wall.shapeColor=color(0,255,0);
      bullet.velocityX = 0;





    }










}












