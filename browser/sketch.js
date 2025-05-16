let draggables = []

function setup() {
  searchBar = createInput('https://');
  searchBar.position(0.025*windowWidth, 20);
  searchBar.size(0.95*windowWidth, 25)

  guy1 = new draggableGuy(10, 10, 200, 300)
  draggables.push(guy1)
}

function draw() {
  draggables.forEach(draggable => {
    draggable.render();
    //console.log(draggable.xPos)
  });
}

function mouseDragged() {
  draggables.forEach(draggable => {
    draggable.move(mouseX, mouseY);
    //console.log(draggable.xPos);
  });
}

class draggableGuy {
  constructor(x, y, height, width){
    this.xPos = x;
    this.yPos = y;
    this.height = height;
    this.width = width;
  }

  move(x, y){
    //console.log(this.xPos)
    this.xPos = x;
    this.yPos = y;
  }

  render() {
    rect(this.xPos, this.yPos, this.height, this.width);
    console.log(this.xPos)
  }

}