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
    cnv = new Canvas(1000, 1000);
wallLH  = new Sprite(500, 1000, 100, 1000, 'k');
wallLH.rotation = 90

wallLH.color = 'yellow';

wallRH  = new Sprite(0, 500, 100, 1000, 'k');

wallRH.color = 'black';

wallTop = new Sprite(1000, 500, 100, 1000, 'k');
wallTop.color = 'green';
world.gravity.y = 10;

wallBot = new Sprite(500, 0, 100, 1000, 'k');
wallBot.rotation = 90

ball_1 = new Sprite(width/2, height/2, 50, 'd');

ball_1.color = 'cyan';


ball_1.bounciness = 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;

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