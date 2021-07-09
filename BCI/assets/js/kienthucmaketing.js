$(document).ready(function () {
    $(window).scroll(function () {
        let scroll = $(this).scrollTop();
        (scroll > 100) ? active_menu_post(true): active_menu_post(false);
    })
})

let active_menu_post = (event) => {
    if (event == true) {
        $('.list_cat ul').addClass('fixed_list');
    } else {
        $('.list_cat ul').removeClass('fixed_list');
    }
}