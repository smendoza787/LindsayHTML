$(function() {
  // navbar title dissappears above 275px
  $(document).scroll(function(e) {
    var $scroll = $(this).scrollTop()
    var $scrolledName = $(".scrolled-name")

    if ($scroll > 175) {
      $scrolledName.removeClass('hidden');
      $scrolledName.removeClass('visually-hidden');
      setTimeout(function() {
        $scrolledName.removeClass('visually-hidden');
      }, 20);
    } else {
      $scrolledName.addClass('visually-hidden');
      $scrolledName.one('transitionend', function(e) {
        $scrolledName.addClass('visually-hidden');
      });
    }
  })

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});