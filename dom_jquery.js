/*
var clickHandler = function (event) {
    console.log("Клик! " + event.pageX + " " + event.pageY);
};
$("body").click(clickHandler)
 */
let numbers=0
let clickhandler= (function (){

    $('heading').text('numbers');
    numbers++;
    if (numbers===10){
        clearInterval(interval1)
    }
});
$("heading").click(clickhandler)
let offSet = 0
let direction = "вправо"
let movingHeader = function (){
    if (direction==="вправо"){
        $("#heading").offset({left: offSet});
        offSet++;
        if (offSet>200) {
            offSet=0;
            direction="вниз"
        }

    }
    else if (direction==="вниз"){
        $("#heading").offset({top: offSet});
        offSet++;
        if (offSet>200){
            offSet=200
            direction="влево"
        }
    }
    else if (direction==="влево"){
        $("#heading").offset({left: offSet});
        offSet--;
        if (offSet<0){
            offSet=200
            direction="вверх"
        }
    }
    else if (direction==="вверх"){
        $("#heading").offset({top: offSet});
        offSet--;
        if (offSet<0){
            offSet=0
            direction="вправо"
        }
    }
    }
    let interval1 = setInterval(movingHeader, 30);
