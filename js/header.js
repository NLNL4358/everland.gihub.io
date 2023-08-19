$(document).ready(function(){

  /* 변수 */
  let gnbLi = document.querySelectorAll(".gnb_li")
  let snbUl = document.querySelectorAll(".snb_ul");

  let searchButton = document.querySelector(".search_button"); /* 데스크탑 서치버튼 */
  let modalSearchBar = document.querySelector(".modal_search_bar");  /* 데스크탑 모달 서치바 */
  let searchBarSearchButton = document.querySelector(".search_bar_search_button"); /* 검색 서치 버튼 */
  let searchBarCloseButton = document.querySelector(".search_bar_close_button"); /* 데스크탑 서치 x버튼  */


  let hamburgerButton = document.querySelectorAll(".mobile_nav_button");


  let mobileGnbLi = document.querySelectorAll(".mobile_gnb_li");
  let mobileSnbLiHeight = document.querySelector(".mobile_snb_li").offsetHeight;
  let mobileSnbUl = document.querySelectorAll(".mobile_snb_ul");
  let mobileSnbUlHeight = new Array;
  for(let i = 0 ; i < mobileSnbUl.length ; i++){
    mobileSnbUlHeight[i] = mobileSnbUl[i].dataset.len * mobileSnbLiHeight;
  }


  let bodyHeight = $("body").css("height");
  console.log(bodyHeight);



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

    screenHeight > 200 ? $(".header").addClass("scrolled") : $(".header").removeClass("scrolled");
  })


  /* 햄버거 버튼 */
  for(let i = 0 ; i < hamburgerButton.length ; i++){
    hamburgerButton[i].addEventListener("click", function(e){
      hamburgerOnOff(i);
    })
  }


  /* 모바일 gnb */
  for(let i = 0 ; i < mobileGnbLi.length ; i++){
    mobileGnbLi[i].addEventListener("click", function(e){
      mobileNavFunc(i);
    })
  }










  /* 함수 */
  function toggleSearchBar(){
    $(modalSearchBar).toggleClass("visible");
  }
  function toggleSearchBar(){
    $(modalSearchBar).toggleClass("visible");
  }
  
  function hamburgerOnOff(index){
    if(index){ /* 0이면 open, 1이면 close */
      $(".header").removeClass("hamburger");
      $(".header").css("position", "fixed");
    }
    else{
      $(".header").addClass("hamburger");
      $(".header").css("position", "relative");
      window.scrollTo({ top: 0, behavior: "auto" });  
    }
  }

  function mobileNavFunc(index){
    if(mobileGnbLi[index].classList.contains("selected")){
      mobileGnbLi[index].classList.remove("selected");
      setHeightMobileSnbUl(index, false);
    }
    else{
      for(let j= 0 ; j < mobileGnbLi.length ; j++){
        mobileGnbLi[j].classList.remove("selected");
        setHeightMobileSnbUl(index, false);
      }
      mobileGnbLi[index].classList.add("selected");
      setHeightMobileSnbUl(index, true);
    }
  }

    function setHeightMobileSnbUl(index, boolean){
      for(let i = 0 ; i < mobileSnbUl.length ; i++){
        $(mobileSnbUl[i]).css("height" , "0px");
      }
      if(boolean){
        $(mobileSnbUl[index]).css("height" , mobileSnbUlHeight[index] + "px");
      }
    }





  /* 초기화 */
  gnbLi.forEach((item,index)=>{
    gnbLi[index].classList.remove("on");
  });

  $(".mobile_div").css("height", bodyHeight);
})