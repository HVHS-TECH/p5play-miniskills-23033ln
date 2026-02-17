/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
	function preload() {

  imgBG   = loadImage('../assets/images/dtec_favicon.PNG');

  imgFace = loadImage('../assets/images/dtec_favicon.PNG');

}
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1000, 1000);
ball_1.image = (imgFace);

imgFace.resize(50, 50)
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