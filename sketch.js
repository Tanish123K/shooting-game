var background
var ghost,ghost2
var  gunpointer

function preload() {
background1 = loadImage("./assets/background.jpg")
ghost0  = loadImage("./assets/ghost.jpg")
ghost1  = loadImage("./assets/ghost2.png")
gunpointer1 = loadImage("./assets/gun pointer.png")
}

function setup() {

  createCanvas(1400,600);

 ghost= createSprite(100,100,10,10)
ghost.addImage("ghost0",ghost0)
ghost.scale = 0.2

 ghost2 = createSprite(400,400,10,10)
ghost2.addImage("ghost1",ghost1)
 ghost2.scale = 0.2

  gunpointer = createSprite(300,300,10,10)
 gunpointer.addImage("gunpointer1",gunpointer1)
 gunpointer.scale = 0.1


console.log(gunpointer)
}

function draw() {
  background(background1)
  

  if(keyIsDown(LEFT_ARROW)){
   gunpointer.positionX= gunpointer.positionX-4
    }
  drawSprites()
 
 
  }
  