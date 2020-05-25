function currentDate() {
    let day = new Date();
    let d = day.getDay();
    let mon = day.getMonth() + 1;
    let y = day.getFullYear();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    if (d < 10) d = '0' + d;
    if (mon < 10) mon = '0' + mon;
    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    return `<h3>${d}.${mon}.${y}</h3><h1>${h}:${m}:${s}</h1>`
}

const data = document.getElementById('data');
data.innerHTML = currentDate();

setInterval(function () {
    data.innerHTML = currentDate();
}, 1000)

const stopwatch = document.getElementById('stopwatchNumbers');
let isStart = false;
let timeSpend = 0;
setInterval(function () {
    if (isStart) {
        timeSpend++;
        let h = timeSpend / 3600 | 0;
        let m = (timeSpend % 3600) / 60 | 0;
        let s = timeSpend % 60;

        stopwatch.innerHTML = `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`
    }
}, 1000)

const startBtn = document.getElementById('start');
startBtn.addEventListener('click', () => {
    isStart = true;
})

const stopBtn = document.getElementById('stop');
stopBtn.addEventListener('click', () => {
    isStart = false;
})

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
    timeSpend = 0;
    isStart = false;
    stopwatch.innerText = `00:00:00`;
})

const loopBtn = document.getElementById('loop');
const stopwatchText = document.getElementById('stopwatchText');
loopBtn.addEventListener('click', () => {
    let loop = stopwatch.innerHTML;
    stopwatchText.innerHTML += `<p>${loop}</p>`;
})


let isTimerStart = false;
let timerSpend = 0;
const timerhNumbers = document.getElementById('timerhNumbers');
const timerStart = document.getElementById('timerStart');
setInterval(function () {
    if (isTimerStart) {
        timerSpend++;

        const diffTime = +timerhNumbers.innerHTML * 60 - timerSpend;
        let m = diffTime / 60 | 0;
        let s = diffTime % 60;

        timerStart.innerHTML = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`
    }
}, 1000)

const plusBtn = document.getElementById('plus');
plusBtn.addEventListener('click', () => {
    timerhNumbers.innerText = +timerhNumbers.innerText + 1;
})

const minusBtn = document.getElementById('minus');
minusBtn.addEventListener('click', () => {
    let time = +timerhNumbers.innerText - 1;
    if (time >= 0)
        timerhNumbers.innerText = time;

})

const timerStartBtn = document.getElementById('timStart');
timerStartBtn.addEventListener('click', () => {
    if (+timerhNumbers.innerText > 0)
        isTimerStart = true;
})

const timerStopBtn = document.getElementById('timStop');
timerStopBtn.addEventListener('click', () => {
    isTimerStart = false;
})

const timerResetBtn = document.getElementById('timReset');
timerResetBtn.addEventListener('click', () => {
    timerSpend = 0;
    isTimerStart = false;
    timerStart.innerText = `00:00`;
})