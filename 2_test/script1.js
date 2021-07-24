$(document).ready(function () {
    $(window).scroll(function () {
        var aTop = $('.ad').height();
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop)
        let po = scrollTop - 500;
        let position = -po;
        $('.Line__svg').css('transform', 'matrix(1, 0, 0, 1, 0,'+position+')')
    });
})