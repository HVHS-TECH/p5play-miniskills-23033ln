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
	cnv = new Canvas(800, 800);
wallLH  = new Sprite(8, height/2, 8, height, 'k');

wallLH.color = 'yellow';

wallRH  = new Sprite(0, 0, 100, 800, 'k');

wallTop = new Sprite(800, 0, 100, 800, 'k');

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
	background ('teal')
}

/*******************************************************/
//  END OF APP
/*******************************************************/