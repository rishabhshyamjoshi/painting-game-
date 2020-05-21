var hypnoticball;
var hypnotic1ball,square;
var database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    square = createSprite(250,250,0.011,500);
    square.shapeColor = "yellow";
    square1 = createSprite(250,250,0.01,500);
    square1.shapeColor = "yellow";
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";
    hypnotic1ball = createSprite(250,250,10,10);
    hypnotic1ball.shapeColor = "red";
    var hypnoticballposition=database.ref('ball/position');
    hypnoticballposition.on("value",readPosition);
    var hypnotic1ballposition=database.ref('ball/position');
    hypnotic1ballposition.on("value",readPosition);
}

function draw(){
    hypnoticball.x = mouseX;
    hypnotic1ball.x = mouseX;
    hypnotic1ball.y = mouseY;
    hypnoticball.y = mouseY;
    if(mouseX < 255){
        hypnoticball.shapeColor = "blue";
        hypnotic1ball.shapeColor = "blue";
    }
    if(mouseY < 255){
        hypnoticball.shapeColor = "red";
        hypnotic1ball.shapeColor = "red";
    }
    if(mouseY > 255){
        hypnoticball.shapeColor = "green";
        hypnotic1ball.shapeColor = "green";
    }
    if(mouseX > 255){
        hypnoticball.shapeColor = "yellow";
        hypnotic1ball.shapeColor = "yellow";
    }
    drawSprites();
}


function readPosition(data){
position=data.val();
hypnoticball.x=position.x;
hypnoticball.y=position.y;
}
function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}
ball1.y = position.y;

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}
