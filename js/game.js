class Game {
  constructor() {
    // define the empty array for the coins here
  }
  preloadGame() {
    console.log("this is the game preload");
    // load in images/gifs here
    this.backgroundImages = [{src=loadImage("../assets/background/plx-2.png")}];
  }
  setupGame() {
    console.log("this is the game setup");
    //  initialize background + player here
    // NB: we DON'T initialize the coins here because we create them dynamically in the draw
    this.background = new Background();
    this.background.images= this.backgroundImages;
  }
  drawGame() {
    console.log("this is the game draw");
    //  call the draw functions for the player + the background
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
  }
}
