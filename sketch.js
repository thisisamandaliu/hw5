var c1;
var c2;
var c3;
var c4;
var c5;
var hand;
var handclick;
var h1 = 100;
var h2 = 100;
var h3 = 200;
var h4 = 200;
var h5 = 200;
var speed1 = 0;
var speed2 = 0;
var speed3 = 0;
var speed4 = 0;
var speed5 = 0;

function preload() {
  c2 = loadImage('chicken_1_close.png');
  c3 = loadImage('chicken_4_close_chicken_1.png');
  c5 = loadImage('chicken_5_close_chicken_1.png');
  c4 = loadImage('chicken_2_close.png');
  c1 = loadImage('chicken_3_close_chicken_1.png');

  c2o = loadImage('chicken_1_open.png');
  c3o = loadImage('chicken_4_open_chicken_1.png');
  c5o = loadImage('chicken_5_open_chicken_1.png');
  c4o = loadImage('chicken_2_open.png');
  c1o = loadImage('chicken_3_open_chicken_1.png');

  bg = loadImage('chicken_background-01.png');
  hand = loadImage('hand.png');
  handclick = loadImage('handclick.png');
  s2 = loadSound('02.wav');
  s3 = loadSound('03.wav');
  s4 = loadSound('04.wav');
  s5 = loadSound('05.wav');
  s6 = loadSound('06.wav');
}

function setup() {
  createCanvas(400, 400);
  noCursor();

}

function draw() {
  image(bg, 0, 0, 400, 400);
  image(c1, 40, h1, 200, 400);
  image(c2, 160, h2, 200, 400);
  image(c3, -20, h3, 200, 400);
  image(c4, 100, h4, 200, 400);
  image(c5, 220, h5, 200, 400);

  h1 = h1 + speed1;
  h2 = h2 + speed2;
  h3 = h3 + speed3;
  h4 = h4 + speed4;
  h5 = h5 + speed5;

  if (mouseIsPressed) {
    image(handclick, mouseX, mouseY, 50, 50);
    //top left #1
    if (mouseX < 170 && mouseX > 100 && mouseY < 250 && mouseY > 130) {
      speed1 = -1;
      if (!s2.isPlaying()) {
        s2.play();
      }
    }
    //top right #2
    if (mouseX < 270 && mouseX > 200 && mouseY < 250 && mouseY > 130) {
      speed2 = -1;
      if (!s5.isPlaying()) {
        s5.play();
      }
    }
    //bottom left #3
    if (mouseX < 130 && mouseX > 30 && mouseY < 400 && mouseY > 250) {
      speed3 = -1;

      if (!s3.isPlaying()) {
        s3.play();
      }
    }
    //bottom middle #4  
    if (mouseX < 250 && mouseX > 150 && mouseY < 400 && mouseY > 250) {
      speed4 = -1;
      if (!s6.isPlaying()) {
        s6.play();
      }
    }
    //bottom right #5  
    if (mouseX < 350 && mouseX > 250 && mouseY < 400 && mouseY > 250) {
      speed5 = -1;
      if (!s4.isPlaying()) {
        s4.play();
      }
    }
  }
  //when release mouse, this image
  else{
    image(hand, mouseX, mouseY, 50, 50);
  }
  //let chicken go back when hit a certain height
  if (h1 < 60) {
    speed1 = 1;
  }
  if (h2 < 50) {
    speed2 = 1;
  }

  if (h3 < 80) {
    speed3 = 1;
  }
  if (h4 < 150) {
    speed4 = 1;
  }
  if (h5 < 120) {
    speed5 = 1;
  }
  //let chicken stop when go back to original position  
  if (h1 > 100) {
    speed1 = 0;
    h1 = 100;
  }
  if (h2 > 100) {
    speed2 = 0;
    h2 = 100;
  }
  if (h3 > 200) {
    speed3 = 0;
    h3 = 200;
  }
  if (h4 > 200) {
    speed4 = 0;
    h4 = 200;
  }
  if (h5 > 200) {
    speed5 = 0;
    h5 = 200;
  }
  //keep their mouth open while moving
  //also print clicked cursor over the chicken
  if (speed1 > 0 || speed1 < 0) {
    image(c1o, 40, h1, 200, 400);
    image(c2, 160, h2, 200, 400);
    image(c3, -20, h3, 200, 400);
    image(c4, 100, h4, 200, 400);
    image(c5, 220, h5, 200, 400);
    image(handclick, mouseX, mouseY, 50, 50);
  }
   if (speed2 > 0 || speed2 < 0) {
    image(c1, 40, h1, 200, 400);
    image(c2o, 160, h2, 200, 400);
    image(c3, -20, h3, 200, 400);
    image(c4, 100, h4, 200, 400);
    image(c5, 220, h5, 200, 400);
    image(handclick, mouseX, mouseY, 50, 50);
  }
  if (speed3 > 0 || speed3 < 0) {
   image(c1, 40, h1, 200, 400);
    image(c2, 160, h2, 200, 400);
    image(c3o, -20, h3, 200, 400);
    image(c4, 100, h4, 200, 400);
    image(c5, 220, h5, 200, 400);
    image(handclick, mouseX, mouseY, 50, 50);
  }

  if (speed4 > 0 || speed4 < 0) {
    image(c1, 40, h1, 200, 400);
    image(c2, 160, h2, 200, 400);
    image(c3, -20, h3, 200, 400);
    image(c4o, 100, h4, 200, 400);
    image(c5, 220, h5, 200, 400);
    image(handclick, mouseX, mouseY, 50, 50);
  }
   if (speed5 > 0 || speed5 < 0) {
   image(c1, 40, h1, 200, 400);
    image(c2, 160, h2, 200, 400);
    image(c3, -20, h3, 200, 400);
    image(c4, 100, h4, 200, 400);
    image(c5o, 220, h5, 200, 400);
    image(handclick, mouseX, mouseY, 50, 50);
  }
}
