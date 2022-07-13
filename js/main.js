$(document).ready(function () {
    "use strict";

    $(".main_block_form_content_direction_top").click(function() {
        $(".main_block_form_content_direction").toggleClass("active");
        $(".main_block_form_content_profile").removeClass("active");
    });

    $(".main_block_form_content_profile_top").click(function() {
        $(".main_block_form_content_profile").toggleClass("active");
        $(".main_block_form_content_direction").removeClass("active");
    });

    $(".main_mobile_form_content_direction_top").click(function() {
        $(".main_mobile_form_content_direction").toggleClass("active");
        $(".main_mobile_form_content_profile").removeClass("active");
    });

    $(".main_mobile_form_content_profile_top").click(function() {
        $(".main_mobile_form_content_profile").toggleClass("active");
        $(".main_mobile_form_content_direction").removeClass("active");
    });

    $(document).click(function() {
        var containerDirectionDesk = $(".main_block_form_content_direction");
        var containerProfileDesk = $(".main_block_form_content_profile");
        var containerDirectionMob = $(".main_mobile_form_content_direction");
        var containerProfileMob = $(".main_mobile_form_content_profile");
        if (!containerDirectionDesk.is(event.target) && !containerDirectionDesk.has(event.target).length) {
            $(".main_block_form_content_direction").removeClass("active");
        }
        if (!containerProfileDesk.is(event.target) && !containerProfileDesk.has(event.target).length) {
            $(".main_block_form_content_profile").removeClass("active");
        }
        if (!containerDirectionMob.is(event.target) && !containerDirectionMob.has(event.target).length) {
            $(".main_mobile_form_content_direction").removeClass("active");
        }
        if (!containerProfileMob.is(event.target) && !containerProfileMob.has(event.target).length) {
            $(".main_mobile_form_content_profile").removeClass("active");
        }
    });


    $('.destinations_slider').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        prevArrow: $('.destinations_top_btns_prev'),
        nextArrow: $('.destinations_top_btns_next')
    });

    $('.treatment_slider').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        prevArrow: $('.treatment_top_btns_prev'),
        nextArrow: $('.treatment_top_btns_next'),
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('.reviews_block_slider').slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        prevArrow: $('.reviews_block_top_btns_prev'),
        nextArrow: $('.reviews_block_top_btns_next'),
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    
});