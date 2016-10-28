requirejs.config({
    baseUrl:'./public/js'
});

define(["jquery",  "isotope.pkgd.min", "index"], function ($, Isotope){
    "use strict";

        var Portfolio = {

        init: function() {
            this.tabsBox();
        },
        tabsBox: function() {
            var iso = new Isotope( '.grid');

            $('.filter-button-group').on( 'click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                iso.arrange({ filter: filterValue });
            });

            }
    };


    Portfolio.init();
});

