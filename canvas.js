let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
/*var color1 = ctx.fillStyle = "black";
ctx.fillRect(0,0,40,100);
var color2 = ctx.fillStyle = "yellow";
ctx.fillRect(40,0,40,100);
var color2 = ctx.fillStyle = "red";
ctx.fillRect(80,0,40,100);*/
/*ctx.lineWidth=4;
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(30,10);
ctx.lineTo(30,30);
ctx.lineTo(10,30);
ctx.lineTo(10,10);
ctx.moveTo(20,30);
ctx.lineTo(20,80);
ctx.lineTo(10,100);
ctx.moveTo(20,80);
ctx.lineTo(30,100);
ctx.moveTo(20,60);
ctx.lineTo(5,40);
ctx.moveTo(20,60);
ctx.lineTo(35,40);
ctx.stroke();*/
/*ctx.fillStyle = "blue";
ctx.fillRect(20,20,40,30);
ctx.strokeStyle="blue"
ctx.lineWidth=4;
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(40,5);
ctx.lineTo(60,20);
ctx.fill();
ctx.stroke();*/
/*ctx.lineWidth=4;
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(50,50,20,Math.PI,Math.PI*1.5,false);
ctx.stroke();
ctx.beginPath();
ctx.arc(100,50,20,Math.PI,0,false);
ctx.stroke();
ctx.beginPath();
ctx.arc(150,50,20,0,Math.PI*2,false);
ctx.stroke();
ctx.beginPath();
ctx.arc(200,50,20,Math.PI*1.5,Math.PI,false);
ctx.stroke();*/
/*circle(100,100,50,0)
circle(100,225,75,0)
circle(100,225,5,true)
circle(100,200,5,true)
circle(100,250,5,true)
circle(85,90,5,true)
circle(115,90,5,true)
ctx.fillStyle="orange"
ctx.lineWidth=0.01;
circle(100,110,7,true)*/
/*
var circle = function (x, y, radius,logic){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2,false);

    if (logic===true){
        ctx.fill();
        ctx.stroke();
    }
    else {
        ctx.stroke();
    }
}
ctx.beginPath();

ctx.fillRect(20,20,40,30);
ctx.stroke();*/
/* ctx.lineWidth=4;
 ctx.fillStyle("Yellow")*/
/*var circle = function (x, y, radius,fillCircle){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI*2,false);

    if (fillCircle){
        ctx.fill();
    }
    else {
        ctx.stroke();
    }
};

var drawBee = function(x,y){
    ctx.lineWidth=2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle="Gold";
    circle(x, y, 8, true);
    circle(x, y, 8, false);
    circle(x-5, y-11, 5, false);
    circle(x+5, y-11, 5, false);
    circle(x-2, y-1, 2, false);
    circle(x+2, y-1, 2, false);
};
var update = function (coordinate){
    var offset = Math.random() * 4 - 2;
    coordinate+= offset;
    if (coordinate>200){
        coordinate = 200;
    }
    if (coordinate<0){
        coordinate=0;
    }
    return coordinate;
};
setInterval(function(){
    ctx.clearRect(0,0,400,400);
    drawBee(x, y);
    x = update(x);
    y = update(y);
    ctx.strokeRect(0,0,400,400);
}, 30);
var x = 100;
var y = 100;*/
let colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
let RandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};

let Ball = function () {
    this.x = 100;
    this.y = 100;
    this.xSpeed = Math.random() * -5;
    this.ySpeed = Math.random() * 5;
};

let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fillStyle = RandomWord(colors);
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

Ball.prototype.draw = function(){
    circle(this.x,this.y,3,true);
};

Ball.prototype.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function(){
    if (this.x < 0 || this.x >400){
        this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y >400){
        this.ySpeed = -this.ySpeed;
    }
};
new Ball();
let balls = [];
for (let i = 0; i < 10; i++) {
    balls[i] = new Ball();
}

setInterval(function(){
    ctx.clearRect(0,0,400,400);
    for (let i = 0; i < 10; i++){
        balls[i].draw();
        balls[i].move();
        balls[i].checkCollision();
    }

    ctx.strokeRect(0,0,400,400);
}, 30);
