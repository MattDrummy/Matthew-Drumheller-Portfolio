$('.pop-up').fadeOut(0);
$('header').fadeOut(0);
$('footer').fadeOut(0);

$('.welcome-button').click((event)=> {
  $('.welcome-button').css('display', 'none');
  $('.pop-up').slideDown(1000, function(){
  })
  $('.index-canvas').css('opacity', '0.5')

  $('header').slideToggle(1000);
  $('footer').slideToggle(1000);

})

$('.close-button').click((event)=> {
  $('.index-canvas').css('opacity', '1')

  $('.pop-up').slideUp(1000, function(){
    $('.welcome-button').css('display', 'block');
  })
  $('header').slideToggle(1000);
  $('footer').slideToggle(1000);
})
