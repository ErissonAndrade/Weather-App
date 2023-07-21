import {changeIcons, changeBgImage} from "./setImgs.js"

const weatherStatus = document.querySelector(".weather-status")
const weatherStatusImg = document.querySelector(".temperature-container > img")
const selectCity = document.querySelector(".city")
const selectCurrTemperature = document.querySelector(".current-temperature")
const selectFeelsLike = document.querySelector(".feels-like")
const selectHumidity = document.querySelector(".humidity")
const selectRainChance = document.querySelector(".rain-chance")
const selectWindSpeed = document.querySelector(".wind-speed")
const todayDate = document.querySelector(".today")

async function setData (location) {
    try {
        let response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=02d0c041d3aadabf5500232268440a40`)
        let getData = await response.json()
        let currentTemperature = Math.round(getData.main.temp - 273.15)
        let weatherDescription = getData.weather[0].description
        let city = getData.name
        let weatherSetImg = getData.weather[0].main.toLowerCase()
        let feelsLike = Math.round(getData.main.feels_like - 273.15)
        let humidity = getData.main.humidity
        let rainChance = getData.main.humidity
        let windSpeed = getData.wind.speed
        
        todayDate.textContent = setDate()
        setWeatherStatus (weatherDescription)
        selectCity.textContent = city
        selectCurrTemperature.textContent = `${currentTemperature}°C`
        selectFeelsLike.textContent = `${feelsLike}°C`
        selectHumidity.textContent = `${humidity}%`
        selectRainChance.textContent = `${rainChance}%`
        selectWindSpeed.textContent = `${windSpeed}km/h`
        
       
        // Set Images
        if(currentTemperature <= 0) {
            weatherStatusImg.src = "../src/assets/icons/snowy.png"
            document.body.style.backgroundImage = "url(../src/assets/imgs/snowy-weather.jpg)"
        } else {
            weatherStatusImg.src = changeIcons(weatherSetImg)
            document.body.style.backgroundImage = changeBgImage(weatherSetImg)
        }
    }
    catch {
        alert("Please enter a valid city name")
    }
}

function setWeatherStatus (weatherDescription) {
    const splitWords = weatherDescription.split(" ")
    const capFirstWordLetter = splitWords[0].charAt(0).toUpperCase() + splitWords[0].slice(1)
    const capSecondWordLetter = splitWords[1].charAt(0).toUpperCase() + splitWords[1].slice(1)

    weatherStatus.textContent = `${capFirstWordLetter} ${capSecondWordLetter}`
}

function setDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date();
    const dateFormated = today.toLocaleDateString("en-US", options)
    return dateFormated
}

export {setData}
