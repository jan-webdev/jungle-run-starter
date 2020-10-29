const game = new Game();

function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(600, 400); //eine p5 method
  game.setupGame();
}
function draw() {
  clear(); // whipes the screen every 1/60th of a second, to make a moving instead of smearing effect
  game.drawGame();

}

// add the jump function here:
function keyPressed() {
    if (keyCode === 32) {
        game.player.jump();
    }
}
