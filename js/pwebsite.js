// (function () {
"use strict";

function swapImages() {
    var firstImg = $('.pillar-icon img:nth-child(1)');
    var secondImg = $('.pillar-icon img:nth-child(2)');

    // if ($('.pillar-icon img:nth-child(1)').hasClass('active')) {
    //     $('.pillar-icon img:nth-child(1)').removeClass("active").addClass("non-active").hide();
    //     $('.pillar-icon img:nth-child(2)').fadeIn(3000).removeClass("non-active").addClass("active").show();
    // } else {
    //     $('.pillar-icon img:nth-child(1)').fadeIn(3000).removeClass('non-active').addClass('active').show();
    //     $('.pillar-icon img:nth-child(2)').removeClass('active').addClass('non-active').hide();
    // }
    if (firstImg.hasClass('active')) {
        secondImg.show().fadeIn(2000).removeClass("non-active").addClass("active");
        firstImg.hide().removeClass("active").addClass("non-active");
        // firstImg.removeClass("active").addClass("non-active").hide();
        // secondImg.fadeIn(2000).removeClass("non-active").addClass("active").show();
    } else {
        firstImg.show().fadeIn(2000).removeClass('non-active').addClass('active');
        secondImg.hide().removeClass('active').addClass('non-active');
        // firstImg.fadeIn(2000).removeClass('non-active').addClass('active').show();
        // secondImg.removeClass('active').addClass('non-active').hide();
        firstImg.fadeTo('fast',1).fadeIn(2000).removeClass('non-active').addClass('active');
    }
}


$(document).ready(function () {
    setInterval('swapImages', 8000);
});
// }) ();
