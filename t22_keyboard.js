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
    rect.rotationSpeed = 0;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
		background ('teal')
if (kb.pressing('left')) {
    // Set sprite's velocity to the left
rect.vel.x = -1;
}
else if (kb.pressing ('right')) {
rect.vel.x = 1
};
if (kb.released('left')) {
    // Set sprite's velocity to zero
rect.vel.x = 0
}
if (kb.released('right')) {
rect.vel.x = 0
}

if (kb.pressing('up')) {
    // Set sprite's velocity to the left
rect.vel.y = -1;
}
else if (kb.pressing ('down')) {
rect.vel.y = 1
};
if (kb.released('up')) {
    // Set sprite's velocity to zero
rect.vel.y = 0
}
if (kb.released('down')) {
rect.vel.y = 0
}
}

/*******************************************************/
//  END OF APP
/*******************************************************/