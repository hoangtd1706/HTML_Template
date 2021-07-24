AOS.init({
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out',
});

$(document).ready(function () {
    let slide1 = $('.slide_service').slick({
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "prevArrow": $("#btn_prev_1"),
        "nextArrow": $("#btn_next_1"),
        "responsive": [{
            "breakpoint": 1200,
            "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 1
            }
        }, {
            "breakpoint": 600,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
            }
        }]
    });

    let slide12 = $('.slide_course').slick({
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "prevArrow": $("#btn_prev_12"),
        "nextArrow": $("#btn_next_12"),
        "responsive": [{
            "breakpoint": 1200,
            "settings": {
                "slidesToShow": 2,
                "slidesToScroll": 1
            }
        }, {
            "breakpoint": 600,
            "settings": {
                "slidesToShow": 1,
                "slidesToScroll": 1
            }
        }]
    });

    $('#btn_next_3').on('click', function () {
        console.log('sdfsd')
    })

    let slide5 = $('.slide_course_2').slick({
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "prevArrow": $("#btn_prev_4"),
        "nextArrow": $("#btn_next_4"),
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

    $('.slide_course_2').on('afterChange', function (event, slick, currentSlide) {
        if (currentSlide > 0) {
            $('#btn_prev_4').removeClass('hidden');
        } else {
            $('#btn_prev_4').addClass('hidden');
        }

        if (currentSlide === 0) {
            $('#btn_next_4').removeClass('hidden');
        } else {
            $('#btn_next_4').addClass('hidden');
        }
    })
    let string = window.location.href;
    const active_link = string.substring(string.indexOf('BCI/') + 4, string.length - 5);
    if (active_link === 'huanluyen') {
        $('.btn_regis_now').attr('href', 'khoa-hoc-1.html');
    }
});



/* $(document).scroll(function () {
    let top = $(window).scrollTop()
    console.log(top);
    let elem = $('.slide_service .slick-list .slick-track .slide_item:nth-child(odd) .service_item:nth-child(1)');
    if (isInViewport(elem)) {
        $('.slide_service .slick-list .slick-track .slide_item:nth-child(odd) .service_item:nth-child(1)').css({
            'transform': 'rotateX(0)'
        })
        $('.slide_service .slick-list .slick-track .slide_item:nth-child(even) .service_item:nth-child(2)').css({
            'transform': 'rotateX(0)'
        })
    } else {
        $('.slide_service .slick-list .slick-track .slide_item:nth-child(odd) .service_item:nth-child(1)').css({
            'transform': 'rotateX(60deg)'
        })
        $('.slide_service .slick-list .slick-track .slide_item:nth-child(even) .service_item:nth-child(2)').css({
            'transform': 'rotateX(60deg)'
        })
    }
})

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}; */