class Obstacle {
  constructor(coinImage) {
    this.image = coinImage;
    this.x = width;
    this.y = 50;
    this.width = 50;
    this.height = 50;
    // define the images,size and x/y values in the constructor
  }

  //   define the collision function
  collision() {}

  drawObstacle() {
    this.x--; // bei jedem neuen frame wandert die Münze weiter links
    image(this.image, this.x, this.y, this.width, this.height);
  }
}
