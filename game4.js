var input="javascript is awesome";
for (i=0;i<input.length;i++){
    if (input[i]==="a") {
        output+="4";
    }
    else if (input[i]==="e") {
        output+="3";
    }
    else if (input[i]==="o"){
        output+="0";
    }
    else if (input[i]==="i"){
        output+="1";
    }
    else {
        output+=input[i];
    }

};
var output="";
console.log(output)
var name = prompt("Как вас зовут?");
alert("Привет, " + name);
var age= prompt("Сколько вам лет?")
if (age>=18){
    alert("Вам больше 18, проходите")
}
else {
    alert("Вам нельзя посещать этот сайт, вам меньше 18")
}
var zagadka= prompt("Два конца, два кольца. Гвоздик по середине")
if (zagadka==="ножницы"){
    alert("Ответ верный")
}
else {
    alert("Ответ не верный")
}
var letter = confirm("Ты отправил письмо?");
if (letter){
    alert("true");
}
else {
    alert("false");
}
var a=prompt("Введите вашу заработную плату");
console.log(a)
var b=((a/100)*15) + a*1
alert("Премия 15%-"+b);
var c=((b/100)*90)
alert("Налог 10%-"+c);
var d=c-190
alert("поход в магазин 190 рублей-"+d);
var s=d/2
console.log(s)
alert("Жене отдал половину-"+s);