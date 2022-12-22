import './styles/style.css';
import { setData } from './app';

const submitBtn = document.getElementById('search');
const displayFahrenheit = document.getElementById('display-f');
const selectCurrTemperature = document.querySelector('.current-temperature');
const input = document.querySelector('input');

const selectDay1 = document.querySelector('.day-1');
const day1MaxTemp = document.querySelector('.day-1-maxtemp');
const day1MinTemp = document.querySelector('.day-1-mintemp');
const selectDay2 = document.querySelector('.day-2');
const day2MaxTemp = document.querySelector('.day-2-maxtemp');
const day2MinTemp = document.querySelector('.day-2-mintemp');
const selectDay3 = document.querySelector('.day-3');
const day3MaxTemp = document.querySelector('.day-3-maxtemp');
const day3MinTemp = document.querySelector('.day-3-mintemp');
const selectDay4 = document.querySelector('.day-4');
const day4MaxTemp = document.querySelector('.day-4-maxtemp');
const day4MinTemp = document.querySelector('.day-4-mintemp');
const selectDay5 = document.querySelector('.day-5');
const day5MaxTemp = document.querySelector('.day-5-maxtemp');
const day5MinTemp = document.querySelector('.day-5-mintemp');

setData('london');
setForecast('london');

function setNextDay(today, days) {
  const options = { weekday: 'long' };
  const tomorrow = today;
  tomorrow.setDate(tomorrow.getDate() + days);
  const dateFormated = tomorrow.toLocaleDateString('en-US', options);
  return dateFormated;
}

async function setForecast(location) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=02d0c041d3aadabf5500232268440a40`);
    const getData = await response.json();
    const getList = getData.list;

    const tempsByDay = {};

    for (let i = 0; i < getList.length; i++) {
      const getData = getList[i];
      const dates = getData.dt_txt.split(' ')[0];
      const tempMax = getData.main.temp_max;
      const tempMin = getData.main.temp_min;
      tempsByDay[dates] = [tempMax, tempMin];
    }

    const entries = Object.entries(tempsByDay);

    const filterDay1 = entries.filter((x) => x.includes(setDate(new Date(), 1)));
    const filterDay2 = entries.filter((x) => x.includes(setDate(new Date(), 2)));
    const filterDay3 = entries.filter((x) => x.includes(setDate(new Date(), 3)));
    const filterDay4 = entries.filter((x) => x.includes(setDate(new Date(), 4)));
    const filterDay5 = entries.filter((x) => x.includes(setDate(new Date(), 5)));

    day1MaxTemp.textContent = `${Math.round(filterDay1[0][1][0] - 273.15)} °C`;
    day1MinTemp.textContent = `${Math.round(filterDay1[0][1][1] - 273.15)} °C`;

    day2MaxTemp.textContent = `${Math.round(filterDay2[0][1][0] - 273.15)} °C`;
    day2MinTemp.textContent = `${Math.round(filterDay2[0][1][1] - 273.15)} °C`;

    day3MaxTemp.textContent = `${Math.round(filterDay3[0][1][0] - 273.15)} °C`;
    day3MinTemp.textContent = `${Math.round(filterDay3[0][1][1] - 273.15)} °C`;

    day4MaxTemp.textContent = `${Math.round(filterDay4[0][1][0] - 273.15)} °C`;
    day4MinTemp.textContent = `${Math.round(filterDay4[0][1][1] - 273.15)} °C`;

    day5MaxTemp.textContent = `${Math.round(filterDay5[0][1][0] - 273.15)} °C`;
    day5MinTemp.textContent = `${Math.round(filterDay5[0][1][1] - 273.15)} °C`;

    selectDay1.textContent = setNextDay(new Date(), 1);
    selectDay2.textContent = setNextDay(new Date(), 2);
    selectDay3.textContent = setNextDay(new Date(), 3);
    selectDay4.textContent = setNextDay(new Date(), 4);
    selectDay5.textContent = setNextDay(new Date(), 5);
  } catch {
    alert('Please enter a valid city name');
  }
}

submitBtn.addEventListener('click', (e) => {
  setData(input.value);
  setForecast(input.value);
});

displayFahrenheit.addEventListener('click', (e) => {
  const getTemperature = parseInt(selectCurrTemperature.textContent);
  const celsiusToFahrenheit = Math.round((getTemperature * 9 / 5) + 32);
  const fahrenheitToCelsius = Math.round((getTemperature - 32) * 5 / 9);

  if (displayFahrenheit.textContent === 'Display °F') {
    selectCurrTemperature.textContent = `${celsiusToFahrenheit}°F`;
    displayFahrenheit.textContent = 'Display °C';
  } else {
    displayFahrenheit.textContent = 'Display °F';
    selectCurrTemperature.textContent = `${fahrenheitToCelsius}°C`;
  }
});

function setDate(today, days) {
  const tomorrow = today;
  tomorrow.setDate(tomorrow.getDate() + days);
  const dateFormated = tomorrow.toISOString().split('T')[0];
  return dateFormated;
}
