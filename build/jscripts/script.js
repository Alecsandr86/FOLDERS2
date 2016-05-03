//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };
    
    $(".hamburger").bind("click", function () {
        $(".hamburger").toggleClass("is-active");
        $(".menu-open").toggleClass("active");
     
    });
   
    // загрузка

    function slidTime() {
        $(".lin-top-slider span").animate({"width":"0"},0).animate({
            "width":"100%"
        },3000,function () {
            $(".lin-top-slider span").animate({
                "width":"0%"
            },0 ,slidTime())
        });
    }
    slidTime();
    
    // \загрузка\

    $('.bxslider').bxSlider({
        pager: false,
        auto:true,
        pause:"3000",
        //adaptiveHeight: true,
        nextText:"<i class='slid-next'></i>",
        prevText:"<i class='slid-prev'></i>",
        onSliderLoad: function(){
            //alert('prev');
            $(".lin-top-slider span").animate({"width":"0"},0);
            slidTime();
        },
        onSlideAfter: function(){
            //alert('next');
            $(".lin-top-slider span").animate({"width":"0"},0);
            slidTime();
        }
    });
    
    $('.slid-next,.slid-prev').bind("click", function () {
        slidTime();
    });


    $('.slid-day-night').bxSlider({
        pager: false,
        //auto:true,
        //pause:"3000",
        //adaptiveHeight: true,
        nextText:"<i class='slid-next'></i>",
        prevText:"<i class='slid-prev'></i>",
     
    });
    
    
    $(".button-slid a").bind("click", function () {
        $(this).toggleClass("active")
    })


    // function showhide() {
    //
    //     $(".lin-top-slider span").fadeIn(1000, function () {
    //
    //         $("#green").fadeOut(1000, showhide);
    //
    //     });

    //}



    $('.slider-spaces').bxSlider({
        pagerCustom: '#slider-spaces-pager',
        mode: 'vertical',
        adaptiveHeight: true,
        controls:false
    });


    $('.headers')
        .waypoint(function(direction) {
            if (direction === 'down') {
                $('.fix ').animate({
                    "top":"0"
                },700)
            }
            else {
                $('.fix').animate({
                    "top":"-100%"
                },700)
            }
        }, {
            offset: -120
        });

    $('.table-head')
        .waypoint(function(direction) {
            if (direction === 'down') {
                $('.table-head').addClass('table-fix')
            }
            else {
                $('.table-head').removeClass('table-fix')
            }
        }, {
            offset: 58
        });
    
    
    
    
    // RangeSlider

    $("#item-s-1").ionRangeSlider({
        keyboard: true,
        type: "double",
        from: 2,
        to: 17,
        min: 2,
        max: 17,
        step: 1,
        grid: false,
        hide_min_max: true,
        hide_from_to: false,
    });

    $("#item-s-2").ionRangeSlider({
        keyboard: true,
        type: "double",
        from: 1,
        to: 4,
        min: 1,
        max: 4,
        step: 1,
        grid: false,
        hide_min_max: true,
        hide_from_to: false,
    });

    $("#item-s-3").ionRangeSlider({
        keyboard: true,
        type: "double",
        from: 2,
        to: 17,
        min: 2,
        max: 17,
        step: 1,
        grid: false,
        hide_min_max: true,
        hide_from_to: false,
    });
    
    // \RangeSlider\
    
    
    
});