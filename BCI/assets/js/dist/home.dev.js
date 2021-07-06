"use strict";

$(document).ready(function () {
  /* $(window).scroll(function () {
      var aTop = $(window).scrollTop();
      if (aTop > 244) {
          $('.site39_header_col0').addClass('is-menu');
      } else {
          $('.site39_header_col0').removeClass('is-menu');
      }
  }) */
  $(window).scroll(function () {
    var page_width = $('body').width();
    var page_height = $('body').height();
    var window_height = $(window).height();
    var toTop = $(this).scrollTop();
    var document_height = $(document).height(); //console.log(page_height - toTop - 1000);

    if (toTop < 100) {
      $('.Line').css('height', '0px');
    } else if (toTop > 100 && page_height - toTop - 1000 > 10) {
      $('.Line').css('height', '505px');
      $('.Line__svg').css('transform', 'matrix(1,0,0,1,0,' + (-717 - toTop));
    } else {
      $('.Line').css('height', '100vh');
    }

    if (page_height - toTop - 1000 > 10) {
      $('.to_top').hide();
    } else {
      $('.to_top').show();
    }

    toTop > 150 ? gsap.to("#icon_right_1", {
      duration: 1,
      y: 200
    }) : gsap.to("#icon_right_1", {
      duration: 1,
      y: -200
    });
    toTop > 598 ? gsap.to("#icon_right_2", {
      duration: 1,
      x: -100
    }) : gsap.to("#icon_right_2", {
      duration: 1,
      x: 100
    });
    toTop > 869 ? gsap.to("#icon_left", {
      duration: 1,
      x: 100
    }) : gsap.to("#icon_left", {
      duration: 1,
      x: -100
    });
    toTop > 1800 && toTop < 3027 ? gsap.to("#icon_1", {
      duration: 1,
      x: -100
    }) : gsap.to("#icon_1", {
      duration: 1,
      x: 100
    });
    toTop > 3020 && toTop < 4000 ? gsap.to("#icon_2", {
      duration: 1,
      y: -100
    }) : gsap.to("#icon_2", {
      duration: 1,
      y: 100
    });
    toTop > 300 ? changeSizeMenu(true) : changeSizeMenu(false);
  });
});