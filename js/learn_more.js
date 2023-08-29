let sideBarBtn = document.querySelectorAll(".theme_story_side_bar button");
let themeStoryContent = document.querySelectorAll(".theme_story_inner .tab_content");

sideBarBtn.forEach((item, idx)=>{
  item.addEventListener("click",()=>{
    tabMenuBtn(idx);
    tabContentShow(idx);
  });
});

function tabMenuBtn(num){
  sideBarBtn.forEach((item)=>{
    item.classList.remove("active");
  });
  sideBarBtn[num].classList.add("active");
}

function tabContentShow(num) {
  themeStoryContent.forEach((item)=>{
    item.classList.remove("show");
  });
  themeStoryContent[num].classList.add("show");
}

let mobileSideBar = document.querySelector(".mobile_btn");
let mobileSideBarActive = document.querySelector(".learn_more_main .side_menu .mobile_side_bar > li ul")

mobileSideBar.addEventListener("click", ()=>{
  mobileSideBarActive.classList.toggle("active");
});