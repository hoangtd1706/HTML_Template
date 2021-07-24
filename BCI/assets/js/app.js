let list_menu = {
    1: {
        "link": "tuvan",
        "title": "Tư vấn doanh nghiệp",
        "sub": {
            1: {
                "link": "",
                "title": "Tư vấn chiến lược kinh doanh"
            },
            2: {
                "link": "",
                "title": "Tư vấn chiến lược marketing"
            },
            3: {
                "link": "",
                "title": "Tư vấn chiến lược khách hàng"
            },
            4: {
                "link": "",
                "title": "Tư vấn thuê, kiểm toán, kế toán"
            }
        }
    },
    2: {
        "link": "huanluyen",
        "title": "Đào tạo marketing trực tuyến",
        "sub": {
            1: {
                "link": "huanluyen",
                "title": "Huấn luyện doanh nghiệp",
            },
            2: {
                "link": "kien-thuc-maketing",
                "title": "Kiến thức marketing",
            }
        }
    },
    3: {
        "link": "fnb",
        "title": "kinh doanh dịch vụ f&b",
        "sub": {
            1: {
                "link": "gong-cha",
                "title": "Gong cha",
            },
            2: {
                "link": "aunti-annes",
                "title": "Auntie Anne's",
            }
        }
    },
    4: {
        "link": "tintucsukien",
        "title": "Tin tức sự kiện",
    },
    5: {
        "link": "lienhe",
        "title": "Liên hệ",
    },
};
var view_box = '0 0 1064 4569';
var line_path = 'M249,0,979,862,0,1556l1038,793L21,3202l1043,608L249,4569';

let string = window.location.href;
const active_link = string.substring(string.indexOf('BCI/') + 4, string.length - 5);


$(document).ready(function () {
    renderLine();
    renderMenu(active_link);

    let sub_menu = $('.menu-link .sub_menu').append('<span class="close_sub"></span>')
    $('.menu-link .sub_menu').parent().append('<span class="open_sub"></span>')
})

let renderMenu = (active_link) => {
    var nav_bci = '<div class="container nav_bci">';
    var logo = '<div class="header-logo"><a href="home.html"><img src="assets/img/bci-header-logo.png" alt="logo"></a></div>';
    var menu = getMenu(active_link);
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

let getMenu = (active_link) => {
    var menu = '<div class="menu" id="menu_top"><ul class="menu-top">';
    var btn_search = '<li><button class="btn-search" type="button"><img src="assets/img/icon/icon-search.png" alt="search"></button></li>';
    $.each(list_menu, function (index, value) {
        menu += '<li class="menu-link ' + (active_link === value.link ? 'active' : '') + '"><a href="' + value.link + '.html">' + value.title + '</a>';
        if (value.hasOwnProperty('sub')) {
            let submenu = '<div class="sub_menu"><ul>';
            $.each(value.sub, function (_in, _va) {
                submenu += '<li class="sub_link"><a href="' + _va.link + '.html">' + _va.title + '</a></li>';
            })
            submenu += '</ul></div>';
            menu += submenu;
        }
        menu += '</li>';
    })
    menu += btn_search + '</ul></div>';

    return menu;
}

let renderPost = (template, step) => {
    let _template = template.html();
    let link = template.attr('data-link');
    for (var i = 1; i <= step; i++) {
        template.append(_template);
    }
    template.find('.post_item .post_thumb a').attr('href', link + '.html');
    template.find('.post_item .post_content a').attr('href', link + '.html')
}