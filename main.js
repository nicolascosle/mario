noseX=0;
noseY=0;

function preload (){
	mario_jump=loadSound("jump.wav");
	mario_kick=loadSound("kick.wav");
	mario_coin=loadSound("coin.wav");
	mario_die=loadSound("mariodie.wav");
	mario_gameover=loadSound("gameover.wav");
	world_start=loadSound("world_start.wav");

	setSprites();
	MarioAnimation();
}

function setup (){
	canvas=createCanvas(900,350);
canvas.parent("canvas");
instializeInSetup(mario);
video=createCapture(VIDEO);
video.size(900,300);

poseNet=ml5.poseNet(video,ml);
poseNet.on("pose",pn);
}

function ml (){
	console.log("el poseNet se inicialiso")
}

function pn (ide){
if (ide.length>0){
	console.log(ide);
noseX=ide[0].pose.nose.x;
noseY=ide[0].pose.nose.y;
}
}

function draw(){
game();
}