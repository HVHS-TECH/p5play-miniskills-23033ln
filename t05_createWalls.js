/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
wallLH  = new Sprite(0, height/2, 8, height, 'k');

wallLH.color = 'black';

wallRH  = new Sprite(x, y, w, h, 'k');

wallTop = new Sprite(x, y, w, h, 'k');

wallBot = new Sprite(x, y, w, h, 'k');


ball_1 = new Sprite(width/2, height/2, 50, 'd');

ball_1.color = 'cyan';

ball_1.vel.x = 2;

ball_1.bounciness = 1;

ball_1.friction = 0;

ball_1.drag = 0;
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	
}

/*******************************************************/
//  END OF APP
/*******************************************************/