const swiper = new Swiper('.deera__newkol-swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 112,
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
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    // loopAdditionalSlides: 1,
  });

  const swiperNews = new Swiper('.news__swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    // loopAdditionalSlides: 1,
  });


  
  