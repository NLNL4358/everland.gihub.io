/* 메인슬라이드 */
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
let weatherIcon = {
  '01' : 'clear_sky',
  '02' : 'few_cloud',
  '03' : 'cloud',
  '04' : 'broken_cloud',
  '09' : 'shower_rain',
  '10' : 'rain',
  // '11' : 'poo-storm',
  // '13' : 'snowflake',
  // '50' : 'smog'
};
const xhr = new XMLHttpRequest();
const getJson = function(url, callback) {
  xhr.open("GET", url, true);
  xhr.responseType = "json";  // 오타 수정
  xhr.onload = function() {
    const status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  }
  xhr.send();
}
getJson("http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=2821934c9ad6c1c2617558f2c234c481&units=metric", function(err, data){
  if (err !== null) {
    alert("로딩 중" + err)
  } else {
    let CurrTemp = document.querySelector('.CurrTemp span');
    let CurrIcon = document.querySelector('.CurrIcon img');
    CurrTemp.innerText = Math.floor(data.main.temp);
    let Icon = (data.weather[0].icon).substr(0,2);
    let imgURL = `img/weather/${weatherIcon[Icon]}.png`;
    CurrIcon.setAttribute("src", imgURL);
  }
});

/* 오늘 날짜 */
let today = new Date();   

let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let day = today.getDay();  // 요일
const week = ["일","월","화","수","목","금","토"];
let dayOfWeek = week[day];

let getToday = document.querySelector(".getToday");

getToday.innerText = `${month}월 ${date}일 (${dayOfWeek})`;

/* modal */
let mapMadalOpen = document.querySelector(".weather_map_api .map");
let mapMadal = document.querySelector(".map_modal");
let close = document.querySelector(".close");

mapMadalOpen.addEventListener("click", function() {
  mapMadal.style.display = "block"; // 모달 열기
});

close.addEventListener("click", function() {
  mapMadal.style.display = "none"; // 모달 닫기
});

/* 지도 */
let mapContainer = document.getElementById("kakao_map");
let options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(37.2939104, 127.2025664), //지도의 중심좌표.
	level: 5 //지도의 레벨(확대, 축소 정도)
};
let map = new kakao.maps.Map(mapContainer, options);

let content = '<div class ="label">에버랜드</div>';

// 커스텀 오버레이가 표시될 위치입니다 
let position = new kakao.maps.LatLng(37.2939104, 127.2025664);  

// 커스텀 오버레이를 생성합니다
let customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content   
});

// 커스텀 오버레이를 지도에 표시합니다
customOverlay.setMap(map);
