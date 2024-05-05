let searchCityInput = document.querySelector("#searchCity");
let weatherData ; 


async function getWeather(key) {
  let finalData, response;
  response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=1014b20f2652477eb8f223842243003&q=${key}&days=3`
  );
  finalData = await response.json();
  return finalData;
  
}
async function startApp(key){
  weatherData=await getWeather(key)
  todayData();
  tommorow();
  thirdDay()
  }

// let date =new Date(weatherData.location.localtime)
//     console.log(date.getDate()); 
//     console.log(date.toLocaleDateString('en-US',{month:'long'}));

  async function todayData(){

 
    let date =new Date(weatherData.location.localtime)

    document.getElementById('day').innerHTML=date.toLocaleDateString('en-US',{weekday:'long'})
    document.getElementById('dayDate').innerHTML=date.getDate()
    document.getElementById('monthDate').innerHTML=date.toLocaleDateString('en-US',{month:'short'})

    document.getElementById('Name').innerHTML=weatherData.location.name;
    document.getElementById('Degree').innerHTML=weatherData.current.temp_c+'<span>&deg;<span/>'+'C';
    document.getElementById('Status').innerHTML=weatherData.current.condition.text;
    document.getElementById('Image').setAttribute('src','http:'+weatherData.current.condition.icon)     // 'http:' can put and not
    document.getElementById('persent').innerHTML=weatherData.current.wind_mph+"%"
    document.getElementById('persent1').innerHTML=weatherData.current.wind_kph+"km/h"
    document.getElementById('persent2').innerHTML=weatherData.current.wind_dir
  }

  async function tommorow(){
    let date =new Date(weatherData.forecast.forecastday[1].date)

    document.getElementById('secDay').innerHTML=date.toLocaleDateString('en-US',{weekday:'long'})
    document.getElementById('secImage').setAttribute('src','http:'+weatherData.forecast.forecastday[1].day.condition.icon)
    document.getElementById('secMaxTemp').innerHTML=weatherData.forecast.forecastday[1].day.maxtemp_c+'<span>&deg;<span/>'+'C'
    document.getElementById('secMinTemp').innerHTML=weatherData.forecast.forecastday[1].day.mintemp_c+'<span>&deg;<span/>'+'C'
    document.getElementById('secWind').innerHTML=weatherData.forecast.forecastday[1].day.condition.text
  
  }
  async function thirdDay(){
    let date =new Date(weatherData.forecast.forecastday[2].date)
    
    document.getElementById('thirdDay').innerHTML=date.toLocaleDateString('en-US',{weekday:'long'})
    document.getElementById('thirdImage').setAttribute('src','http:'+weatherData.forecast.forecastday[2].day.condition.icon)
    document.getElementById('thirdMaxTemp').innerHTML=weatherData.forecast.forecastday[2].day.maxtemp_c+'<span>&deg;<span/>'+'C'
    document.getElementById('thirdMinTemp').innerHTML=weatherData.forecast.forecastday[2].day.mintemp_c+'<span>&deg;<span/>'+'C'
    document.getElementById('thirdWind').innerHTML=weatherData.forecast.forecastday[2].day.condition.text
  
  }


startApp('cairo');
searchCityInput.addEventListener("keyup", function () {
  startApp(searchCityInput.value);
 
});