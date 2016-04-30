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
   


    // function showhide() {
    //
    //     $(".lin-top-slider span").fadeIn(1000, function () {
    //
    //         $("#green").fadeOut(1000, showhide);
    //
    //     });

    //}



    $('.headers')
        .waypoint(function(direction) {
            if (direction === 'down') {
                $('.fix-nav-menu').animate({
                    "top":"0"
                },700)
            }
            else {
                $('.fix-nav-menu').animate({
                    "top":"-100%"
                },700)
            }
        }, {
            offset: -120
        })
    
});