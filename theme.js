/**
 * Created by Alvaro on 30/12/13.
 */
if (!jQuery) {
  throw new Error("jQuery es requerido");
}

//noinspection JSHint
!function ($) {
  "use strict";

  // PUBLIC CLASS DEFINITION
  // ==============================
  var Theme = {
    load: function() {
      $('.port-hex-wrap > .hexagon').each(function() {
        var randSeconds = Math.ceil(Math.random() * 25);
        var randDelay = randSeconds * 100;
        var $el = $(this);
        setTimeout(function(){
          $el
            .removeClass('invisible')
            .addClass('animated bounceInDown')
            .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
              setTimeout(function(){
                $el.find('img').removeClass('invisible');
                $el.removeClass('animated bounceInDown');
              }, 300);
            });
        }, randDelay);
      });
    },
    ready: function() {
      $('.port-hex-wrap > .hexagon')
        //.addClass('invisible')
        .find('img').addClass('invisible fx');
    }

  };


  // BUTTON PLUGIN DEFINITION
  // ========================
  $.theme = Theme;


  // BUTTON DATA-API
  // ===============
  $(document).on('ready', $.theme.ready);
  $(window).on('load', $.theme.load);


}(window.jQuery);
