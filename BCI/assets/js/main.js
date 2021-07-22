$(document).ready(function () {
    let string = window.location.href;
    let active_link = string.substring(string.indexOf('BCI/') + 4, string.length - 5);
    if (active_link == '/BCI/') {
        location.href = 'home.html';
    }

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
        if (toTop < 100) {
            $('.Line').css('height', '0px');
        } else if ((toTop > 100) && ((page_height - toTop - 1000) > 10)) {
            $('.Line').css('height', '505px');
            $('.Line__svg').css('transform', 'matrix(1,0,0,1,0,' + (-717 - toTop))
        } else {
            $('.Line').css('height', '100vh');
        }
    })

    /* slide đội ngũ nhân sự */
    let staff_slide = $('#slide_staff').slick({
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "prevArrow": $("#btn_prev_2"),
        "nextArrow": $("#btn_next_2"),
        "responsive": [{
            "breakpoint": 1200,
            "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 2
            }
        }, {
            "breakpoint": 600,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
            }
        }]
    });
    staff_slide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        console.log(slick)
        if (currentSlide > 0) {
            $('#btn_prev_2').removeClass('hidden');
        } else {
            $('#btn_prev_2').addClass('hidden');
        }

        if (currentSlide === slick) {
            $('#btn_next_2').addClass('hidden');
        } else {
            $('#btn_next_2').removeClass('hidden');
        }
    })

    /* slide khách hàng */
    let slide4 = $('#slide_customer').slick();

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


window.SmoothScrollOptions = {
    animationTime: 1000
}

/* Tạo background dots */

let height = $('.site39_bann_col0_staff').height();
let width = $('.site39_bann_col0_staff').width();
/* const width = 1920;
const height = 1280; */
count = 50;
const rowsize = 45;
dotsize = 1;
dotmin = 0.4;
dotsizebase = 6;

var canvases = document.querySelectorAll(".CanvasDots");
canvases.forEach((canvas) => {
    var ctx = canvas.getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    mouseOver(canvas, ctx, false)
    canvas.addEventListener('mousemove', function () {
        mouseOver(canvas, ctx, true);
    });
    canvas.addEventListener('mouseleave', function () {
        mouseOver(canvas, ctx, false);
    });
});

function mouseOver(canvas, ctx, cursor) {
    if (cursor) {
        PosX = getPositionX(event);
        PosY = getPositionY(event);
    } else {
        PosX = -100;
        PosY = -100;
    }

    LocX = canvas.getBoundingClientRect().left;
    LocY = canvas.getBoundingClientRect().top;

    GlobalX = PosX - LocX;
    GlobalY = PosY - LocY;

    var ctx = canvas.getContext('2d');
    ctx.canvas.width = width;
    ctx.canvas.height = height;

    // The counter is used to calculate the color (fake random) if u want to have multiple canvas grids with a different color order just increase or decrease the value 
    //$counter = 6.56;
    $counter = 0.1;
    for ($ix = 4; $ix <= (count - 3); $ix++) {
        for ($iy = 4; $iy <= (count - 3); $iy++) {
            ctx.beginPath();
            $scaler = Math.hypot(GlobalX / rowsize - $ix, GlobalY / rowsize - $iy);
            dotsize = dotsizebase - ($scaler) * 1;
            if (dotsize < dotmin) {
                dotsize = dotmin;
            }
            ctx.arc(rowsize * $ix, rowsize * $iy, dotsize, 0, 2 * Math.PI, !1);
            //$counter = $counter * 1.18;
            $counter = $counter * 1.18;
            //$nr = String($counter).charAt(2);
            ctx.strokeStyle = "#3dec9d";
            ctx.lineWidth = 1;
            ctx.stroke();

        }
    }
}

// 
function getPositionX(event) {
    CursorX = event.clientX;
    return CursorX;
}

function getPositionY(event) {
    CursorY = event.clientY;
    return CursorY;
}

/* end background dots */