var mm = 00;
var ss = 00;
var mmss = 00;
var stopwatch;

function start() {
    stopwatch = setInterval(() => {
        timer();
    }, 1000);
}

function stop() {
    clearInterval(stopwatch);
}

function reset() {
    clearInterval(stopwatch);
    mm = 00;
    ss = 00;
    mmss = 00;
    document.getElementById("counter").innerHTML = "00 : 00 : 00";
}

function timer() {
    mmss++;

    if (mmss == 60) {
        mmss = 0;
        ss++;
    }

    if (ss == 60) {
        ss = 0;
        mm++;
    }

    var textFormat = (mm < 10 ? '0' + mm : mm) + " : " + (ss < 10 ? '0' + ss : ss) + " : " + (mmss < 10 ? '0' + mmss : mmss);

    document.getElementById("counter").innerHTML = textFormat;

}