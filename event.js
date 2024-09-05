window.onload = init;
function init() {
    var image = document.getElementsByTagName("img")
    for (let i = 0; i < image.length; i++) {
        image[i].onclick=showAnswer
    }
    
}
function showAnswer(eventObj) {
    var image =eventObj.target;
    var name = image.id;
    name = name + ".jpg";
    image.src = "image/" + name; 
}