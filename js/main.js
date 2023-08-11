var swiper = new Swiper(".main_slide", {
  spaceBetween: 0,
  centeredSlides: true,
  speed : 1000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});