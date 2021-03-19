song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreRightWrist=0;
scoreLeftWrist=0;
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
    fill('red');
    stroke('red');
    if(scoreLeftWrist>0.2){
        circle(leftWristX, leftWristY, 30);
        numberleftWristY=Number(leftWristY)
        removedecimal=floor(numberleftWristY);
        console.log(removedecimal);
        volume=removedecimal/500;
        document.getElementById("div_volume1").innerHTML="Volume = " + volume;
        song.setVolume(volume);
        console.log(volume);
    }
}
function play(){
    console.log("HI");
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}
function modelLoaded(){
    console.log("Model loaded");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
    
        leftWristX=results[0].pose.leftWrist.x;
        console.log(leftWristX);
        leftWristY=results[0].pose.leftWrist.y;
        console.log(leftWristY);
    
        rightWristX=results[0].pose.rightWrist.x;
        console.log(rightWristX);
        rightWristY=results[0].pose.rightWrist.y;
        console.log(rightWristY);
        
    scoreRightWrist=results[0].pose.keypoints[10].score;
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    console.log(scoreLeftWrist);
    console.log(scoreRightWrist);
    }
    }
    