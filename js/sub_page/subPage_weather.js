
/* 날씨 */
let weatherIcon = { // 날씨아이콘 변경
  '01' : 'clear_sky',
  '02' : 'few_cloud',
  '03' : 'cloud',
  '04' : 'broken_cloud',
  '09' : 'shower_rain',
  '10' : 'rain',
  '11' : 'thunderstorm',
  '13' : 'snow',
  '50' : 'thunderstorm'
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
    let imgURL = `img/main/weather/${weatherIcon[Icon]}.png`; // 날씨 아이콘 이미지
    CurrIcon.setAttribute("src", imgURL);
  }
});
