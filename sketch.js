let player;
let playerimg;
let obsImg;
let bg;
let obstacles = [];
let wordClassifier;
function preload() {
  playerimg = loadImage("player.png");
  obsImg = loadImage("obstacle.png");
  bg = loadImage("background.jpg");
  let options = { probabilityThreshold: 0.85 };
  wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(1200, 800);
  player = new Player();
  wordClassifier.classify(heardWord);
}
function heardWord(error, results) {
  console.log(results[0]);
  if (results[0].label === "up") {
    player.jump();
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bg);

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (player.collided(obs) === true) {
      text("Game-over");
      fill("red");
      noLoop();
    }
  }
  player.show();
  player.move();
}
