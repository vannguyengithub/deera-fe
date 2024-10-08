const swiper = new Swiper('.deera__newkol-swiper', {
    loop: true,
    // slidesPerView: 2,
    // spaceBetween: 100,
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
    breakpoints: {
      // when window width is >= 0px and < 480px (mobile)
      0: {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: true,

      },
      // when window width is >= 480px and < 1024px (tablet)
      480: {
        slidesPerView: 2,
        spaceBetween: 50,
        centeredSlides: true,
      },
      // when window width is >= 1024px (PC)
      1024: {
        slidesPerView: 2,
        spaceBetween: 120,
      },
    }
  });

  const swiperNews = new Swiper('.news__swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiperNewsDeera = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
  });


  // const swiperServices = new Swiper('.service__swiper', {
  //   loop: true,
  //   direction: 'vertical', 
  //   mousewheel: true,      
  //   slidesPerView: 3,
  //   spaceBetween: 50,
  // });

  // const swiperDetail = new Swiper('.kols__detail-swiper', {
  //   spaceBetween: 1,
  //   slidesPerView: 3,
  //   loop: true,
  //   centeredSlides: true,
  //   initialSlide: 1, 
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev"
  //   }
  // });

  const swiperServices = new Swiper('.our__service-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperServiceExtend= new Swiper('.service-extend-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const swiperClinets = new Swiper('.clinets__swiper', {
    loop: true,
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    slidesPerGroup : 3,
    spaceBetween: 12,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
  