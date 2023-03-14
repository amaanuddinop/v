percent=0;
Objects=[];
status="";
function draw(){
image(video,0,0,480,380);
if(status!=""){
    
    
Objectdector.detect(video,gotresult);
for(i=0;i<Objects.length;i++){
    document.getElementById("status").innerHTML="status: object dected";
    document.getElementById("numberofobjacts").innerHTML="numer of object deced are "+Objects.length;
fill("#ff0000");
percent=Math.floor(Objects[i].cofidence*100);

console.log(Objects[i].confidence);
console.log(percent);
text(Objects[i].label+" "+percent+"%",Objects[i].x+15,Objects[i].y+15);
noFill();
stroke("#ff0000");
rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height);
}


}
}
function setup(){
canvas=createCanvas(480,380);
canvas.center();
video.hide();
}
function preload(){
video=createVideo('video.mp4');
}
function start(){
Objectdector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status: decting objects";
}
function modelLoaded(){
    console.log("modelLoaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);

}

function gotresult(error,results){
 if(error){
    console.log(error);
    

}
else{
    console.log(results);
    Objects=results;
}
}
