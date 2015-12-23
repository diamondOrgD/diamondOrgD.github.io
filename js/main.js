    $(document).ready(function(){

        $("#mobile-toggle").click(function(){
         $('.mobile-menu').toggleClass('mobile-vissible');
         $('.mob').toggleClass('mob-vissible');
         $('body').toggleClass('overflow');
     });
    });

/*-- burger-button --*/
    var Menu = {

      el: {
        ham: $('.menu'),
        menuTop: $('.menu-top'),
        menuMiddle: $('.menu-middle'),
        menuBottom: $('.menu-bottom')
    },

    init: function() {
        Menu.bindUIactions();
    },

    bindUIactions: function() {
        Menu.el.ham
        .on(
          'click',
          function(event) {
            Menu.activateMenu(event);
            event.preventDefault();
        }
        );
    },

    activateMenu: function() {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
    }
};

Menu.init();    



/*-------------------------
    Анимация хедера
---------------------------*/   

   var cbpAnimatedHeader = (function() {
    
            var docElem = document.documentElement,
                header = document.querySelector( '.index-header-nav' ),
                headerMobile = document.querySelector( '.mobile-header' ),
                logo = document.querySelector( '.index-header-logo' ),
                didScroll = false,
                changeHeaderOn = 1;
    
            function init() {
                window.addEventListener( 'scroll', function( event ) {
                    if( !didScroll ) {
                        didScroll = true;
                        setTimeout( scrollPage, 350 );
                    }
                }, false );
            }
    
            function scrollPage() {
                var sy = scrollY();
                if ( sy >= changeHeaderOn ) {
                    classie.add( header, 'index-header-nav-shrink' );
                    classie.add( headerMobile, 'mobile-header-add' );
                    classie.remove(logo, 'logo-standart' );
                    classie.add(logo, 'logo-dark' );

                }
                else {
                    classie.remove( header, 'index-header-nav-shrink' );
                    classie.remove( headerMobile, 'mobile-header-add' );
                    classie.remove(logo, 'logo-dark' );
                    classie.add(logo, 'logo-standart' );
                }
                didScroll = false;
            }
    
            function scrollY() {
                return window.pageYOffset || docElem.scrollTop;
            }
    
            init();
    
        })();

        /*-- --*/     


/*--------------------------------------*/


/*--------- Скролл по клику -------------*/
    $(document).ready(function(){
        $("#arrow-down").click(function(){
            $("html, body").animate({
                scrollTop: $(".intro-container").offset().top -140}, 1000);
        });
    });




/*-------------- Модальное окно ------------*/
   jQuery(document).ready(function($){
    //trigger the animation - open modal window
    $('[data-type="modal-trigger"]').on('click', function(){
        var actionBtn = $(this),
            scaleValue = retrieveScale(actionBtn.next('.cd-modal-bg'));
        
        actionBtn.addClass('to-circle');
        actionBtn.next('.cd-modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
        });

        //if browser doesn't support transitions...
        if(actionBtn.parents('.no-csstransitions').length > 0 ) animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
    });

    //trigger the animation - close modal window
    $('.cd-section .cd-modal-close').on('click', function(){
        closeModal();
    });
    $(document).keyup(function(event){
        if(event.which=='27') closeModal();
    });

    $(window).on('resize', function(){
        //on window resize - update cover layer dimention and position
        if($('.cd-section.modal-is-visible').length > 0) window.requestAnimationFrame(updateLayer);
    });

    function retrieveScale(btn) {
        var btnRadius = btn.width()/2,
            left = btn.offset().left + btnRadius,
            top = btn.offset().top + btnRadius - $(window).scrollTop(),
            scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());

        btn.css('position', 'fixed').velocity({
            top: top - btnRadius,
            left: left - btnRadius,
            translateX: 0,
        }, 0);

        return scale;
    }

    function scaleValue( topValue, leftValue, radiusValue, windowW, windowH) {
        var maxDistHor = ( leftValue > windowW/2) ? leftValue : (windowW - leftValue),
            maxDistVert = ( topValue > windowH/2) ? topValue : (windowH - topValue);
        return Math.ceil(Math.sqrt( Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2) )/radiusValue);
    }

    function animateLayer(layer, scaleVal, bool) {
        layer.velocity({ scale: scaleVal }, 400, function(){
            $('body').toggleClass('overflow-hidden', bool);
            (bool) 
                ? layer.parents('.cd-section').addClass('modal-is-visible').end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')
                : layer.removeClass('is-visible').removeAttr( 'style' ).siblings('[data-type="modal-trigger"]').removeClass('to-circle');
        });
    }

    function updateLayer() {
        var layer = $('.cd-section.modal-is-visible').find('.cd-modal-bg'),
            layerRadius = layer.width()/2,
            layerTop = layer.siblings('.btn').offset().top + layerRadius - $(window).scrollTop(),
            layerLeft = layer.siblings('.btn').offset().left + layerRadius,
            scale = scaleValue(layerTop, layerLeft, layerRadius, $(window).height(), $(window).width());
        
        layer.velocity({
            top: layerTop - layerRadius,
            left: layerLeft - layerRadius,
            scale: scale,
        }, 0);
    }

    function closeModal() {
        var section = $('.cd-section.modal-is-visible');
        section.removeClass('modal-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
            animateLayer(section.find('.cd-modal-bg'), 1, false);
        });
        //if browser doesn't support transitions...
        if(section.parents('.no-csstransitions').length > 0 ) animateLayer(section.find('.cd-modal-bg'), 1, false);
    }
});


/*-------------- Галерея ------------*/
$(document).ready(function() {

    $(".library-element-simple").magnificPopup({
        type : 'image', 
        gallery : {
            enabled : true
        }, 
        removalDelay: 300,
        mainClass: 'mfp-fade'
    });
    
});
/*-------------- Слайдер модальных окон галереи ------------*/
var slider = new IdealImageSlider.Slider({
    selector: '#super-slider',
    height: 350,
    interval: 8000,
});
var slider = new IdealImageSlider.Slider({
    selector: '#super-slider-2',
    height: 350,
    interval: 8000, 
});
var slider = new IdealImageSlider.Slider({
    selector: '#super-slider-3',
    height: 350,
    interval: 8000,
});

slider.start();


/*--------------- Выставки -------------------*/
$(document).ready(function(){

    $(document).on('click', '.exhib-block', function () {
        var id = $(this).data('id'),
        $target = $('.exhib-modal').filter('[data-id="' + id + '"]');

        $target.addClass('exhib-modal-vissible');

        if($('.exhib-modal').hasClass('exhib-modal-vissible')){
            $('.exhib-modal-container').addClass('container-vissible');
            $('.exhib-overlay').addClass('overlay-vissible');
            $('body').addClass('overflow');
        } 
    });

    var closeExhibModal = function(){
        $('.exhib-overlay').click(function(){
            $('body').removeClass('overflow');
            $('.exhib-modal').removeClass('exhib-modal-vissible');
            $('.exhib-modal-container').removeClass('container-vissible');
            $(this).removeClass('overlay-vissible');
        });

        $('.exhib-modal-close').click(function(){
            $('body').removeClass('overflow');
            $('.exhib-modal').removeClass('exhib-modal-vissible');
            $('.exhib-modal-container').removeClass('container-vissible');
            $('.exhib-overlay').removeClass('overlay-vissible');
        });
    };
    closeExhibModal();    

    $('.exhib-overlay').css('height', $('.exhib-modal').height() + 360 + 'px');

});

/* -- slider -- */

var slider = new IdealImageSlider.Slider({
    selector: '#exhib-slider-1',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#exhib-slider-2',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#exhib-slider-3',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#exhib-slider-4',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#exhib-slider-5',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#exhib-slider-6',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#exhib-slider-7',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#exhib-slider-8',
    height: 350,
    interval: 8000,
});

slider.start();


/*--------------- Награды -------------------*/
$(function() {
    $( '#cbp-contentslider' ).cbpContentSlider();
 });

var slider = new IdealImageSlider.Slider({
    selector: '#prizes-slider-1',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#prizes-slider-2',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#prizes-slider-3',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#prizes-slider-4',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#prizes-slider-5',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#prizes-slider-6',
    height: 350,
    interval: 8000,
});

var slider = new IdealImageSlider.Slider({
    selector: '#prizes-slider-7',
    height: 350,
    interval: 8000,
});


// $('.nav-slider').bxSlider({
//   adaptiveHeight: true,
//   mode: 'fade'
// });


/* ------------ Модальное окно дополнительной информации ------------ */
$(document).ready(function(){

    $(document).on('click', '.more-block', function () {
        var id = $(this).data('id'),
        $target = $('.more-modal').filter('[data-id="' + id + '"]');

        $target.addClass('more-vissible');

        if($('.more-modal').hasClass('more-vissible')){
            $('.more-modal-container').addClass('container-vissible');
            $('.modal-overlay').addClass('overlay-vissible');
            $('body').addClass('overflow');


            $('.more-modal-image, .more-modal-title, .more-modal-articles, .modal-close').addClass('content-vissible');
        } 
    });

    var closeModal = function(){
        $('.modal-close, .more-close-button, .modal-overlay').on('click', function(){
            $('body').removeClass('overflow');
            $('.more-modal').removeClass('more-vissible');
            $('.more-modal-container').removeClass('container-vissible');
            $('.modal-overlay').removeClass('overlay-vissible');
            $('.more-modal-image, .more-modal-title, .more-modal-articles, .modal-close').removeClass('content-vissible');
        });
    };
    closeModal();

    $('.modal-overlay').css('height', $('.more-modal').height() + 360 + 'px');

});

/*------------------ слайдер дополниельной информации -----------------*/
$(document).ready(function(){
    $('.more-slider').bxSlider({
      minSlides: 2,
      maxSlides: 3,
      slideWidth: 350,
      slideMargin: 10
  });
});

/*-----------------  Founder ----------------------------*/
    $(document).ready(function(){
        $('.founder-image').waypoint(function(){
            $('.founder-image, .founder-ln-1, .founder-ln-2, .founder-ln-3, .founder-ln-4').addClass('animated fadeIn');
        },{
            offset: '40%'
        });


    });




/*------ Back to top --------*/
jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

});
