song1 = "";
song2 = "";

 function preload(){
song1= loadSound("music.mp3");
song2= loadSound("music2.mp3");
}

rightWristX =0;
rightWristY =0;

leftwristX=0;
leftwristY=0;

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.posenet(video,modelloaded);
    posenet.on('pose',gotPoses);
}

function modelloaded(){
    console.log("posenet is intialized" );
}

function draw(){
    image(video,0,0,600,500)
}

function gotPoses(results){
    if (results.length > 0)
    {
    console.log(results);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;

    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;

    }

   
}
