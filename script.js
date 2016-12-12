$(document).ready(function() {
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: 300,
    gutter: 10,
    stagger: 30,
    fitWidth: true
  });

  $('.grid-item').hover(
       function(){ $(this).addClass('animated pulse pulse-over') },
       function(){ $(this).removeClass('animated pulse pulse-over') }
)

});
