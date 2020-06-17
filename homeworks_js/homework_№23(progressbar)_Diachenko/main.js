$(document).ready(function() {
    $('.progressBar').circularProgress({
        height: '200px',
        width: '200px',
        line_width: 10,
        color: 'rgba(222, 236, 245, 0.7)',
        percent: 0,
        starting_position: 0,
        easing: 'linear'
    }).circularProgress('animate', 100, 10000);
})