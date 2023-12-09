let apiUrl="https://api.openweathermap.org/data/2.5/weather?q="
let apiKey="&appid=3cdc8663834da8898f44b11f35fe7695&units=";
let units="metric";
let temp=document.querySelector(".city-temperature");
let windspeed=document.querySelector(".wind-speed span");
let humidity=document.querySelector(".humidity span");
let cityNameCont=document.querySelector(".city-name");
let input=document.querySelector("input");
let weatherImage=document.querySelector(".weather-photo img");
let searchIcon=document.querySelector(".search");
let wrongName=document.querySelector(".wrong-city");
let WeatherBody=document.querySelector(".weather-body")
async function getWeather(cityName) {
let data= await (await fetch(apiUrl+cityName+apiKey+units)).json();
if(data.cod=="404"){
    WeatherBody.style.visibility="hidden";
    wrongName.style.display="block";
    }
    else{
        WeatherBody.style.visibility="visible";
        wrongName.style.display="none";
temp.innerHTML=Math.round(data.main.temp) + "°c";
windspeed.innerHTML=data.wind.speed + "km/h";
humidity.innerHTML=data.main.humidity+ "%";
cityNameCont.innerHTML=`${cityName}`;

if(data.weather[0].main=="Clear"){
weatherImage.src="./images/clear.png"
}
else if(data.weather[0].main=="Clouds"){
    weatherImage.src="./images/clouds.png"
}
else if(data.weather[0].main=="Mist"){
    weatherImage.src="./images/mist.png"
}else if(data.weather[0].main=="Rain"){
    weatherImage.src="./images/rain.png"
}else if(data.weather[0].main=="Drizzle"){
    weatherImage.src="./images/drizzle.png"
}else if(data.weather[0].main=="Snow"){
    weatherImage.src="./images/snow.png"
}
    }
}
getWeather("egypt");
searchIcon.addEventListener("click",(ele)=>{
    if(input.value!=" "){
getWeather(`${input.value}`)
input.value="";
    }
})