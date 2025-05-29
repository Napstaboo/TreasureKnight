let player;
let treasure;
let shipSprite
let treasureSprite

function preload() {
  shipSprite = loadImage("../sprites/close.png");
  treasureSprite = loadImage("../sprites/minim.png");
}

function setup() {
  createCanvas(1000, windowHeight);
  treasure = new lilguy(0, -2000, treasureSprite, 1000);
  player = new lilguy(250 , 150, shipSprite, 100);
}

function draw() {
  background(100, 100, 200)
  getInput();
  
  if (treasure.yPos < 0){
    treasure.move(0, 1)
  }
  rect(player.xPos)
  renderAll();
}

function renderAll(){
  treasure.render()
  player.render()
}


function getInput() {
    if (keyIsDown(LEFT_ARROW) == true) {
      player.move(-1, 0);
    }
  
    if (keyIsDown(RIGHT_ARROW) == true) {
      player.move(1, 0);
    }
    
    if (keyIsDown(UP_ARROW) == true) {
      player.move(0, -1);
    }
  
    if (keyIsDown(DOWN_ARROW) == true) {
      player.move(0, 1);
    }
};


class lilguy {
  
  constructor(x, y, sprite, size) {
    this.xPos = x;
    this.yPos = y;
    this.size = size;
    this.delta = 50;
    this.dirX = 0;
    this.dirY = 0;
    this.canMove = true;

    this.sprite = sprite;
  }

  move(x, y){
    if (this.canMove){
      this.xPos += x * this.delta;
      this.yPos += y * this.delta;
      this.dirX = 0;
      this.dirY = 0;
      this.canMove = false;
      setTimeout(() => {  
        // console.log(this.dirX + "," + this.dirY); 
        this.canMove = true; 
      }, 150);
    }
  }


  render() {
    image(this.sprite, this.xPos, this.yPos, this.size, this.size);
  }

}