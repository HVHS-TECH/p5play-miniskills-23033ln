/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
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

if (kb.pressing('left')) {
    // Set sprite's velocity to the left


}

else if (kb.pressing ('right')) {

   	    

};

if (kb.released('left')) {
    // Set sprite's velocity to zero

	
}
if (kb.released('right')) {

    

}
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
		background ('teal')
	rect.moveTowards(mouseX, mouseY, 1);
if (mouse.presses()) {
rect.moveTo(xPos, yPos, 1);
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/