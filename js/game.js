class Game {
  constructor() {
    // define the empty array for the coins here
  }
  preloadGame() {
    console.log("this is the game preload");
    this.backgroundImages = [
      { src: loadImage("../assets/background/plx-1.png"), x:0, speed: 0},
      { src: loadImage("../assets/background/plx-2.png"), x:0, speed: 1},
      { src: loadImage("../assets/background/plx-3.png"), x:0, speed: 2},
      { src: loadImage("../assets/background/plx-4.png"), x:0, speed: 3},
      { src: loadImage("../assets/background/plx-5.png"), x:0, speed: 4},
    ];
    // player preloaden
    this.playerImage = loadImage("../assets/player/bb8.gif");
  }
  setupGame() {
    console.log("this is the game setup");
    //  initialize background + player here
    // NB: we DON'T initialize the coins here because we create them dynamically in the draw
    this.background = new Background();
    this.background.images= this.backgroundImages;
    //der oben deklarierte und vorgeladene player wird nun jetzt initialisiert
    this.player = new Player(this.playerImage);
  }

  drawGame() {
    console.log("this is the game draw");
    this.background.drawBackground();
    this.player.drawPlayer();
    //  call the draw functions for the player + the background
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
  }
}
