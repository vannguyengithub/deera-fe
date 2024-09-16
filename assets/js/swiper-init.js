const swiper = new Swiper('.deera__newkol-swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span>` +
                `<span class="swiper-pagination-separator"> — </span>` +
                `<span class="${totalClass}"></span>`;
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperNews = new Swiper('.news__swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // const swiperServices = new Swiper('.service__swiper', {
  //   loop: true,
  //   direction: 'vertical', 
  //   mousewheel: true,      
  //   slidesPerView: 3,
  //   spaceBetween: 50,
  // });
  