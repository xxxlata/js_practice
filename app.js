const generate = document.querySelector(".generate_input");
const generateInput = document.querySelector(".generate_input input");

function g(event){
    event.preventDefault();
}

generate.addEventListener("submit",g);

/* 전체값 인풋받아놓고 고정하기 까지 완료*/

const guessN = document.querySelector(".guess_number");
const guessNinput = document.querySelector(".guess_number input");
const guessBtn = document.querySelector(".guess_number button");

function guess(event){
    event.preventDefault();
}

function guessError(){
    if(parseInt(guessNinput.value) > parseInt(generateInput.value)){
        alert("The number you chose is too big :(");
    }else{
        
    }
}
guessN.addEventListener("submit",guessError);
guessN.addEventListener("submit",guess);

//player 인풋값 받고 고정 완료

const prograss = document.querySelector(".result span:first-child");
const result = document.querySelector(".result span:last-child");

function final(){
    const randomV =  Math.round(Math.random()*(parseInt(generateInput.value)));
    
    prograss.innerText = "you chose:" + parseInt(guessNinput.value) + ", and i chose:" + randomV + ".";
    
    if(parseInt(guessNinput.value) === randomV){
        result.innerText = "you won! good for you:)"
    }else{
        result.innerText = "your loser!!"
    }
}

guessBtn.addEventListener("click",final);

//rendomN받아서 자리에 넣고 실행

