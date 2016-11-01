(function() {
  'use strict';

  $('.photos')
      .find('li')
          .on('click', function zoomin(event) {
              $(this).toggleClass('zoomed');
              $('main').toggleClass('zooming');
              $(this).append(   $('nav')   );
          })
$('nav')
      .find('.previous')
          .on('click', function nextImage(event) {

            event.stopPropagation()
            var $target = $(event.target);   
            var nextImage = $(this).closest('li').prev();
            var previousImage = $(this).closest('li').next();

           if($target.is('.next')) {
           nextImage.toggleClass('zoomed')
           .append($('nav'));
         }

           if ($target.is('.previous')) {
           previousImage.toggleClass('zoomed')
           .append($('nav'));
         }

})



















})();
