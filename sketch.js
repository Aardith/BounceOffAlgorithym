var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  o1 = createSprite(400, 100, 50, 80);
  o1.shapeColor = "green";
  o1.debug = true;
  fixedRect = createSprite(100, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  o1.velocityY = +5;
}

function draw() {
  background(0,0,0);

bounceOff(movingRect,o1);

   
  drawSprites();
}

