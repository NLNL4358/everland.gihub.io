$(document).ready(function(){

  /* 변수 */
  let gnbLi = document.querySelectorAll(".gnb_li")
  let snbUl = document.querySelectorAll(".snb_ul");

  /* 이벤트리스너 */
  gnbLi.forEach((item, index) => {
    $(gnbLi[index]).mouseover(function(event){
      gnbLi.forEach((itemA, indexA)=>{
        gnbLi[indexA].classList.remove("on");
      })
      gnbLi[index].classList.add("on");
    })
  });
  gnbLi.forEach((item, index) => {
    $(gnbLi[index]).mouseout(function(event){
      gnbLi[index].classList.remove("on");
    })
  });


  /* 함수 */


  /* 초기화 */
  gnbLi.forEach((item,index)=>{
    gnbLi[index].classList.remove("on");
  })
})