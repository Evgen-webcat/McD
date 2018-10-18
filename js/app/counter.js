$(document).ready(function () {
    var startNumber = 200;
    var startDay = 18;

    function setCount() {
        var date = new Date();
        var day = (date.getDate() - startDay) * 1440;
        var count = date.getHours() * 60 + (date.getMinutes() + 3) + day + startNumber;
        $('#counter').text(count);
    }

    setCount();
    setInterval(setCount, 60000);
});
