$(document).ready(function(){
  var trailerswiper = new Swiper(".main-video-swiper", { //메인배너 비디오 스와이퍼
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });
  
  var fractionSwiper = new Swiper(".main-video-swiper", { //메인배너 비디오 스와이퍼(pagination 하나 더 추가)
    loop: true,
    pagination: {
      el: ".swiper-pagination2",
      type: "fraction",
    },
  });
  trailerswiper.controller.control = fractionSwiper;

  var setion2Swiper = new Swiper(".section2-swiper", { // 메인 section2 스와이퍼
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var charSwiper = new Swiper(".v4-swiper", { // V4 캐릭터 스와이퍼
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })

  var bottomSwiper = new Swiper(".bottom-swiper", { // game 하단 스와이퍼 
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
  });
})


