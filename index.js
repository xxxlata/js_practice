const clockTitle = document.querySelector(".js-clock");

function christmas() {
    const xDay = new Date("2021-12-24:00:00:00+0900");
    const today = new Date();
    const mSecond = xDay - today;
    const second = String(Math.floor((mSecond / 1000) % 60)).padStart(2, "0");
    const minute = String(Math.floor((mSecond / 1000 / 60) % 60)).padStart(2,"0");
    const hour = String(Math.floor((mSecond / 1000 / 60 / 60) % 24)).padStart( 2,"0");
    const day = String(Math.floor(mSecond / 1000 / 60 / 60 / 24)).padStart(2,"0");
  
    clockTitle.innerText = `${day}d ${hour}h ${minute}m ${second}s`;
  }
  
  christmas();
  setInterval(christmas, 1000);
