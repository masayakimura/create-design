//スティッキーヘッダー
$(function() {
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header'),
        fvHight = $fv.outerHeight();
        fixedClass = 'fixed';

        $win.on('load scroll', function() {
            var value = $(this).scrollTop();
            if($win.width() > 768) {
                if(value > fvHight) {
                    $header.addClass(fixedClass);
                } else {
                    $header.removeClass(fixedClass);
                }
            }
        });
});


//スライダー
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    fade: true,
    cssEase: 'linear'
});


//ハンバーガーメニュー
$('.burger-btn').on('click', function() {
    $('.header__nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});