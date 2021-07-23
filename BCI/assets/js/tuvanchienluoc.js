$(document).ready(function () {
    $('.other_service').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $("#btn_prev_3"),
        nextArrow: $("#btn_next_3"),
        dots: true,
        "responsive": [{
            "breakpoint": 1200,
            "settings": {
                "slidesToShow": 3,
                "slidesToScroll": 3
            }
        }, {
            "breakpoint": 900,
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
})