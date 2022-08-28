/* Inpsired by Langton's Ant (1986) by Chris Langton and
Daniel Shiffman: https://tinyurl.com/ShiffmanLangton
other ref: learning: 2d array by Daniel Shiffman:
https://www.youtube.com/watch?v=OTNpiLUSiB4

Modified by Winnie Soon
Logic:
1. draw a grid with your desired size (grid_space) via initializing
a grid structure based on width and height, columns and width
2. set all the cell states as 0 (where 0 =off/white, 1 = on/black)
3. set initial (current) x, y position and direction in the setup()
4. logic starts - in the draw():
  - based on the current position to check if the cell
    hits the edges (width and height)
  - check the current state of the cell against the rules
  (2 rules in total and those also define the on/off state of the cell)
  - change color of the cell
  - update corresponding/latest ant's direction + state
  - move to next cell and loop again within #4
  - *'grid_space' needs to be dividable, as an integer, by the width and height of the canvas
*/

 //e.g 4, 5, 10 need to be dividable by the w and h of the canvas
let grid_space = 5;
let grid =[]; //on/off state
 //for drawing the grid purpose
let cols, rows;
//current position in terms of rows and columns, not actual pixels
let xPos, yPos;
//current direction of the ant
let dir;
const antUP = 0;
const antRIGHT = 1;
const antDOWN = 2;
const antLEFT = 3;
let offColor;
let onColor;

function setup() {
  createCanvas(1000, 700);
  offColor = color(255);  //offcolor setting
  onColor = color(0); //onColor setting
  background(offColor);
  grid = drawGrid();
  xPos = floor(cols/2);  //initial x position in integer
  yPos = floor(rows/2); //initial y position in integerS
  dir = antUP; //initial direction
  frameRate(20);
}
function draw() {
  /*just for running faster perframe,
  try changing the number e.g 1 instead of 100 */
  for (let n = 0; n < 100; n++) {
   checkEdges();
   let state = grid[xPos][yPos];
   //check the current cell's state
   //rule 1
   if (state == 0) {
    dir++;  // turn right 90°
    grid[xPos][yPos] = 1; //change the currect cell's state to 'on'
    fill(onColor);  //subsequent color change
    if (dir > antLEFT) {
      dir = antUP;  //reset the counter
    }
   //rule 2
   }else{
    dir--;  //turn left 90°
    grid[xPos][yPos] = 0; //change the current cell's state to 'off'
    fill(offColor);  //subsequent color change
    if (dir < antUP) {
      dir = antLEFT; //reset the counter
    }
   }
   rect(xPos*grid_space, yPos*grid_space, grid_space, grid_space);
   nextMove();
  }
}
function drawGrid() {
  cols = width/grid_space;
  rows = height/grid_space;
  let arr = new Array(cols);
  for (let i = 0; i < cols; i++) { //no of cols
    arr[i] = new Array(rows); //2D array
    for (let j = 0; j < rows; j++){ //no of rows
      let x = i * grid_space; //actual x coordinate
      let y = j * grid_space; //actual y coordinate
      stroke(0);
      strokeWeight(1);
      noFill();
      rect(x, y, grid_space, grid_space);
      arr[i][j] = 0;  // assign each cell with the off state + color
    }
  }
  return arr; //a function with a return value of cell's status
}
function nextMove () {
  //check which direction to go next and set the new current direction
  if (dir == antUP) {
    yPos--;
  } else if (dir == antRIGHT) {
    xPos++;
  } else if (dir == antDOWN) {
    yPos++;
  } else if (dir == antLEFT) {
    xPos--;
  }
}
function checkEdges() {
  //check width and height boundary
  if (xPos > cols-1) { //reach the right edge
    xPos = 0;    //go back to the left
  } else if (xPos < 0) {  //reach the left edge
    xPos = cols-1;  //go to the right edge
  }
  if (yPos > rows-1) { //reach the bottom edge
    yPos = 0; //go back to the top
  } else if (yPos < 0) { //reach the top edge
    yPos = rows-1;  //go to the bottom
  }
}
