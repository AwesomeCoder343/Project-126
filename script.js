function preload(){
   song1=loadSound("music.mp3");
   song2=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    canvas.hide();
    video=createCapture(VIDEO);
}
function draw(){
    image(video, 0,0,600,600);
}