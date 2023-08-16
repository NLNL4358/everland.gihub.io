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
getJson("http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=2821934c9ad6c1c2617558f2c234c481&units=metric", function(err, data){
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
});

close.addEventListener("click", function() {
  mapMadal.style.display = "none"; // 모달 닫기
});

/* timetable */
let timetable = document.querySelector(".timetable");
const timetableArray = [
  {
    _id : "1",
    name : "씨라이언 빌리지 애니멀톡",
    time : "13:00",
  },
  {
    _id : "2",
    name : "장미성 뮤직 워터 BaMM",
    time : "13:00",
  },
  {
    _id : "3",
    name : "슈퍼윙스 애니멀 톡",
    time : "13:30",
  },
  {
    _id : "4",
    name : "슈팅워터펀&밤밤클럽",
    time : "13:30",
  },
  {
    _id : "5",
    name : "씨라이언 빌리지 애니멀톡",
    time : "14:00",
  },
  {
    _id : "6",
    name : "장미성 뮤직 워터 BaMM",
    time : "14:00",
  },
  {
    _id : "7",
    name : "슈퍼윙스 애니멀 톡",
    time : "14:30",
  },
  {
    _id : "8",
    name : "알버트 라이브 톡",
    time : "14:30",
  },
  {
    _id : "9",
    name : "씨라이언 빌리지 애니멀톡",
    time : "15:00",
  },
  {
    _id : "10",
    name : "장미성 뮤직 워터 BaMM",
    time : "15:00",
  },
  {
    _id : "11",
    name : "뿌빠 뱀과 육지거북 애니멀톡",
    time : "15:00",
  },
  {
    _id : "12",
    name : "레니의 대모험~ 드래곤 성을 찾아서~",
    time : "15:00",
  },
  {
    _id : "13",
    name : "슈퍼윙스 애니멀 톡",
    time : "15:30",
  },
  {
    _id : "14",
    name : "알버트 라이브 톡",
    time : "15:30",
  },
  {
    _id : "15",
    name : "씨라이언 빌리지 애니멀톡",
    time : "16:00",
  },
  {
    _id : "16",
    name : "장미성 뮤직 워터 BaMM",
    time : "16:00",
  },
  {
    _id : "17",
    name : "뿌빠 사막여우 애니멀톡",
    time : "16:00",
  },
  {
    _id : "18",
    name : "슈퍼윙스 애니멀 톡",
    time : "16:30",
  },
  {
    _id : "19",
    name : "슈팅워터펀&밤밤클럽",
    time : "16:30",
  },
  {
    _id : "20",
    name : "장미성 뮤직 워터 BaMM",
    time : "17:00",
  },
  {
    _id : "21",
    name : "레니의 대모험~ 드래곤 성을 찾아서~",
    time : "17:30",
  },
  {
    _id : "22",
    name : "장미성 뮤직 워터 BaMM",
    time : "18:00",
  },
  {
    _id : "23",
    name : "장미성 뮤직 워터 BaMM",
    time : "19:00",
  },
  {
    _id : "24",
    name : "문라이트 퍼레이드",
    time : "20:30",
  },
  {
    _id : "25",
    name : "가든 오브 라이츠 with SHINee",
    time : "21:00",
  },
  {
    _id : "26",
    name : "EVERTOPIA - The Origin of Everland",
    time : "21:30",
  },
]

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
