nosex=0;
nosey=0;
rightwristx=0;
leftwristx=0;
difference=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(600,600);
    canvas=createCanvas(600,600);
    canvas.center();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose", getposes);
}
function  modelloaded(){
    console.log("posenet is intitalized");
}
function getposes(results){
    console.log(results);
    if(results.length>0)
    {
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
}
function draw(){
    background("blue");
    document.getElementById("square").innerHTML="width and height of this square= "+difference+"px";
    fill("red");
    textSize(difference);
    text("Krishna",nosex,nosey);}
