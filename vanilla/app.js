/*
//queryselector은 뭐든 불러올수있다.

const title = document.getElementById("title");
const title = document.querySelector("#title");

title.innerText ="Got you!";
*/
/*
//click event
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
}
function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    title.style.color = "Mouse is gone!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOffline(){
    alert("Sos no Wifi");
}
function handleWindowOnline(){
    alert("all good");
}
//두가지 방법으로 event 할 수있다.
title.onclick ("click",handleTitleClick);
title.addEventListener("Mouseenter",handleMouseEnter);
title.addEventListener("Mouseleave",handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);

*/
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue"){
        newColor= "tomato";
    }else {
        newColor= "blue";    
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

//easy way use toggle 
*/
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked");    
}

h1.addEventListener("click", handleTitleClick);