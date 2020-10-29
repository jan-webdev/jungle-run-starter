const game = new Game();  //falls wir hier eine variable rein packen würden in die (), würden wir die im Constructor der Game class nutzen

function preload() {
  game.preloadGame(); //holt alle Bilder und Kram, der in der Preload-Funktion der Class sind
}
function setup() {
  createCanvas(600, 400); //eine p5 method
  game.setupGame();
}
function draw() {  // wird 60x pro sekunde aufgerufen, von sich aus!!
  clear(); // whipes the screen every 1/60th of a second, to make a moving instead of smearing effect
  game.drawGame();

}

// add the jump function here:
function keyPressed() {
    if (keyCode === 32) {
        game.player.jump();
    }
}
