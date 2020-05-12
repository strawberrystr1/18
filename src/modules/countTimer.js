function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 3600);
        return {
            hours,
            minutes,
            seconds,
            timeRemaining
        };
    }

    function makeMeTwoDigits(n) {
        return (n < 10 ? "0" : "") + n;
    }

    function updateClock() {
        const timer = getTimeRemaining();
        timerHours.textContent = makeMeTwoDigits(timer.hours);
        timerMinutes.textContent = makeMeTwoDigits(timer.minutes);
        timerSeconds.textContent = makeMeTwoDigits(timer.seconds);
    }

    function interval() {
        const timer = getTimeRemaining();
        let idInterval;
        if (timer.timeRemaining > 0) {
            idInterval = setInterval(updateClock, 1000);
        } else {
            clearInterval(idInterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }
    interval();
}

export default countTimer;