var mili = 0;
var second = 0;
var minute = 0;

var miliSeconds = document.getElementById('miliSeconds');
var seconds = document.getElementById('seconds');
var minutes = document.getElementById('minutes');

var inter;

function start() {
    inter = setInterval(function () {
        mili++;
        miliSeconds.innerHTML = mili;
        if (mili >= 120) {
            second++
            seconds.innerHTML = second;
            mili = 0;
        };
        if (second >= 60) {
            minute++;
            minutes.innerHTML = minute;
            second = 0;
        };
    });
};

function stop() {
    clearInterval(inter);
};

function reset() {
    miliSeconds.innerHTML = 0;
    seconds.innerHTML = 0;
    minutes.innerHTML = 0;
    mili = 0;
    second = 0;
    minute = 0;
    clearInterval(inter);  
};