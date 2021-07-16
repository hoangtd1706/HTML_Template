$(document).ready(function () {
    let slide1 = $('.slide').slick({
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "prevArrow": $(".btn_prev"),
        "nextArrow": $(".btn_next"),
        "fade": true,
        "autoplay": false,
        "responsive": [{
            breakpoint: 1024,
            settings: {
                dots: true,
            }
        }]
    })


    $('.slide').on('afterChange', function (event, slick, currentSlide) {
        console.log(currentSlide)
        if (currentSlide > 0) {
            $('.btn_prev').removeClass('hidden');
        } else {
            $('.btn_prev').addClass('hidden');
        }

        if (currentSlide === 0) {
            $('.btn_next').removeClass('hidden');
        } else {
            $('.btn_next').addClass('hidden');
        }
    })
})