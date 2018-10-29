$(document).ready(function () {
    var startNumber = 200;
    var startDay = 26;
    var interval;


    function setCount() {
        var date = new Date();
        var day;
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var currentDay = date.getDate();
        var divisor;
        var count;
        var nightSecond = 25200;
        var nightPoint = 840;

        if (currentDay >= startDay) {
            day = (date.getDate() - startDay) * 6960;
        } else {
            day = 0;
        }

        var currentSeconds = hours * 3600 + (minutes * 60) + seconds;

        if (hours >= 0 && hours < 7) {
            interval = 30000;
            count = Math.ceil(currentSeconds / 30) + day + startNumber;
        } else {
            interval = 10000;
            count = (Math.ceil((currentSeconds - nightSecond) / 10)) + nightPoint + day + startNumber;
        }

        var currentCount = count + startNumber
        $('#counter').text(count);
    }

    setCount();
    setInterval(setCount, interval);
});
