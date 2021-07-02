$(document).ready(function () {
    $('.btn_menu').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.menu').addClass('active');
            $('.menu').css('right', 0);
        } else {
            $('.menu').removeClass('active');
            $('.menu').css('right', -440);
        }
    })
})