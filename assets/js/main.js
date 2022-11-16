$(document).ready(function(){
  $(".mobile-menu-btn a, .mobile-gnb .close-btn").on("click",function(){// 모바일 메뉴 버튼
    $(".mobile-gnb").toggleClass("on");
    return false
  })

  $(".gnb-wrap .gnb li, .gnb-down-menu").on('mouseenter', function(){
    $(".gnb-down-menu").fadeIn(2000)
    console.log("on")
  })
  $(".gnb-wrap .gnb li, .gnb-down-menu").on('mouseleave', function(){
    $(".gnb-down-menu").fadeOut(2000)
    console.log("off")
  })

  var trailerswiper = new Swiper(".main-video-swiper", { //비디오 스와이퍼
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });

  var fractionSwiper = new Swiper(".main-video-swiper", { //비디오 스와이퍼(pagination 하나 더 추가)
    pagination: {
      el: ".swiper-pagination2",
      type: "fraction",
    },
  });
  trailerswiper.controller.control = fractionSwiper;

  var setion2Swiper = new Swiper(".section2-swiper", { // section2 스와이퍼
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });






})

