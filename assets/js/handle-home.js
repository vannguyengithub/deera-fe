$(document).ready(function() {
  $('.project__list').addClass('active');
  $('.project__list').on('scroll', function() {
    if ($(this).scrollTop() > 0) { 
      $(this).removeClass('active');
    }
  });
});
  
$(document).ready(function() {
  $('.menu__bars.brand-mobile').click(function() {
    $('.header__right').toggleClass('active');
  });
});