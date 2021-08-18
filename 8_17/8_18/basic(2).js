/*
//반복문(loop, iterate)
var i =0;
while(i<10){
    document.write('coding everybody <br/>');
    i = i+ 1;

}

//for 문
var i = 0;
for(i =0 ; i < 10; i = i++){
    document.write('coding everybody' +i+ ' <br/>');
}
//-----------------------------------------------
*/
/*
//반복문의 제어(Break, continue)

for(var i = 0; i < 10; i++){
    if (i === 5) {
        continue;
    }
    document.write('coding everybody <br/>');
}

for(var i = 0; i < 10; i++){
    if (i === 5) {
        break;
    }
    document.write('coding everybody <br/>');
}

// 반복문의 중첩 

for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        document.write('coding everybody <br/>');
    }
}
*/
/*
//함수(호출만하면 여기저기 사용가능)
function numbering(){
    i = 0;
    while(i < 10){
        document.write(i);
        i += 1;
    }
}
numbering();
//------------------------------------

function get_member1() {
    return 'kim';
}
function get_member2(){
    return 'juha';
}
console.log(get_member1());
console.log(get_member2());
//------------------------------------

function get_argument(arg){
    return arg;
}
console.log(get_argument(1));
console.log(get_argument(2));
//argument(1)은 arg에 들어간다 1이 마찬가지로 argument(2)도
//arg는 매개변수(parameter)
//---------------------------------------
*/
/*
//배열
get_members(){
    return ['kim','k','im'];
}
var get_members = get_members();
document.write(0);
document.write(1);
document.write(2);

//------------------------------------------
function get_members(){
    return ['egoing', 'k8805', 'sorialgi'];
}
members = get_members();
// members.length는 배열에 담긴 값의 숫자를 알려준다. 
for(i = 0; i < members.length; i++){
    // members[i].toUpperCase()는 members[i]에 담긴 문자를 대문자로 변환해준다.
    document.write(members[i].toUpperCase());   
    document.write('<br />');
}
*/
/*
//배열 추가
var li = ['a','b','c','d','e'];
li.push ('f');
alert(li);

var li = ['a','b','c','d','e'];
li.concat [('f','g')];
alert(li);
//꼬리에 추가

var li = ['a','b','c','d','e'];
li.unshift ('z');
alert(li);
//배열의 시작지점에 추가

var li = ['a','b','c','d','e'];
li.splice ("1","1","x","y");
alert(li);
//인덱스 1번 위치의 값을 지우고 새로추가
*/

