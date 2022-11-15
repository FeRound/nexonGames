$(document).ready(function(){
  $(".mobile-menu-btn a, .mobile-gnb .close-btn").on("click",function(){
    $(".mobile-gnb").toggleClass("on");
    return false
  })
})