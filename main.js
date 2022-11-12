function setup(){
canvas=createCanvas(400,400);
canvas.position(950,200);

cam=createCapture(VIDEO);
cam.position(100,200);
cam.size(400,400);

teachable=ml5.poseNet(cam,test);
teachable.on("pose",getResult);
}


function test(){
    console.log("Teachable machine loaded");
}


function getResult(result){
    if(result.length>0){
        console.log(result);
    }
}

function draw(){
     
}



function preload(){

}