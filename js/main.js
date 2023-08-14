var swiper = new Swiper(".main_slide", {
  spaceBetween: 0,
  centeredSlides: true,
  speed : 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main_slide .swiper-pagination",
    clickable: true,
  },
});
/* 날씨 */
let apiURI = 'http://api.openweathermap.org/data/2.5/weather?q=Daejeon&appid=2821934c9ad6c1c2617558f2c234c481';
