img="";
status="";

function preload(){
    img= loadImage("India.jpg");
    window.location("1st_index.html")
}
function previous_page(){
window.location("1st_index.html");
}
function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status : Detecting Object";
}

function modelLoaded(){
    console.log("Model Loaded")
    status=true;

}

function gotResult(error, results){
if(error){
    console.log("error")
}
    console.log("results")
}

function draw(){
    fill("#ffffff");
    text("INDIA", 320, 120);
    noFill();
    stroke("#ff0000");
    rect(300, 90, 270, 320);
}

function next(){
    img= loadImage("contry.jpg");
}

function previous(){
    img= loadImage("India.jpg");
}