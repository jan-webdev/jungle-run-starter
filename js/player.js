class Player {
  constructor(playerImage) {
    // set the height, the initial location + the jump controls for the player
    this.image = playerImage; // hier wird das in der game.js definierte bild reingeladen
    this.height = 140;
    this.width = 100;
    this.x = 0;
    this.y = height - this.height;// alles wird ab oben links gezeichnet, daher diese rechnung, damit der character weder im boden steckt noch an der decke klebt
    //   }
  }
  drawPlayer() {
    // draw the player + jump logic with velocity
    image(this.image, this.x, this.y);
  }

  // add a jump function
  jump() {
    console.log("this will be the jump")
  }
}
