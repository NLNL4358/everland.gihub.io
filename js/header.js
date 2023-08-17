$(document).ready(function(){

  /* 변수 */
  let gnbLi = document.querySelectorAll(".gnb_li")
  let snbUl = document.querySelectorAll(".snb_ul");

  let searchButton = document.querySelector(".search_button"); /* 데스크탑 서치버튼 */
  let modalSearchBar = document.querySelector(".modal_search_bar");  /* 데스크탑 모달 서치바 */
  let searchBarSearchButton = document.querySelector(".search_bar_search_button"); /* 검색 서치 버튼 */
  let searchBarCloseButton = document.querySelector(".search_bar_close_button"); /* 데스크탑 서치 x버튼  */


  /* 이벤트리스너 */
  gnbLi.forEach((item, index) => {  /* Nav */
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

  searchButton.addEventListener("click", function(e){ /* SearchButton */
    toggleSearchBar();
  })
  searchBarCloseButton.addEventListener("click", function(e){
    toggleSearchBar();
  })
  searchBarSearchButton.addEventListener("click", function(e){
    toggleSearchBar();
  })


  /* 마우스 휠 다운하여 상단에서 일정 떨어졌을때 헤더가 위에 붙고 전체 */
  $(window).on("wheel", function (event){
    let screenHeight = $(document).scrollTop();
    console.log(screenHeight);

    screenHeight > 50 ? $(".header").addClass("scrolled") : $(".header").removeClass("scrolled");
  })


  /* 함수 */
  function toggleSearchBar(){
    $(modalSearchBar).toggleClass("visible");
  }
  function toggleSearchBar(){
    $(modalSearchBar).toggleClass("visible");
  }
  
  /* 초기화 */
  gnbLi.forEach((item,index)=>{
    gnbLi[index].classList.remove("on");
  })
})