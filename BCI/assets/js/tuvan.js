$(document).ready(function () {
    $('.slide').slick({
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
    $('.slide_content').slick();
    $('.slide_service').slick({
        "slidesToShow": 4,
        "slidesToScroll": 4,
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
});