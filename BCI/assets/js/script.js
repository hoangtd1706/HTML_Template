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
    /* $(window).scroll(function () {
        var aTop = $(window).scrollTop();
        if (aTop > 244) {
            $('.site39_header_col0').addClass('is-menu');
        } else {
            $('.site39_header_col0').removeClass('is-menu');
        }
    }) */

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

        //console.log(page_height - toTop - 1000);

        if (toTop < 100) {
            $('.Line').css('height', '0px');
        } else {
            $('.Line').css('height', '505px');
            $('.Line__svg').css('transform', 'matrix(1,0,0,1,0,' + (-717 - toTop))
        }

        if ((page_height - toTop - 1000) < 10) {
            $('.Line').css('height', '100vh');
        }
        (toTop > 150) ? gsap.to("#icon_right_1", {
            duration: 1,
            y: 200
        }): gsap.to("#icon_right_1", {
            duration: 1,
            y: -200
        });

        (toTop > 598) ? gsap.to("#icon_right_2", {
            duration: 1,
            x: -100
        }): gsap.to("#icon_right_2", {
            duration: 1,
            x: 100
        });

        (toTop > 869) ? gsap.to("#icon_left", {
            duration: 1,
            x: 100
        }): gsap.to("#icon_left", {
            duration: 1,
            x: -100
        });

        (toTop > 1800 && toTop < 3027) ? gsap.to("#icon_1", {
            duration: 1,
            x: -100
        }): gsap.to("#icon_1", {
            duration: 1,
            x: 100
        });

        (toTop > 3020 && toTop < 4000) ? gsap.to("#icon_2", {
            duration: 1,
            y: -100
        }): gsap.to("#icon_2", {
            duration: 1,
            y: 100
        });

        (toTop > 300) ? changeSizeMenu(true): changeSizeMenu(false);

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
})