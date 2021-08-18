/*
//변수의 효용
//100 에 10을 더하고 10을 나누고 다시 10을 빼고 10을 곱하기 
var a = 10;
var b = 100;

console.log(((b+a)/a-a)*a);
*/
/*
//동등연산자,일치연산자 (== , ===) boolean
//== 사용하기

alert(1==2)             //false
alert(1==1)             //true
alert("one"=="two")     //false 
alert("one"=="one")     //true

//===사용하기
alert(1=='1');              //true
alert(1==='1');             //false
*/
/*
//조건문 if
if(true){
    console.log("result : true");
}

if(false){
    console.log("result : true");
}

//else문
if (true){
    console.log(1);
}else{
    console.log(2);
}

//else if 문
if(false){
    console.log(1);
}else if(true){
    console.log(2);
}else if(true){
    console.log(3);
}else{
    console.log(4);
}
*/
/*
//조건문의 응용
id = prompt('아이디를 입력해주세요');

if (id == 'kim'){
    var password = prompt('비밀번호를 입력해주세요')
    if(password == '11111'){
        alert('로그인 성공'+id+'님 반갑습니다');
    }else{
        alert('비밀번호가 일치하지 않습니다.');
}else{
    alert('아이디가 일치하지 않습니다');
}
}
*/
/*
//논리연산자(&& end연산자, || or연산자)
id = prompt('아이디를 입력해주세요.');
password = prompt('비밀번호를 입력해주세요.');
if(id=='egoing' && password=='111111'){
    alert('인증 했습니다.');
} else {
    alert('인증에 실패 했습니다.');
}
//-------------------------------------------
id = prompt('아이디를 입력해주세요.');
password = prompt('비밀번호를 입력해주세요.');
if((id==='egoing' || id==='k8805' || id==='sorialgi') && password==='111111'){
    alert('인증 했습니다.');
} else {
    alert('인증에 실패 했습니다.');
}
*/
