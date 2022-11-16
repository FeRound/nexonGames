$(document).ready(function(){
  $(".mobile-menu-btn a, .mobile-gnb .close-btn").on("click",function(){
    $(".mobile-gnb").toggleClass("on");
    return false
  })

  var trailerswiper = new Swiper(".game-trailer .inner", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
    },
  });

  var fractionSwiper = new Swiper(".game-trailer .inner", {
    pagination: {
      el: ".swiper-pagination2",
      type: "fraction",
    },
  });
  trailerswiper.controller.control = fractionSwiper;








})

