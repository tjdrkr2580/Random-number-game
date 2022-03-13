const timer = document.getElementById("time");
const start = document.getElementById("start");
const number = document.getElementById("input_number");
const submit = document.getElementById("submit");
const updown = document.getElementById("up_down");

let second = 30;
let secret_number = 0;
let GAME_START = false;

function timerCheck() {
    timer.innerText = `TIME: ${second}`;
    let time = setInterval(function () {
        timer.innerText = `TIME: ${second}`;
        second--;
        if (second == 0) {
            clearInterval(time);
            stopGame();
        }
        if (number.value == secret_number) {
            clearInterval(time);
        }
    }, 1000)
}

function gameStart() {
    GAME_START = true;
    secret_number = Math.floor(1 + Math.random() * 30);
    timerCheck();
    start.disabled = true;
}

function stopGame() {
    GAME_START = false;
    second = 30;
    start.innerText = `RESTART?`;
    start.disabled = false;
}

function numberIf() {
    if (number.value > secret_number) {
        updown.innerText = `DOWN!`;
    } else if (number.value < secret_number) {
        updown.innerText = `UP!`;
    }
}

function gameClear() {
    updown.innerText = `Correct!`;
    stopGame();
}

function numberGame() {
    if (GAME_START == true) {
        numberIf();
        if (number.value == secret_number) {
            gameClear();
        } else if (second == 0) {
            updown.innerText = `YOU LOSE...`;
            stopGame();
        }
    }
}

start.addEventListener("click", gameStart);
submit.addEventListener("click", numberGame);
