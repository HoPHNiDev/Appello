/* Preloader */
window.onload = function () {
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        window.setTimeout(function () {
            document.getElementById('preloader').remove();
        }, 1000);
    }, 500);
};

/* Swiper */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button_next',
        prevEl: '.swiper-button_prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 500,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 13
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 13
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 13
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 13
        }
    }
});

/* Header-fix */
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

/* Counter */
$('.counterUp').counterUp({
    delay: 10,
    time: 2000
});
/* Back-to-top */
var offset = 200;
var duration = 500;
$(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
    } else {
        $('.back-to-top').fadeOut(400);
    }
});
$('.back-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 600);
    return false;
});

/* Wow */
var wow = new WOW({
    //disabled for mobile
    mobile: false
});

wow.init();

/* ChangeActiveTab */
var idActiveTab = 1;

function changeActiveTab(a) {
    document.getElementById(idActiveTab).classList.remove('stage-tabs__active');
    document.getElementById('tab-' + idActiveTab).classList.remove('stage-body__active');
    document.getElementById(a).classList.add('stage-tabs__active');
    document.getElementById('tab-' + a).classList.add('stage-body__active');
    idActiveTab = a;
}

/* ShowNavBar */
function showNavBar() {
    var NavBar = document.getElementById('NavBar');
    if (NavBar.classList.contains('header-nav__active')) {
        NavBar.classList.remove('header-nav__active');
    } else {
        NavBar.classList.add('header-nav__active');
    }
}

/* ShowFAQ */
function showFaq(a) {
    var faqId = document.getElementById(a);
    if (faqId.classList.contains('faq__active')) {
        faqId.classList.remove('faq__active');
    } else {
        faqId.classList.add('faq__active');
    };
}

