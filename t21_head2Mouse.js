/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1000, 1000);
	rect = new Sprite(height/2, width/2, 100, 800, 'd');
    rect.color = 'blue';
    rect.rotationSpeed = 2;
	rect.moveTowards(mouseX, mouseY, p);

if (mouse.presses()) {

rect.moveTo(xPos, yPos, n);

}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background ('teal')
}

/*******************************************************/
//  END OF APP
/*******************************************************/