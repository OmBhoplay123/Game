var fixedRect, movingRect


function setup() {
  createCanvas(1200,600);
  
fixedRect = createSprite(400,300,100,60);
fixedRect.shapeColor = "Cyan";

movingRect = createSprite(500,300,100,60);
movingRect.shapeColor = "Cyan";




}

function draw() {
  background("black");  
 
 
  movingRect.y = mouseY;
  movingRect.x = mouseX;
 
 if( movingRect.x - fixedRect.x < movingRect.width/2+ fixedRect.width/2  &&
  fixedRect.x - movingRect.x < movingRect.width/2+ fixedRect.width/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2+ fixedRect.height/2 &&
  fixedRect.y - movingRect.y < movingRect.height/2+ fixedRect.height/2)
{

  movingRect.shapeColor = "Green";
  fixedRect.shapeColor = "Green";

}

else
{

  movingRect.shapeColor = "Cyan";
  fixedRect.shapeColor = "Cyan";






}











 
 
 
  drawSprites();
}