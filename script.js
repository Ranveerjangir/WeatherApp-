const inputbox = document.querySelector(".input-box");
const searchBtn =document.getElementById(".searchbtn");
const temperature =document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.querySelector(".humidity");
const wind_speed=document.querySelector(".wind_speed");



async function checkweather(city){
    const api_key ="5bb71356faf00b10315b3e3bc233c885";
    console.log(api_key)
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>response.json());

    // console.log(weather_data)
    temperature.innerHTML =`${Math.round(weather_data.main.temp -273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML =`${weather_data.wind.speed}km/h`;

}
searchbtn.addEventListener("click",()=>{
    checkweather(inputbox.value);

   
})