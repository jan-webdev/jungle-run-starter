class Player {
  constructor(playerImage) {
    // set the height, the initial location + the jump controls for the player
    this.image = playerImage; // hier wird das in der game.js definierte bild reingeladen
    this.height = 140;
    this.width = 100;
    this.x = 0;
    this.y = height - this.height;// alles wird ab oben links gezeichnet, daher diese rechnung, damit der character weder im boden steckt noch an der decke klebt
    this.gravity = 0.2;
    this.velocity = 0;
    //   }
  }
  drawPlayer() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    // draw the player + jump logic with velocity

    // if player goes off the page
    if (this.y >= height-this.height) {
      this.y = height - this.height;
    }
    image(this.image, this.x, this.y); // Reihenfolge wichtig, erst Mathe checken, dann image laden, damit es nicht abhaut
  }

  // add a jump function
  jump() {
    if (this.y == height - this.height) {
         this.velocity = -10;
    console.log("this will be the jump"); 
    }

  }
}
