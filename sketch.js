var hypnoticball;
var hypnotic1ball,square;
var database;
var position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    square = createSprite(200,200,40,40);
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
    if(mouseX < 200){
        hypnoticball.shapeColor = "blue";
        hypnotic1ball.shapeColor = "blue";
    }
    else{
        hypnoticball.shapeColor = "red";
        hypnotic1ball.shapeColor = "red";
    }
    drawSprites();
}


function readPosition(data){
position=data.val();
hypnoticball.x=position.x;
hypnoticball.y=position.y;
ball1.x = position.x;
ball1.y = position.y;
}
function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}