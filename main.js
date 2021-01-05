noseX=0;
noseY=0;

function preload(){
    lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup(){
    canvas=createCanvas(500,360);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,500,360);

    image(lipstick, noseX, noseY,60,30);
}
function modelLoaded(){
    console.log("model has loaded");
   }
   function gotPoses(results){
       if(results.length>0)
       {
           console.log(results);
           noseX=results[0].pose.nose.x-100;
           noseY=results[0].pose.nose.y+2;
       }
   }

   function download(){
       save('image.png');
   }