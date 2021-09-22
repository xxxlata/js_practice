//const 업데이트 불가능한 변수 생성 , let 업데이트 가능 변수 생성
/*
const a = 5;
const b = 2;
let myName = "juha";

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log("hello" + myName);
*/

//null 아무것도 없음 의미 false랑 다름 
/*
const amIFat = null;
console.log(amIFat);
*/

function sayhello(nameOfPerson,age){
    console.log("Hello my name is"+nameOfPerson + "and i am" + age);
}

sayhello('nico',10);
sayhello('dal',23);
sayhello('juha',25);

function plus(a,b){
    console.log(a+b);
}
function divide(a,b){
    console.log(a / b);
}
plus(8,60);
divide(34,54);

const player = {
    name: "juha",
    sayhello: function(otherPersonsName){
        console.log("helo!" + otherPersonsName);
    },
};

player.sayhello("lynn");
player.sayhello("juha");

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)) {
    console.log("please write a number");
    
}else if (age < 18) {
    console.log("you are too young.");
}else {
    console.log("you can drink");
}

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0) {
    console.log("please write a number");
    
}else if (age < 18) {
    console.log("you are too young.");
}else if (age >= 18 && age <= 50){
    console.log("you can drink");
}else if(age > 50 && age <=80){
    console.log("you should exercise");
    
}else if (age >80){
    console.log("you can do whatever you want.");

}
