

const ss = document.getElementById('controlls');

[].forEach.call(ss, function (s) {
    let currentTimer = 0,
        interval = 0,
        lastUpdateTime = new Date().getTime(),
        start = s.getElementById('start'),
        stop = s.getElementById('stop'),
        reset = s.getElementById('reset'),
        mins = s.getElementById('minutes'),
        secs = s.getElementById('seconds'),
        cents = s.getElementById('centiseconds');

    start.addEventListener('click', startTimer);
    stop.addEventListener('click', stopTimer);
    reset.addEventListener('click', resetTimer);

    function pad (n) {
        return ('00' + n).substr(-2);
    }

    function update (){
        let now = new Date().getTime(),
        dt = now - lastUpdateTime;

        currentTimer +=dt;

        let time = new Date(currentTimer);

        mins.innerHTML = pad(time.getMinutes());
        secs.innerHTML = pad(time.getSeconds());
        cents.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));



        lastUpdateTime = now;
    }
    function startTimer () {
            console.log("Hello");
        if (!interval) {
            lastUpdateTime = new Date().getTime();
            interval = setInterval(update, 1);
        }
    }

    function stopTimer () {
        clearInterval(interval);
        interval = 0;
    }

    function resetTimer () {
        stopTimer();

        currentTimer = 0;

        mins.innerHTML = secs.innerHTML = cents.innerHTML = pad(0);
    }
});