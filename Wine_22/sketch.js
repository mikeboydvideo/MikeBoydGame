var scream;
var scream2;
var crack;
var pitch;
var glass;
let img = [];
let crk = [];
let face = [];
let go = [];
let errorbar = 50;
var glass_health;
var shake;
var glass_type;
var scale_factor;
var newlevel;
var score;
var breath;


function preload(){
  // Preload sounds, images and font
  font = loadFont('assets/font.ttf');

  scream1 = loadSound("assets/voice1.mp3");
  scream2 = loadSound("assets/voice2.mp3");
  scream3 = loadSound("assets/voice3.mp3");
  scream4 = loadSound("assets/voice4.mp3");
  scream5 = loadSound("assets/voice5.mp3");
  scream6 = loadSound("assets/voice6.mp3");
  scream7 = loadSound("assets/voice7.mp3");

  crack = loadSound("assets/crack2.mp3");
  jingle = loadSound("assets/jingle.mp3");

  img [0] = loadImage("assets/clear01.png");
  img [1] = loadImage("assets/clear02.png");
  img [2] = loadImage("assets/clear03.png");
  img [3] = loadImage("assets/clear04.png");
  img [4] = loadImage("assets/clear05.png");
  img [5] = loadImage("assets/clear06.png");
  img [6] = loadImage("assets/clear07.png");
  img [7] = loadImage("assets/clear08.png");
  img [8] = loadImage("assets/clear09.png");
  img [9] = loadImage("assets/clear10.png");

  crk [0] = loadImage("assets/crack01.png");
  crk [1] = loadImage("assets/crack02.png");
  crk [2] = loadImage("assets/crack03.png");
  crk [3] = loadImage("assets/crack04.png");
  crk [4] = loadImage("assets/crack05.png");
  crk [5] = loadImage("assets/crack06.png");
  crk [6] = loadImage("assets/crack07.png");
  crk [7] = loadImage("assets/crack08.png");
  crk [8] = loadImage("assets/crack09.png");
  crk [9] = loadImage("assets/crack10.png");

  face[0] = loadImage("assets/face1.png");
  face[1] = loadImage("assets/face2.png");
  face[2] = loadImage("assets/face3.png");
  face[3] = loadImage("assets/face4.png");
  face[4] = loadImage("assets/face5.png");
  face[5] = loadImage("assets/face6.png");

  go[0] = loadSound("assets/gameoverfx1.mp3");
  go[1] = loadSound("assets/gameoverfx2.mp3");
  go[2] = loadSound("assets/gameoverfx3.mp3");
  go[3] = loadSound("assets/gameoverfx4.mp3");
  go[4] = loadSound("assets/gameoverfx5.mp3");
  go[0].setVolume(2);
  go[1].setVolume(2);
  go[2].setVolume(2);
  go[3].setVolume(2);
  go[4].setVolume(2);
  punch = loadSound("assets/punch.mp3");

  game_over = loadImage("assets/game_over.png");
}

function setup (){
  createCanvas (800,450);


  resetSketch();

}

function draw() {
  background(209, 220, 224);

  glass.show();
  //console.log(glass_health, newlevel, score);
  //console.log(breath);

  // Generate new Glass after newlevel counter reachers defined number
  if (newlevel > 150) {
    glass = new Glass();
  }

  // Display Score
  fill(255);
  text('Score:', 40, 23);
  text(score, 70, 23);

  // Display Glass Health and breath bars
  rect(width - 110, 20, glass_health * 0.01, 10);
  rect(width - 110, 40, breath / 100, 10);
  text('Glass', width - 140, 23);
  text('Breath', width - 140, 45);
  noFill();
  rect(width - 110, 20, 100, 10);
  rect(width - 110, 40, 100, 10);
  fill(255);

  if (score == 0){
    text( "Click to shout", 285, 35);
    text( "Mouse left/right = pitch", 280, 57);
    text( "Break the glass", 260, 79);
  }



  Slider();
//   if (glass_health == 0){
//     glass = new Glass();
//     //glass_health = 1000;
// }


  }

function keyPressed() {
  resetSketch();
}

function resetSketch(){
  // Initialize Sketch

  // Set volume of sounds
  // scream.setVolume(0.5);
  // crack.setVolume(0.5);

  // Generate new glass object
  glass = new Glass();
  score = 0;
  breath = 10000;

  // Set text characteristics
  textFont(font);
  textSize(15);
  textAlign(CENTER, CENTER);
}
