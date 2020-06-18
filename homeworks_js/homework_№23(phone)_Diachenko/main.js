$(document).ready(function () {
    const time = 60000;
    setTimeout(() => $('.battery').slideUp(time), 0)
    setTimeout(() => $('.battery').slideDown(time), 10)
    function timer() {
        let minutes = 2;
        txt = setInterval(function () {
            minutes--
            $('.minutes').text(minutes)
            if (minutes <= 0) clearInterval(txt)
        }, time)
    }
    setTimeout(timer, 10)
});