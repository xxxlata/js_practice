/*
//유효범위(scope) -변수의 수명
var vscope = 'global';
function fscop(){
    vscope ='local';
    console.log(vscope);
}
fscop();
//--------------------------------------
function a () {
    i = 0;
}
for(var i = 0; i <5; i++){
    a();
    document.write(i);
}
//전역변수와 지역변수의 이름이 같기때문에 결과 무한반복
*/
//-------------------------------------------
/*
//전역변수사용
MYAPP = {}
MYAPP.calculator = {
    'left' : null,
    'right' : null
}
MYAPP.coordinate = {
    'left' : null,
    'right' : null
}
 
MYAPP.calculator.left = 10;
MYAPP.calculator.right = 20;
function sum(){
    return MYAPP.calculator.left + MYAPP.calculator.right;
}
document.write(sum());
//------------------------------------------
var i = 5;
function a() {
    var i =10;
    b();
}
function b(){
    document.write(i);

}
a();
*/
/*
//값으로서의 함수
var a =function(){}
//객체의 속성(property) 값으로 담겨진 함수를 메소드(method)라고 부른다.
//---------------------------------------------------------------
//리턴값으로의 함수의 사용
function cal(mode){
    var funcs = {
        'plus' : function(left, right){return left + right},
        'minus' : function(left, right){return left - right}
    }
    return funcs[mode];
}
alert(cal('plus')(2,1));
alert(cal('minus')(2,1));

//---------------------------------------------------------
//배열으로서의 함수의 사용
var process = [
    function(input){ return input + 10;},
    function(input){ return input * input;},
    function(input){ return input / 2;}
];
var input = 1;
for(var i = 0; i < process.length; i++){
    input = process[i](input);
}
alert(input);

//-------------------------------------------------
var numbers = [20, 10,9,8,7,6,5,4,3,2,1];
var sortfunc = function(a,b){
    console.log(a,b);//순차적으로 둘 씩 비교
    if(a>b){
        return 1;
    }else if (a < b){
        return -1;

    }else{
        return 0;
    }
}
console.log(numbers.sort(sortfunc));
//----------------------------------------------------
function sortNumber(a,b){
    // 위의 예제와 비교해서 a와 b의 순서를 바꾸면 정렬순서가 반대가 된다.
    return b-a;
}
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
console.log(numbers.sort(sortNumber)); 
//-----------------------------------------------------------
*/
/*
function factory_movie(title){
    return {
        get_title : function () {
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('공걱기동대');
matrix = factory_movie('Matrix');

console.log(ghost.get_title());
console.log(matrix.get_title());

//----------------------------------------------------

var person = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}
document.write(person.introduce());

//-------------------------------------------------------

function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");
 
var p2 = new Person('leezche');
document.write(p2.introduce());
*/
/*
//----------------------------------------
function func() {
    if (window === this){
        console.log('window === this');
    }
}

//-----------------------------------------
var o = {
    function : function() {
        if(o === this){
            console.log('o === this');
        }
    }
}
o.func();
//-----------------------------------------
var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}
func();
func.apply(o);
func.apply(p);

//-------------------------------------------
function Person(name){
    this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
    return 'My name is '+this.name; 
}
 
function Programmer(name){
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function(){
    return "hello world";
}
 
var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");
document.write(p1.coding()+"<br />");
 
//-------------------------------------------

function Ultra(){}
Ultra.prototype.ultraProp = true;
 
function Super(){}
Super.prototype = new Ultra();
 
function Sub(){}
Sub.prototype = new Super();
 
var o = new Sub();
console.log(o.ultraProp);
//------------------------------------------
*/
Object.prototype.contain = function(neddle) {
    for(var name in this){
        if(this[name] === neddle){
            return true;
        }
    }
    return false;
}
var o = {'name':'egoing', 'city':'seoul'}
console.log(o.contain('egoing'));
var a = ['egoing','leezche','grapittie'];
console.log(a.contain('leezche'));


