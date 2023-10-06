const apiKey = "acaf7f92932299a6992c4e82fbddf4b4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);

    if(response.status == 404 ){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"; 
    }
    else{
        var data = await response.json();   //it will have all the data of the particular city

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.main.temp + "kmph";
        //for image
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "/images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "/images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "/images/mist.png";
        }

        document.querySelector(".weather").style.display = "block"; //setting it to "block", the element will be displayed as a block-level element, taking up the full width of its parent container and starting on a new line -> over_riding the display none in css on line 84
        document.querySelector(".error").style.display = "none";
    }
    
}

// on clicking the search icon, the data will be displayed
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
