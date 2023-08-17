$(document).ready(function(){

  /* 변수 */
  let tabButton = document.querySelectorAll(".tab_button");
  let tabInnerContentsWrap = document.querySelectorAll(".tab_inner_contents_wrap");

  let boxShadow = new Array;
  boxShadow[0] = "0px 0px 10px rgb(9,93,210)"
  boxShadow[1] = "0px 0px 10px rgb(168,210,0)"
  boxShadow[2] = "0px 0px 10px rgb(253,192,196)"

  /* 함수 */
  function tabFunction(tabIndex){
    for(let i = 0; i < tabButton.length ; i++){
      tabButton[i].classList.remove("selected");
      tabInnerContentsWrap[i].classList.remove("selected");
    }
    tabButton[tabIndex].classList.add("selected");
    tabInnerContentsWrap[tabIndex].classList.add("selected");
  }

  /* 이벤트 리스너 */
  for(let i = 0 ; i < tabButton.length ; i++){
    tabButton[i].addEventListener("click",function(e){
      tabFunction(i);
      $(".clip_image_wrap").css("boxShadow",boxShadow[i]);
    });
  }
  /* 초기화 */
})