song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX =0;
rightWristY = 0;


function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function modelLoaded() {
    console.log("Model is Ready");
}

function getPoses() {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWrist ="+ rightWristX+"rightWristY ="+rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 500, 400);
}