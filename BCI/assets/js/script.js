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
        console.log(toTop);
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

        if (page_width < 1200) {

            (toTop > 3060) ? gsap.to("#btn_social", {
                duration: 1,
                y: -230
            }): gsap.to("#btn_social", {
                duration: 1,
                y: 0
            })
        }
    })
})