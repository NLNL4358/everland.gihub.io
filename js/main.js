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
let weatherIcon = { // 날씨아이콘 변경
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
  xhr.responseType = "json"; 
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
const WEATHER_API = config.apikey;
getJson(`http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${WEATHER_API}&units=metric`, function(err, data){
  if (err !== null) {
    alert("로딩 중" + err)
  } else {
    let CurrTemp = document.querySelector('.CurrTemp span');
    let CurrIcon = document.querySelector('.CurrIcon img');
    CurrTemp.innerText = Math.floor(data.main.temp); // 온도 소수점 없이
    let Icon = (data.weather[0].icon).substr(0,2);
    let imgURL = `img/weather/${weatherIcon[Icon]}.png`; // 날씨 아이콘 이미지
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

  // 지도
  new daum.roughmap.Lander({
    "timestamp" : "1692621012629",
    "key" : "2fwm4",
    "mapWidth" : "600",
    "mapHeight" : "600"
  }).render();
});

close.addEventListener("click", function() {
  mapMadal.style.display = "none"; // 모달 닫기
});

/* timetable */
let timetable = document.querySelector(".timetable");


const timetableArrPro = timetableArray.map(item => {
  return {
    name: item.name,
    time: item.time,
  }
});

timetableArrPro.forEach(item => {
  const listItem = document.createElement('li'); // 새로운 <li> 요소 생성
  listItem.innerHTML = `<span class="timetable_time">${item.time}</span><span class = "yellow_box"></span><span class="timetable_name">${item.name}</span>`; // HTML 내용 설정
  timetable.appendChild(listItem); // 생성한 <li> 요소를 .timetable에 추가
})

/* textcopy */
let copyLocation = document.querySelector(".copy_location");
let copyTelephone = document.querySelector(".copy_telephone");


function copyLocationText(){ 
  //inputTag라는 변수에 담긴 input 태그의 value(텍스트)를 클립보드에 쓰기
  navigator.clipboard.writeText("경기도 용인시 에버랜드로 199").then((res)=>{
    alert("주소가 복사되었습니다!");
  });
}
copyLocation.addEventListener("click", ()=>{copyLocationText()});

function copyTelephoneText(){ 
  //inputTag라는 변수에 담긴 input 태그의 value(텍스트)를 클립보드에 쓰기
  navigator.clipboard.writeText("031-320-5000").then((res)=>{
    alert("전화번호가 복사되었습니다!");
  });
}
copyTelephone.addEventListener("click", ()=>{copyTelephoneText()});
