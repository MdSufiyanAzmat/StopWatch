let timerDisplay = document.querySelector('.display');
let stop = document.getElementById('stop-btn');
let reset = document.getElementById('reset-btn');
let start = document.getElementById('start-btn');

let msec = 0;
let sec = 0;
let min = 0;

let timerId = null;

start.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
})

stop.addEventListener('click', function(){
    clearInterval(timerId);
})

reset.addEventListener('click', function(){
    clearInterval(timerId);
    setInterval(() => {
         timerDisplay.innerHTML = `00 : 00 : 00`;
    }, 1000);
})


function startTimer(){
    msec++;
    if(msec === 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
    }
    let msecString = (msec < 10) ? `0${msec}` : msec;
    let secString = (sec < 10) ? `0${sec}` : sec;
    let minString = (min < 10) ? `0${min}` : min;

    timerDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`
}

