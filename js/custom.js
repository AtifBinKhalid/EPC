 jQuery(document).ready(function($) {

     "use strict";

     (function($) {

         var nav = $('.header-section');
         $(window).scroll(function() {
             if ($(this).scrollTop() > 62) {
                 nav.addClass("fixed");
             } else {
                 nav.removeClass("fixed");
             }
         });

         var lastId,
             topMenu = $("#top-menu"),
             topMenuHeight = topMenu.outerHeight() + 15,
             menuItems = topMenu.find("a"),
             scrollItems = menuItems.map(function() {
                 var item = $($(this).attr("href"));
                 if (item.length) { return item; }
             });

         // scroll animation
         menuItems.click(function(e) {
             var href = $(this).attr("href"),
                 offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
             $('html, body').stop().animate({
                 scrollTop: offsetTop
             }, 300);
             e.preventDefault();
         });

         // Bind to scroll
         $(window).scroll(function() {
             var fromTop = $(this).scrollTop() + topMenuHeight;
             var cur = scrollItems.map(function() {
                 if ($(this).offset().top < fromTop)
                     return this;
             });
             cur = cur[cur.length - 1];
             var id = cur && cur.length ? cur[0].id : "";
             if (lastId !== id) {
                 lastId = id;
                 menuItems
                     .parent().removeClass("active")
                     .end().filter("[href=#" + id + "]").parent().addClass("active");
             }
         });
     })(jQuery);


     (function($) {
         $(window).load(function() {
             $('#preloader').hide();
         });
     })(jQuery);


     (function($) {
         $('.countdown').downCount({
             date: '06/06/2016 12:00:00',
             offset: +1
         });
     })(jQuery);


     (function($) {

         var lastId,
             topMenu = $("#top-menu"),
             topMenuHeight = topMenu.outerHeight() + 15,
             menuItems = topMenu.find("a"),
             scrollItems = menuItems.map(function() {
                 var item = $($(this).attr("href"));
                 if (item.length) { return item; }
             });


         menuItems.click(function(e) {
             var href = $(this).attr("href"),
                 offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
             $('html, body').stop().animate({
                 scrollTop: offsetTop
             }, 300);
             e.preventDefault();
         });

         // Bind to scroll
         $(window).scroll(function() {
             var fromTop = $(this).scrollTop() + topMenuHeight;
             var cur = scrollItems.map(function() {
                 if ($(this).offset().top < fromTop)
                     return this;
             });
             cur = cur[cur.length - 1];
             var id = cur && cur.length ? cur[0].id : "";
             if (lastId !== id) {
                 lastId = id;
                 menuItems
                     .parent().removeClass("active")
                     .end().filter("[href=#" + id + "]").parent().addClass("active");
             }
         });
     })(jQuery);

     (function($) {
         $('.go-to-about').click(function() {
             $('html, body').animate({
                 scrollTop: $($(this).attr('href')).offset().top
             }, 500);
             return false;
         });
     })(jQuery);


     (function($) {
         new WOW().init();
     })(jQuery);

 });