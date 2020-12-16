//  '923' swiper.js - 3D Coverflow Effect

var swiper = new Swiper('.swiper-container-923 ', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //  (End) '923' swiper.js - 3D Coverflow Effect