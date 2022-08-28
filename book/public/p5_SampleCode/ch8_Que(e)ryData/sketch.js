/* There is Cross-Origin Resource Sharing (CORS) issue with the bigger image,
so here we are using thumbnailLink instead.
credit: Image Lines in Processing by Anna the Crow
https://www.openprocessing.org/sketch/120964 */

let url = "https://www.googleapis.com/customsearch/v1?";
// register: https://developers.google.com/custom-search/json-api/v1/overview
let apikey = "AIzaSyBCHbzWOlC5fMeok7VplmOkBISGnXAoyUM";//"INPUT YOUR OWN KEY";
//get the searchengine ID: https://cse.google.com/all (make sure image is on)
let engineID = "012341178072093258148:awktesmhn9w"; //"INPUT YOUR OWN";
let query = "warhol+flowers";  //search keywords
//check other parameters: https://tinyurl.com/googleapiCSE
let searchType = "image";
let imgSize ="medium";
let request; //full API

let getImg;
let loc;
let img_x, img_y;
let frameBorder = 25;  //each side
let imgLoaded = false;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  frameRate(10);
  fetchImage();
}

function fetchImage() {
  request = url + "key=" + apikey + "&cx=" + engineID + "&imgSize=" + imgSize +
   "&q=" + query + "&searchType=" + searchType;
  console.log(request);
  loadJSON(request, gotData); //this is the key syntax to make API request
}

function gotData(data) {
  getImg = data.items[0].image.thumbnailLink;
  console.log(getImg);
}

function draw() {
  if (getImg){	//takes time to retrieve the API data
      loadImage(getImg, img=> { //callback function
      //draw the frame + image
      push();
      translate(width/2-img.width-frameBorder, height/2-img.height-frameBorder);
      scale(2);
      if (!imgLoaded) {
        noStroke();
        fill(220);
        rect(0, 0, img.width+frameBorder*2, img.height+frameBorder*2);
        image(img, frameBorder, frameBorder);
        imgLoaded = true;
      }else{
        //draw lines
        img.loadPixels();
        img_x = floor(random(0, img.width));
        img_y = floor(random(0, img.height));
        /* The formula to locate the no: x+y*width, indicating a pixel
        from the image on a grid (and each pixel array holds red, green, blue,
        and alpha values), for more see here:
        https://www.youtube.com/watch?v=nMUMZ5YRxHI */
        loc = (img_x+img_y * img.width)*4;
        strokeWeight(0.7);
        //rgb values
        stroke(color(img.pixels[loc], img.pixels[loc + 1], img.pixels[loc+2]));
        line(frameBorder+img_x, frameBorder+img_y,
          frameBorder+img_x, frameBorder+img.height);
      }
      pop();
    });
  }
}
