 (function($) {

     var self = this,
         container, running = false,
         currentY = 0,
         targetY = 0,
         oldY = 0,
         maxScrollTop = 0,
         minScrollTop, direction, onRenderCallback = null,
         fricton = 0.95,
         vy = 0,
         stepAmt = 1,
         minMovement = 0.1,
         ts = 0.1;

     var updateScrollTarget = function(amt) {
         targetY += amt;
         vy += (targetY - oldY) * stepAmt;

         oldY = targetY;


     }
     var render = function() {
         if (vy < -(minMovement) || vy > minMovement) {

             currentY = (currentY + vy);
             if (currentY > maxScrollTop) {
                 currentY = vy = 0;
             } else if (currentY < minScrollTop) {
                 vy = 0;
                 currentY = minScrollTop;
             }

             container.scrollTop(-currentY);

             vy *= fricton;



             if (onRenderCallback) {
                 onRenderCallback();
             }
         }
     }
     var animateLoop = function() {
         if (!running) return;
         requestAnimFrame(animateLoop);
         render();

     }
     var onWheel = function(e) {
         e.preventDefault();
         var evt = e.originalEvent;

         var delta = evt.detail ? evt.detail * -1 : evt.wheelDelta / 40;
         var dir = delta < 0 ? -1 : 1;
         if (dir != direction) {
             vy = 0;
             direction = dir;
         }


         currentY = -container.scrollTop();

         updateScrollTarget(delta);
     }


     window.requestAnimFrame = (function() {
         return window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             function(callback) {
                 window.setTimeout(callback, 1000 / 60);
             };


     })();


     var normalizeWheelDelta = function() {
         var distribution = [],
             done = null,
             scale = 30;
         return function(n) {
             if (n == 0) return n;
             if (done != null) return n * done;
             var abs = Math.abs(n);
             outer: do {
                 for (var i = 0; i < distribution.length; ++i) {
                     if (abs <= distribution[i]) {
                         distribution.splice(i, 0, abs);
                         break outer;
                     }
                 }
                 distribution.push(abs);
             } while (false);

             var factor = scale / distribution[Math.floor(distribution.length / 3)];
             if (distribution.length == 500) done = factor;
             return n * factor;
         };
     }();


     $.fn.smoothWheel = function() {
         var options = jQuery.extend({}, arguments[0]);
         return this.each(function(index, elm) {

             if (!('ontouchstart' in window)) {
                 container = $(this);
                 container.bind("mousewheel", onWheel);
                 container.bind("DOMMouseScroll", onWheel);

                 targetY = oldY = container.get(0).scrollTop;
                 currentY = -targetY;

                 minScrollTop = container.get(0).clientHeight - container.get(0).scrollHeight;
                 if (options.onRender) {
                     onRenderCallback = options.onRender;
                 }
                 if (options.remove) {
                     log("122", "smoothWheel", "remove", "");
                     running = false;
                     container.unbind("mousewheel", onWheel);
                     container.unbind("DOMMouseScroll", onWheel);
                 } else if (!running) {
                     running = true;
                     animateLoop();
                 }

             }
         });
     };


 })(jQuery);