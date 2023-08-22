let what_is_new = new Swiper(".what_is_new", {
  slidesPerView: 3,
  spaceBetween: 174,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  //반복슬라이드
  // loop: true,
  // loopSlides: 9,
  //화면 넓이에 따른 슬라이드 설정
  breakpoints: {
    400: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
  }
});
$('.what_is_new').hover(function () {
  what_is_new.autoplay.stop();
}, function () {
  what_is_new.autoplay.start();
});