/*Interacting with captured data: Mouse, Keyboard, Audio, Web Camera
check:
1. sound input via microphone: https://p5js.org/examples/sound-mic-input.html
2. dom objects like button
3. p5.sound library:
https://github.com/processing/p5.js-sound/blob/master/lib/p5.sound.js
4. Face tracking library: https://github.com/auduno/clmtrackr
5. p5js + clmtracker.js: https://gist.github.com/lmccart/2273a047874939ad8ad1
*/
let button;
let mic;
let ctracker;
let capture;

function setup() {
  createCanvas(640, 480);
  //web cam capture
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  // Audio capture
  mic = new p5.AudioIn();
  mic.start();

  //setup face tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(capture.elt);

  //styling the like button with CSS
  button = createButton('like');
  button.style("display", "inline-block");
  button.style("color", "#fff");
  button.style("padding", "5px 8px");
  button.style("text-decoration", "none");
  button.style("font-size", "0.9em");
  button.style("font-weight", "normal");
  button.style("border-radius", "3px");
  button.style("border", "none");
  button.style("text-shadow", "0 -1px 0 rgba(0, 0, 0, .2)");
  button.style("background", "#4c69ba");
  button.style(
    "background","-moz-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style(
    "background","-webkit-gradient(linear, left top, left bottom, \
      color-stop(0%, #3b55a0))");
  button.style(
    "background","-webkit-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style(
    "background","-o-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style(
    "background","-ms-linear-gradient(top, #4c69ba 0%, #3b55a0 100%)");
  button.style(
    "background","linear-gradient(to bottom, #4c69ba 0%, #3b55a0 100%)");
  button.style(
    "filter","progid:DXImageTransform.Microsoft.gradient \
    ( startColorstr='#4c69ba', endColorstr='#3b55a0', GradientType=0 )");
  //mouse capture
  button.mouseOut(revertStyle);
  button.mousePressed(change);
}
function draw() {
  //getting the audio data i.e the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  /*map the mic vol to the size of button,
  check map function: https://p5js.org/reference/#/p5/map */
  button.size(floor(map(vol, 0, 1, 40, 450)));

  //draw the captured video on a screen with the image filter
  image(capture, 0,0, 640, 480);
  filter(INVERT);

  let positions = ctracker.getCurrentPosition();
  //check the availability of web cam tracking
  if (positions.length) {
     //point 60 is the mouth area
    button.position(positions[60][0]-20, positions[60][1]);
    /*loop through all major points of a face
    (see: https://www.auduno.com/clmtrackr/docs/reference.html)*/
    for (let i = 0; i < positions.length; i++) {
       noStroke();
       //color with alpha value
       fill(map(positions[i][0], 0, width, 100, 255), 0, 0, 120);
       //draw ellipse at each position point
       ellipse(positions[i][0], positions[i][1], 5, 5);
    }
  }
}

function change() {
  button.style("background", "#2d3f74");
  userStartAudio();
}
function revertStyle(){
  button.style("background", "#4c69ba");
}
//keyboard capture
function keyPressed() {
  //spacebar - check here: http://keycode.info/
  if (keyCode === 32) {
    button.style("transform", "rotate(180deg)");
  } else {   //for other keycode
    button.style("transform", "rotate(0deg)");
  }
}
