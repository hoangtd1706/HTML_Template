"use strict";

$(document).ready(function () {
  $('.btn_menu').on('click', function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.menu').addClass('active');
      $('.close_menu').addClass('active'); //$('.menu').css('right', 0);
    } else {
      $('.menu').removeClass('active');
      $('.close_menu').removeClass('active'); //$('.menu').css('right', -440);
    }
  });
  $('.close_menu').on('click', function () {
    $('.btn_menu').removeClass('active');
    $('.menu').removeClass('active');
    $('.close_menu').removeClass('active');
    $('.menu').css('right', -440);
  });
  $('.to_top').on('click', function () {
    $("html, body").stop().animate({
      scrollTop: 0
    }, 500, 'swing');
  });
  $(window).scroll(function () {
    var page_width = $('body').width();
    var page_height = $('body').height();
    var window_height = $(window).height();
    var toTop = $(this).scrollTop();
    var document_height = $(document).height();
    toTop > 300 ? changeSizeMenu(true) : changeSizeMenu(false);
  });

  var changeSizeMenu = function changeSizeMenu(event) {
    if (event == true) {
      if ($('.site39_header_col0').hasClass('minimal') == false) {
        $('.site39_header_col0').addClass('minimal');
      }
    } else {
      $('.site39_header_col0').removeClass('minimal');
    }
  };
});