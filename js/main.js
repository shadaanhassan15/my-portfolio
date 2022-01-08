$(document).ready(function(){

    let $btns =$('.project-area .button-group button');  

    $btns.click(function(e){
        $('.project-area .button-group button').removeClass("active");

        let selector = $(e.target).attrt('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;

    })



    // owl carousel

$('.site-main .about-area .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        544:{
            items:2
        }
    }
});


//sticky navigation menu
let nav_offset_top= $('.header-area').height()+50;

function navbarFixed() {
    if($('.header-area').length){
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top){
                $('.header-area .main-menu').addClass('navbar_fixed');
            } else {
                $('.header-area .main-menu').removeClass('navbar_fixed');
            }
            
        })
    }
}

navbarFixed();




});

