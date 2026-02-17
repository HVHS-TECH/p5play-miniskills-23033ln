/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
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

ball_1 = new Sprite(600, height/2, 50, 'd');

ball_1.color = 'cyan';


ball_1.bounciness = 1;
ball_1.friction = 1;

ball_1.drag = 1;

cube  = new Sprite(10, 10, 10, 10, 'd');

alienGroup = new Group();
for (i = 0; i < 200; i++) {
  alien = new Sprite(500, 500, 10, 10);
  alien.vel.x =  random(2, 4);
  alien.vel.y = random(2, 4);
  alien.bounciness = 1;
  alien.friction = 0;
  alienGroup.add(alien);
  alienGroup.collides(ball_1, func2Call);
}
function func2Call(_ssss, _ball_1) {
// Delete the alien which was hit
_ssss.remove();

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