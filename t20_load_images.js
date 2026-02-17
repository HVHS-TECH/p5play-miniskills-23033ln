/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1000, 1000);
ball_1.image = (imgFace);

imgFace.resize(50, 50)
}
function preload() {

  imgBG   = loadImage('../assets/images/space.jfif');

  imgFace = loadImage('../assets/images/face.png');

}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    background(imgBG); 
}

/*******************************************************/
//  END OF APP
/*******************************************************/