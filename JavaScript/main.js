const locationInput = document.getElementById('location-input');

async function displayWeather() {
    navigator.geolocation.getCurrentPosition(async function userpos(pos) {
        const latit = pos.coords.latitude;
        const longit = pos.coords.longitude;
        console.log(latit, longit);
        const data = await weather(`${latit},${longit}`);
        displayInfo(data);
    });
}

displayWeather();

async function weather(userLoc) {
    let res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=07b2226a74a84507a8253408242106&q=${userLoc}&days=12`);
    let data = await res.json();
    console.log(data);
    return data; 
}

locationInput.addEventListener('input', async function (e) {
    
    const data = await weather(e.target.value);
    displayInfo(data);
});

function displayInfo(data) {  

    // date 
    let date = new Date(data.current.last_updated);
    const todayDate = date.getDate() 
    const month = date.toLocaleString('en-US', { month: 'long' });
    TodayDate.innerHTML = todayDate;
    Monthdate.innerHTML = month;

    // City Name
    let CityName = data.location.name;
    City.innerHTML = CityName;
    
    // Temperature
    let Temp = data.current.temp_c;
    Temperature.innerHTML = `${Temp} °C`;
    TdayTemp.innerHTML = `${Temp}`;

    let deep = data.current.dewpoint_c;
    TdaydeepC.innerHTML = deep;

    let feelsLike = data.current.feelslike_c;
    feels.innerHTML = `${feelsLike} °C`;

    let windSpeed = data.current.wind_kph;
    WindSpeed.innerHTML = `${windSpeed} km/h`;

    let humidity = data.current.humidity;
    Humidity.innerHTML = `${humidity} %`;

    let state = data.current.condition.text;
    TdayFeel.innerHTML = state;

    // Day 2 
    let state2 = data.forecast.forecastday[1].day.condition.text;
    TdayFeel2.innerHTML = state2;

    let TdayTmp2 = data.forecast.forecastday[1].day.avgtemp_c;
    TdayTemp2.innerHTML = TdayTmp2;

    let deep2 = data.forecast.forecastday[1].day.mintemp_c;
    TdaydeepC2.innerHTML = deep2;

    // day 3 
    let TdayF3 = data.forecast.forecastday[2].day.condition.text;
    TdayFeel3.innerHTML = TdayF3;

    let TdayTmp3 = data.forecast.forecastday[2].day.avgtemp_c;
    TdayTemp3.innerHTML = TdayTmp3;

    let deep3 = data.forecast.forecastday[2].day.mintemp_c;
    TdaydeepC3.innerHTML = deep3;

    // TODAY FORECAST

    let sixclck = data.forecast.forecastday[0].hour[6].temp_c;
    sixclock.innerHTML = `${sixclck}°`;
    let sixclckIco = data.forecast.forecastday[0].hour[6].condition.icon;
    SixclockIco.innerHTML = `<img src="${sixclckIco}" alt="">`;

    let nineclck = data.forecast.forecastday[0].hour[6].temp_c;
    O9clock.innerHTML = `${nineclck}°`;
    let nineclckIco = data.forecast.forecastday[0].hour[9].condition.icon;
    O9clockIco.innerHTML = `<img src="${nineclckIco}" alt="">`;

    let twelveclck = data.forecast.forecastday[0].hour[6].temp_c;
    O12clock.innerHTML = `${twelveclck}°`;
    let twelveclckIco = data.forecast.forecastday[0].hour[12].condition.icon;
    O12clockIco.innerHTML = `<img src="${twelveclckIco}" alt="">`;

    let Threeclck = data.forecast.forecastday[0].hour[15].temp_c;
    O3clock.innerHTML = `${Threeclck}°`;
    let ThreeclckIco = data.forecast.forecastday[0].hour[15].condition.icon;
    O3clockIco.innerHTML = `<img src="${ThreeclckIco}" alt="">`;
  
    let SixPmclck = data.forecast.forecastday[0].hour[18].temp_c;
    O6clock.innerHTML = `${SixPmclck}°`;
    let SixPmclckIco = data.forecast.forecastday[0].hour[18].condition.icon;
    O6clockIco.innerHTML = `<img src="${SixPmclckIco}" alt="">`;
  
    let NinePmclck = data.forecast.forecastday[0].hour[21].temp_c;
    O9Pmclock.innerHTML = `${NinePmclck}°`;
    let NinePmclckIco = data.forecast.forecastday[0].hour[21].condition.icon;
    O9PmclockIco.innerHTML = `<img src="${NinePmclckIco}" alt="">`;

    
    // 
    // day 2 date
    let dateString = data.forecast.forecastday[2].date;
    let formattedDate = new Date(dateString).toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric' });
    
    Tday3.innerHTML = formattedDate;
    
    
    
    // Image top right 
    let SunRise = data.forecast.forecastday[0].astro.sunrise;

    let currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    let currentHour = parseInt(currentTime); 
    let sunriseHour = parseInt(SunRise.split(':')[0]);
    
    if (currentHour > sunriseHour) {
        TopRightIcon.innerHTML = `<img src="imgs/sun.png" alt="sun">`;
    } else  {
        TopRightIcon.innerHTML = `<img src="imgs/half-moon (1).png" alt="moon">`;

    }


}
