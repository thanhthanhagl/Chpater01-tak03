//const { Value } = require("sass");

//console.log("main.js");
$(document).ready(function () {
    function testanimation() {
        if ($(this).scrollTop() > 5) {
            $('.c-bubble').addClass('is-scroll');
            $('.c-leaf__top').addClass('is-scroll');
            $('.c-leaf__right').addClass('is-scroll');
        }
        else {
            $('.c-bubble').removeClass('is-scroll');
            $('.c-leaf__top').removeClass('is-scroll');
            $('.c-leaf__right').removeClass('is-scroll');
        }
    }
    //----------- nav scroll ------------------
    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();
        // Assign active class to nav links while scolling
        $('.page-section').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $('.c-gnav__link').removeClass('is-active');
                $('.c-gnav__link').eq(i).addClass('is-active');
            }
        });
    }).scroll();

    //------------------Animation bubble and leaf--------------------//
    $(window).scroll(function () {
        testanimation();
    });
    //-------------------Menu mobile---------------------------//
    $("#c-input__icon").click(function () {
        $(".c-header__overlay").toggleClass("active");
        $('p-top').toggleClass("u-overflow");
    });
    $(".c-gnavmb__navmb").click(function () {
        $(".c-input").prop("checked", false);        
    });
    //-------------------Button show class-------------------//

    $('.c-point__btnmore').click(function () {
        //Lay cha cua btmore
        var parentCurrent = $(this).parent();
        //Lay ong noi btnmore
        var granCurrent = parentCurrent.parent();
        //Trong ong noi tim class co info va cho an di
        granCurrent.find('.c-point__info').fadeOut();
        //Trong cha tim class co info cho hien ra
        parentCurrent.find('.c-point__info').fadeIn();
    });

    //---------------------slick slider-----------------------//
    function setslide() {
        if ($(window).width() <= 767) {
            $('.c-point__list').not('.slick-initialized').slick({
                infinite: true,//loop
                dots: false,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }
        else {
            $('.c-point__list.slick-initialized').slick('unslick');
        }
    }

    $(window).on('resize', function () {
        setslide();
    });
    $(window).on('load', function () {
        setslide();
    });
    //------------------- accordition -------------------//
    $('.c-blog__toggle').click(function () {
        //Xoay chieu button
        $(this).toggleClass('is-toggle');
        //Tim class cha cua toggle, trong class cha tim class desc
        $(this).parent().children('.c-blog__desc').slideToggle();
    });

});