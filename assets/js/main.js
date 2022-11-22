$(document).ready(function(){
  $(".mobile-menu-btn a, .mobile-gnb .close-btn").on("click",function(){//모바일 메뉴 버튼 클릭
    $(".mobile-gnb").toggleClass("on");
    return false
  })

  $(".gnb-wrap .gnb li").on('mouseenter', function(){ // 헤더 마우스호버 이벤트 ON 
    $(".gnb-down-menu").animate({
      height : "300px",
    },200)
  })
  $("#header").on("mouseleave", function(){ // 헤더 마우스호버 이벤트 OFF
    $(".gnb-down-menu").animate({
      height : "0",
    },200)
  })









})

