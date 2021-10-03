const timer = (deadline, nameSelector) => {

    function getTime(endtime) {
        const time =  Date.parse(endtime) - Date.parse(new Date());

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time / (1000 * 60 * 60) % 24));
        const minutes = Math.floor((time / (1000 * 60) % 60));
        const seconds = Math.floor((time / 1000) % 60);

        return {
            'total' : time,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    }

    function setZero(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setTime(endtime, selector) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');

        const interval = setInterval(updateTicks, 1000);

        function updateTicks() {
            const timeFromObject = getTime(endtime);

            days.innerHTML = setZero(timeFromObject.days);
            hours.innerHTML = setZero(timeFromObject.hours);
            minutes.innerHTML = setZero(timeFromObject.minutes);
            seconds.innerHTML = setZero(timeFromObject.seconds);

            if (timeFromObject.total <= 0) {
                clearInterval(interval);
            }
        }
    }

    setTime(deadline, nameSelector);
}

export default timer;