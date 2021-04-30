
noseX =0;
noseY =0;

function preload(){
mustache = loadImage("https://i.postimg.cc/SKrFnTrr/8-81018-mustache-png-removebg-preview.png");
monocle = loadImage("https://i.postimg.cc/pTvsNPMV/6464023-preview-removebg-preview.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
   
}
function draw(){
    image(video, 0, 0, 300, 300);
   
    image(mustache, noseX-35, noseY, 65, 30);

}
function take_snapshot(){
    save('myFilterImage.png');
   

}
function gotPoses(results){
    if(results.length > 0){
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
    }
}


