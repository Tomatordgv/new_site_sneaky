$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__nav').toggleClass('active');
    });
    $('.main-screen__slider').slick({
        arrows:false,
        dots:true,
        infinite:false
    });
});