import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const h2 = document.querySelector("h2");
const superEventHandler = {
  handleResize: function () {
    h2.innerText = "changing size";
    h2.style.color = colors[4];
  },
  handleEnter: function () {
    h2.innerText = "Mouse here~";
    h2.style.color = colors[2];
  },
  handleLeave: function () {
    h2.innerText = "Mouse there~";
    h2.style.color = colors[1];
  },
  handleRight: function () {
    h2.innerText = "U did Mouse Right Button Click now";
    h2.style.color = colors[0];
  }
};
window.addEventListener("resize", superEventHandler.handleResize);
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
h2.addEventListener("mouseenter", superEventHandler.handleEnter);
h2.addEventListener("contextmenu", superEventHandler.handleRight);
