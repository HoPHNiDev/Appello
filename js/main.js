window.onload = function () {
    window.setTimeout(function () {
        document.body.classList.add('loaded');
    }, 500);
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button_next',
        prevEl: '.swiper-button_prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    spaceBetween: 13,
    speed: 500,
});

$(function () {
    $nav = $('.header-nav');
    $window = $(window);
    $h = $nav.offset().top;
    $window.scroll(function () {
        if ($window.scrollTop() > $h) {
            $nav.addClass('fixed');
        } else {
            $nav.removeClass('fixed');
        }
    });
});
var idActiveTab = 1;

function changeActiveTab(a) {
    document.getElementById(idActiveTab).classList.remove('stage-tabs__active');
    document.getElementById('tab-' + idActiveTab).classList.remove('stage-body__active');
    document.getElementById(a).classList.add('stage-tabs__active');
    document.getElementById('tab-' + a).classList.add('stage-body__active');
    idActiveTab = a;
}

function showNavBar() {
    var NavBar = document.getElementById('NavBar');
    if (NavBar.classList.contains('header-nav__active')) {
        NavBar.classList.remove('header-nav__active');
    } else {
        NavBar.classList.add('header-nav__active');
    }
}

function showFaq(a) {
    var faqId = document.getElementById(a);
    if (faqId.classList.contains('faq__active')) {
        faqId.classList.remove('faq__active');
    } else {
        faqId.classList.add('faq__active');
    };
}

