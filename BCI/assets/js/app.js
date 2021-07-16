let list_menu = {
    1: {
        "link": "tuvan",
        "title": "Tư vấn doanh nghiệp",
    },
    2: {
        "link": "huanluyen",
        "title": "Đào tạo marketing trực tuyến",
    },
    3: {
        "link": "fnb",
        "title": "kinh doanh dịch vụ f&b"
    },
    4: {
        "link": "tintuc",
        "title": "Tin tức sự kiện",
    },
    5: {
        "link": "lienhe",
        "title": "Liên hệ",
    },
};
var view_box = '0 0 1064 4569';
var line_path = 'M249,0,979,862,0,1556l1038,793L21,3202l1043,608L249,4569';

$(document).ready(function () {
    renderLine();
    renderMenu();
})

let renderMenu = () => {
    var nav_bci = '<div class="container nav_bci">';
    var logo = '<div class="header-logo"><a href="home.html"><img src="assets/img/bci-header-logo.png" alt="logo"></a></div>';
    var menu = getMenu();
    var head_bg = '<div class="head_bg"></div>';
    var btn_menu = '<div class="btn_menu"><span class="line"></span></div>';
    var close_menu = '<div class="close_menu"></div>';
    nav_bci += logo + menu + '</div>';
    $('header.site39_header_col0').append(head_bg, btn_menu, close_menu, nav_bci);
}

let renderLine = () => {
    var line = '<div class="Line__svg" style="transform: matrix(1, 0, 0, 1, 0, -790);">';
    for (var i = 1; i < 21; i++) {
        line += '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="' + view_box + '">' +
            '<path d="' + line_path + '"></path>' +
            '</svg></div>';
    }
    line += '</div>'
    $('#Line').append(line);
}

let getMenu = () => {
    var menu = '<div class="menu" id="menu_top"><ul class="menu-top">';
    $.each(list_menu, function (index, value) {
        menu += '<li class="menu-link"><a href="' + value.link + '.html">' + value.title + '</a></li>'
    })
    menu += '</ul></div>';

    return menu;
}