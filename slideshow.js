$('.slideshow').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.slideshow-partners').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<div class= "slick-left"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class= "slick-right"><i class="fas fa-chevron-right"></i></div>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
    }
  ]
});

jQuery(document).ready(function ($) {

    $(window).scroll(function () {
        if ($(document).scrollTop() > 41) {
            $('.header-middle').addClass('fixed-ontop');
            $('.main-content').addClass('main-content-ontop');
        } else {
            $('.header-middle').removeClass('fixed-ontop');
            $('.main-content').removeClass('main-content-ontop');
        }
    });
});
