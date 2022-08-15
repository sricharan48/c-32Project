const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    
    }



async function getBackgroundImg(){

    var responce = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 var responcejson = await responce.json();
    //console.log (responce);
    
    // write code to fetch time from API
    var datetime = responcejson.datetime;
    hour=datetime.slice(11,13)
    if(hour>=0 &&hour<18){
        bg='sunrise.png'
    }
    else{
        bg='sunset.png'
    }
    backgroundImg= loadImage(bg)
   // console.log (datetime);
  
 
    //change the data in JSON format and store it in variable responseJSON
    

    
    //fetch datetime from responseJSON
    
    var hour = datetime.slice(11,13);
    console.log(hour);

    // slice the datetime to extract hour
    

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
