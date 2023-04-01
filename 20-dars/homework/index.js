let box = document.querySelector('.box');
let ball = document.querySelector("#ball");

box.addEventListener("mousemove", (event) => {
    ball.style.marginTop = `${event.y - 55}px`;
    if (event.y > 400 && event.y > 540 && event.x > 10 && event.x < 36) {
        alert(`SUUUUUUUUUUUUUUUUUUUUUUUUUUUUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
    }
    ball.style.marginLeft = `${event.x - 65}px`;
});