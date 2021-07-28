AOS.init({
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 600, // values from 0 to 3000, with step 50ms
    easing: 'ease-in-out',
});
/* jQuery(document).on('scroll', function () {
    jQuery('.box_item').css("left", Math.max(100 - 0.2 * window.scrollY, 1) + "vw");
}) */
$(document).ready(function () {
    var textWrapper = document.querySelector('.animate_text');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


    $(window).scroll(function () {
        let page_width = $('body').width();
        let page_height = $('body').height();
        let window_height = $(window).height();
        let toTop = $(this).scrollTop();
        let document_height = $(document).height();

        (isInViewport('.animate_text')) ? anime.timeline({
            loop: false
        })
            .add({
                targets: '.animate_text .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: (el, i) => 500 + 200 * i
            }) : anime.timeline({
                loop: false
            }).add({
                targets: '.animate_text .letter',
                translateX: [0, -30],
                opacity: [1, 0],
                easing: "easeInExpo",
                duration: 1100,
                delay: (el, i) => 1000 + 100 * i
            });

        if ((page_height - toTop - 1000) > 10) {
            $('.to_top').hide();
        } else {
            $('.to_top').show();
        }

        (toTop > 150) ? gsap.to("#icon_right_1", {
            duration: 1,
            y: 200
        }) : gsap.to("#icon_right_1", {
            duration: 1,
            y: -200
        });

        (toTop > 598) ? gsap.to("#icon_right_2", {
            duration: 1,
            x: -100
        }) : gsap.to("#icon_right_2", {
            duration: 1,
            x: 100
        });

        (toTop > 869) ? gsap.to("#icon_left", {
            duration: 1,
            x: 100
        }) : gsap.to("#icon_left", {
            duration: 1,
            x: -100
        });

        (toTop > 1800 && toTop < 3027) ? gsap.to("#icon_1", {
            duration: 1,
            x: -100
        }) : gsap.to("#icon_1", {
            duration: 1,
            x: 100
        });

        (toTop > 3020 && toTop < 4000) ? gsap.to("#icon_2", {
            duration: 1,
            y: -100
        }) : gsap.to("#icon_2", {
            duration: 1,
            y: 100
        });

        (toTop > 300) ? changeSizeMenu(true) : changeSizeMenu(false);
    })
})