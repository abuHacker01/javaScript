let box = document.querySelector('.box');
let ball = document.querySelector("#ball");

box.addEventListener("mousemove", (event) => {
    ball.style.marginTop = `${event.y - 55}px`;
    ball.style.marginLeft = `${event.x - 65}px`;
});