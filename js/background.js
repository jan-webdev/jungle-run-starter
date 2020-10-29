class Background {
  constructor() {
    // define the image array here
    this.images;
  }

  drawBackground() {
    // define the draw logic for the moving background here
    image(this.images[0].src, 0, 0, width, height) // width/height sind default so gross wie der canvas
  }
}
