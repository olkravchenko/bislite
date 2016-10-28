requirejs.config({
    baseUrl:'./public/js'
});

define(["jquery", "domReady", "slick"], function ($){
    "use strict";

  var Page = {
      init: function () {
          this.navigation();
      },
      navigation: function () {
          var navLink = $('.has-children');

          navLink.on('mouseenter', function () {
              $(this).find('.submenu').stop().slideDown('200');
          });
          navLink.on('mouseleave', function () {
              $(this).find('.submenu').stop().slideUp('200');
          });

      }
  };

    var Homepage = {
        init: function () {
            this.carouselTop();
            this.carouselBottom();
        },

        carouselTop: function () {
            $('.carousel__slide').slick({
                dots: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                //autoplay: true,
                autoplaySpeed: 2000
            });
        },

        carouselBottom: function () {

            $('.carousel__worksSlide').slick({
                arrows: true,

                slidesToShow: 4,
                slidesToScroll: 1,
                //autoplay: true,
                autoplaySpeed: 2000
            });
        }
    };

    var Portfolio = {

        init: function() {
            this.tabsBox();
        },
        tabsBox: function() {
            var iso = new Isotope( '.grid');
        }
    };

    Page.init();
    Homepage.init();
    //Portfolio.init();
});



