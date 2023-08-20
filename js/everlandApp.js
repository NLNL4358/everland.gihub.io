$(document).ready(function(e){

  /* 변수 */
  let everLandImgHeight = $(".phone_img_wrap").position().top;

  let docElem = document.documentElement;
  let pagesHeight = docElem.scrollTop; /* 현재 스크롤높이 */

  /* 함수 */


  /* 이벤트 */
  $(document).scroll(function(e){
    pagesHeight = docElem.scrollTop;
    console.log(pagesHeight);
    if(pagesHeight >= everLandImgHeight-500){
      $(".everland_app").addClass("scrolled");
    }
    else{
      $(".everland_app").removeClass("scrolled");
    }
  })

  /* 초기화 */
})