$(document).ready(function(e){

  /* 변수 */
  let everLandImgHeight = $(".phone_img_wrap").position().top;

  let docElem = document.documentElement;
  let pagesHeight = docElem.scrollTop; /* 현재 스크롤높이 */

  /* 함수 */


  /* 이벤트 */
  $(document).scroll(function(e){
    pagesHeight = docElem.scrollTop;
    if(pagesHeight >= everLandImgHeight-1100){
      $(".everland_app").addClass("scrolled");
    }
    else{
      $(".everland_app").removeClass("scrolled");
    }
  })

  $(window).resize(function(e){
    everLandImgHeight = $(".phone_img_wrap").position().top;
  })

  /* 초기화 */
})