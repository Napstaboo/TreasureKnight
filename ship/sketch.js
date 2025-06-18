let player;
let treasure;
let shipSprite;

function preload() {
  shipSprite = loadImage("../sprites/alakazam.png");
  treasureSprite = loadImage("../sprites/minim.png");
  grass = loadImage("../sprites/wild-grass.png")
}

function setup() {
  createCanvas(1000, windowHeight);
  player = new lilguy(250 , 150, shipSprite, 100);
}

function draw() {
  background(grass);
  getInput();

  rect(player.xPos)
  renderAll();
}

function renderAll(){
  player.render();
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
    this.delta = 35;
    this.dirX = 0;
    this.dirY = 0;
    this.canMove = true;

    this.sprite = sprite;
  }

  move(x, y){
    if (this.canMove){
      this.xPos += x * this.delta;
      this.yPos += y * this.delta;
      this.dirX = x;
      this.dirY = y;
      this.canMove = false;
      setTimeout(() => {  
        // console.log(this.dirX + "," + this.dirY); 
        this.canMove = true; 
      }, 75);
    }
  }


  render() {
    if (abs(this.dirX) > 0){
      var x = this.dirX;
    };
    image(this.sprite, this.xPos, this.yPos, this.size, this.size);
  }

}