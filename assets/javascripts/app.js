$('.main').fadeOut(0);

$('.welcome-button').click((event)=> {
  $('.welcome-button').css('display', 'none');
  $('.main').slideDown(1000)
})
