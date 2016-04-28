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
        $(this).toggleClass("is-active");
    });

    $('.bxslider').bxSlider({
        pager: false,
        //adaptiveHeight: true,
        nextText:"<i class='slid-next'></i>",
        prevText:"<i class='slid-prev'></i>"
    });

});