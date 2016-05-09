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
        $(".lin-top-slider span").animate({"width":"0%"},0).animate({
            "width":"200%"
        },3000,function () {
            $(".lin-top-slider span").animate({
                "width":"0%"
            },0 ,slidTime())
        });
    }
    
    
    // \загрузка\

    
    // Слайдеры 
    var slidOne = $('.bxslider').bxSlider({
        pager: false,
        pause:"3000",
        controls: false,
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


    var slidTwo = $('.slid-utp').bxSlider({
        pager: false,
        pause:"3000",
        controls:false,
        adaptiveHeight:true,
    });
    
    
    $('.slid-prev').bind('click', function () {
        slidOne.goToPrevSlide();
        slidTwo.goToPrevSlide();
        slidTime();
    });

    $('.slid-next').bind('click', function () {
        slidOne.goToNextSlide();
        slidTwo.goToNextSlide();
        slidTime();
    });
    
    
    $('.slid-utp').bxSlider({
        pager: false,
        auto:true,
        pause:"3000",
    });
    
    // $('.slid-next,.slid-prev').bind("click", function () {
    //     slidTime();
    // });


    $('.slid-day-night,.ones,.slid-parade,.slid-beside').bxSlider({
        pager: false,
        nextText:"<i class='slid-next'></i>",
        prevText:"<i class='slid-prev'></i>",
     
    });

   

    $(".two-slid").animate({"opacity":"0"}).css({"display":"none"});

   


    $(".day-night").bind("click", function () {
        if(!$(this).hasClass("active")){
            $(".button-slid a").removeClass("active");
            $(this).addClass("active");
            $('.two-slid').animate({"opacity":"0"},0).fadeOut();
            $(".wrapper-day-night").animate({"opacity":"1"},0).fadeIn(1000);
        }else{
            $(".wrapper-day-night,.two-slid").animate({"opacity":"0"},1000).fadeOut();
            $(".button-slid a").removeClass('active');
        }
    });
    
    $('.parade').bind("click", function () {
        if(!$(this).hasClass("active")){
            $(".button-slid a").removeClass("active");
            $(this).addClass("active");
            $('.two-slid').animate({"opacity":"0"},0).fadeOut();
            $(".wrapper-parade").animate({"opacity":"1"},0).fadeIn(1000);
        }else{
            $(".wrapper-parade,.two-slid").animate({"opacity":"0"},1000).fadeOut();
            $(".button-slid a").removeClass('active');
        }
    });
    $('.beside').bind("click", function () {
        if(!$(this).hasClass("active")){
            $(".button-slid a").removeClass("active");
            $(this).addClass("active");
            $('.two-slid').animate({"opacity":"0"},0).fadeOut();
            $(".wrapper-beside").animate({"opacity":"1"},0).fadeIn(1000);
        }else{
            $(".wrapper-beside,.two-slid").animate({"opacity":"0"},1000).fadeOut();
            $(".button-slid a").removeClass('active');
        }
    });
    

    



    // $('.slider-spaces').bxSlider({
    //     pagerCustom: '#slider-spaces-pager',
    //     mode: 'vertical',
    //     adaptiveHeight: true,
    //     controls:false
    // });

    $('.po-slider').bxSlider({
        pagerCustom: '#po-pager',
        nextText:"<i class='slid-next-po'></i>",
        prevText:"<i class='slid-prev-po'></i>",
        // mode: 'vertical',
        // adaptiveHeight: true,
        // controls:false
    });

    // \Слайдеры \
    
    
    
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
    

    
    // Акордион
    $(function() {

        $('.acordion').on('click', '.item', function() {
            if($(this).hasClass('active')){
                $(this).removeClass("active").find('.content-item').slideUp();
            }
            else{
                $(this)
                    .addClass('active').siblings().removeClass('active')
                    .closest('.acordion').find('.content-item').slideUp().removeClass('active').eq($(this).index()).slideDown();  
            }
           
        });

    });

    $('.mort-acord .item.active').find('.content').slideDown();
    
    $('.mort-acord .item').bind('click', function () {
        if(!$(this).hasClass('active')){
            $('.mort-acord .item').removeClass('active').find('.content').slideUp(700);
            $(this).addClass('active').find('.content').slideDown(700);   
        }
        
    });

    // \Акордион\
    $(function(){
        $(window).load(function() {
            slidOne.startAuto();
            slidTwo.startAuto();
            slidTime();
        });

    });
    
    
    
    // скрол
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    
    
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

    $('.header-table')
        .waypoint(function(direction) {
            if (direction === 'down') {
                $('.header-table').addClass('table-fix')
            }
            else {
                $('.header-table').removeClass('table-fix')
            }
        }, {
            offset: 58
        });
    
    
    $('.img')
        .css({"opacity":"0"})
        .waypoint(function(direction) {
            if (direction === 'down') {
                $(this.element).animate({"opacity":"1"}).addClass('animated fadeInLeft');
            }
            else {
                $(this.element).animate({"opacity":"0"}).removeClass('animated fadeInLeft')
            }
        }, {
            offset: "90%"
        });

    $('.title h3')
        .css({"opacity":"0"})
        .waypoint(function(direction) {
            if (direction === 'down') {
                $(this.element).animate({"opacity":"1"}).addClass('animated fadeInRight');
            }
            else {
                $(this.element).animate({"opacity":"0"}).removeClass('animated fadeInRight')
            }
        }, {
            offset: "90%"
        });

    $('.title p')
        .css({"opacity":"0"})
        .waypoint(function(direction) {
            if (direction === 'down') {
                $(this.element).animate({"opacity":"1"}).addClass('animated fadeInUp');
            }
            else {
                $(this.element).animate({"opacity":"0"}).removeClass('animated fadeInUp')
            }
        }, {
            offset: "90%"
        });
    
    // \скрол\


    // сортировка
       
    //$("#myTable").tablesorter();
        $(function(){
            $(".table-cast").tablesorter({
                widgets        : ['zebra', 'columns'],
                usNumberFormat : false,
                sortReset      : true,
                sortRestart    : true
            });
        });
    // сортировка


    $('ul.tab-caption').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('.tab-content li').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.tab-content').find('li').each(function() {
        var $parent = $(this);
        $parent.find('svg').panzoom({
            contain: 'invert',
            increment: 1,
            maxScale: 10,
            minScale: 1,
            $zoomIn: $parent.find(".zoom-in"),
            $zoomOut: $parent.find(".zoom-out"),
        });
    });

    // fancybox
  
    $(".link-popap").fancybox({
        helpers : {
            overlay: {
                locked: false
            }
        },
    });

    $(".link-popap-map").fancybox({
        helpers : {
            title: {
                type: 'inside',
                position: 'top'
            },
            overlay: {
                locked: false
            }
        },
    });



    $(".fancybox").fancybox({
        wrapCSS:"wrappVideo",
        nextEffect  : 'fade',
        prevEffect  : 'fade',
        padding     : 0,
        margin      : [15, 15, 40, 15],
        maxWidth: '640px',
        maxHeight:"360px",
        helpers : {
            title: {
                type: 'inside',
                position: 'top'
            },
            overlay: {
                locked: false
            }
        },
        afterLoad   : addLinks,
        beforeClose : removeLinks
       
    });
    
    function addLinks() {
        var list = $("#links");
        if (!list.length) {
            list = $('<ul id="links">');

            for (var i = 0; i < this.group.length; i++) {
                $('<li data-index="' + i + '"><a href="#"> Видео ' + (i+1) + '</a></li>').click(function() { $.fancybox.jumpto( $(this).data('index'));}).appendTo( list );
            }

            list.appendTo( 'body' );
        }

        list.find('li').removeClass('active').eq( this.index ).addClass('active');
    }

    function removeLinks() {
        $("#links").remove();
    }


    $(".fancybox-camera").fancybox({
        wrapCSS:"wrappVideo",
        nextEffect  : 'fade',
        prevEffect  : 'fade',
        padding     : 0,
        margin      : [15, 15, 40, 15],
        maxWidth: '607px',
        maxHeight:"448px",
        helpers : {
            title: {
                type: 'inside',
                position: 'top'
            },
            overlay: {
                locked: false
            }
        },
        afterLoad   : addLinks1,
        beforeClose : removeLinks1

    });

    function addLinks1() {
        var list = $("#links");
        if (!list.length) {
            list = $('<ul id="links">');

            for (var i = 0; i < this.group.length; i++) {
                $('<li data-index="' + i + '"><a href="#"> камера ' + (i+1) + '</a></li>').click(function() { $.fancybox.jumpto( $(this).data('index'));}).appendTo( list );
            }

            list.appendTo( 'body' );
        }

        list.find('li').removeClass('active').eq( this.index ).addClass('active');
    }

    function removeLinks1() {
        $("#links").remove();
    }

    
   
    $(".but-zoom").fancybox({
        wrapCSS:"galegeBottomTitle",
        helpers		: {
            title	: { 
                type : 'inside' ,
                position: 'buttom'
            },
            overlay: {
                locked: false
            }
        }
    });
  
    
    
    
    // \fancybox\

});



