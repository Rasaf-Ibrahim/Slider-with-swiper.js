//  Swiper.js

var swiper = new Swiper('.swiper-container1', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination1',
    },
  });

  //  (End) Swiper.js


  // swiper.js - Parallax Scrolling

var swiper = new Swiper('.swiper-container2', {
  speed: 600,
  parallax: true,
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//  (End) swiper.js - Parallax Scrolling