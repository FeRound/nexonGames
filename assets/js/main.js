$(document).ready(function(){
  $(".mobile-menu-btn a, .mobile-gnb .close-btn").on("click",function(){//모바일 메뉴 버튼 클릭
    $(".mobile-gnb").toggleClass("on");
    return false
  })

  $(".gnb li").on('mouseenter', function(){ // 헤더 마우스호버 이벤트 ON 
    // $(".gnb-down-menu").css("height","300px");
    $(".gnb-down-menu").animate({
      height : "300px",
    },300)
  })
  $("#header").on("mouseleave", function(){ // 헤더 마우스호버 이벤트 OFF
    $(".gnb-down-menu").animate({
      height : "0",
    },300)
  })


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

