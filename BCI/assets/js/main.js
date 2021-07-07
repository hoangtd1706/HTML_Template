$(document).ready(function () {

    $('.btn_menu').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.menu').addClass('active');
            $('.close_menu').addClass('active');
            //$('.menu').css('right', 0);

        } else {
            $('.menu').removeClass('active');
            $('.close_menu').removeClass('active');
            //$('.menu').css('right', -440);
        }
    })

    $('.close_menu').on('click', function () {
        $('.btn_menu').removeClass('active');
        $('.menu').removeClass('active');
        $('.close_menu').removeClass('active');
        $('.menu').css('right', -440);
    })

    $('.to_top').on('click', function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 500, 'swing');
    })
    $(window).scroll(function () {
        let page_width = $('body').width();
        let page_height = $('body').height();
        let window_height = $(window).height();
        let toTop = $(this).scrollTop();
        let document_height = $(document).height();
        (toTop > 300) ? changeSizeMenu(true): changeSizeMenu(false);
    })
})

let changeSizeMenu = (event) => {
    if (event == true) {
        if ($('.site39_header_col0').hasClass('minimal') == false) {
            $('.site39_header_col0').addClass('minimal');
        }
    } else {
        $('.site39_header_col0').removeClass('minimal');
    }
}

let popup = (event) => {
    if (event == true) {
        $('.popup_form').addClass('show');
    } else {
        $('.popup_form').removeClass('show');
    }
}


let btn_popup_close = document.querySelector('.btn_popup_close');
let overlay_popup_close = document.querySelector('.popup_overlay');
btn_popup_close.addEventListener('click', function () {
    popup(false);
});
overlay_popup_close.addEventListener('click', function () {
    popup(false);
});