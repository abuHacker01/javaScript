let box = document.querySelector('.box');
let ball = document.querySelector("#ball");

box.addEventListener("click", (event) => {
    ball.style.marginTop = `${event.y - 55}px`;
    ball.style.marginLeft = `${event.x - 65}px`;
});