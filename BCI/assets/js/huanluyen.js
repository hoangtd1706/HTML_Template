$(document).ready(function () {
    let slide1 = $('.slide').slick({
        "slidesToShow": 2,
        "slidesToScroll": 2,
        "prevArrow": $(".prev_arrow"),
        "nextArrow": $(".next_arrow"),
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
    })
    let slide2 = $('.slide_content').slick();
    let slide3 = $('.slide_service').slick({
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "prevArrow": $(".prev_1"),
        "nextArrow": $(".next_1"),
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
    let slide4 = $('.slide_course').slick({
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "prevArrow": $(".prev_1"),
        "nextArrow": $(".next_1"),
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
});