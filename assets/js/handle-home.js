$(document).ready(function() {
    $('.project__list').addClass('active');
    $('.project__list').on('scroll', function() {
      if ($(this).scrollTop() > 0) { 
        $(this).removeClass('active');
      }
    });
    // $('.project__list').addClass('active');

    // let lastScrollTop = 0;

    // $('.project__list').on('scroll', function() {
    //   let currentScrollTop = $(this).scrollTop();

    //   if (Math.abs(currentScrollTop - lastScrollTop) > 20) {
    //     $(this).removeClass('active');
    //   }

    //   lastScrollTop = currentScrollTop;
    // });
  });
  