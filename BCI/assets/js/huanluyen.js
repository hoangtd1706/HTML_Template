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
});