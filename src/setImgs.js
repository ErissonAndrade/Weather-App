const selectIcons = {
    thunderstorm: "../src/assets/icons/rainy.png",
    drizzle: "../src/assets/icons/rainy.png",
    rain: "../src/assets/icons/rainy.png",
    snow: "../src/assets/icons/snowy.png",
    clear: "../src/assets/icons/sunny.png",
    clouds: "../src/assets/icons/cloudy.png",
    mist: "../src/assets/icons/hazy.png",
    smoke: "../src/assets/icons/hazy.png",
    haze: "../src/assets/icons/hazy.png",
    dust: "../src/assets/icons/hazy.png",
    fog: "../src/assets/icons/hazy.png",
    sand: "../src/assets/icons/hazy.png",
    dust: "../src/assets/icons/hazy.png",
    ash: "../src/assets/icons/hazy.png",
    squall: "../src/assets/icons/hazy.png",
    tornado: "../src/assets/icons/tornado.png"
}

const selectBgImages = {
    thunderstorm: "url(../src/assets/imgs/rainy-weather.jpg)",
    drizzle: "url(../src/assets/imgs/rainy-weather.jpg)",
    rain: "url(../src/assets/imgs/rainy-weather.jpg)",
    snow: "url(../src/assets/imgs/snowy-weather.jpg)",
    clear: "url(../src/assets/imgs/sunny-weather.jpg)",
    clouds: "url(../src/assets/imgs/cloudy-weather.jpg)",
    mist: "url(../src/assets/imgs/cloudy-weather.jpg)",
    smoke: "url(../src/assets/imgs/cloudy-weather.jpg)",
    haze: "url(../src/assets/imgs/cloudy-weather.jpg)",
    dust: "url(../src/assets/imgs/cloudy-weather.jpg)",
    fog: "url(../src/assets/imgs/cloudy-weather.jpg)",
    sand: "url(../src/assets/imgs/cloudy-weather.jpg)",
    dust: "url(../src/assets/imgs/cloudy-weather.jpg)",
    ash: "url(../src/assets/imgs/cloudy-weather.jpg)",
    squall: "url(../src/assets/imgs/cloudy-weather.jpg)",
    tornado: "url(../src/assets/imgs/cloudy-weather.jpg)"
}

function changeIcons(weatherSetImg) { 
    const entries = Object.entries(selectIcons)
    const filterEntries = entries.filter(entry => entry.includes(weatherSetImg))
    const selectKey = filterEntries[0]
    const selectImgPath = selectKey[1]
    return selectImgPath
}

function changeBgImage(weatherSetImg) {
    const entries = Object.entries(selectBgImages)
    const filterEntries = entries.filter(entry => entry.includes(weatherSetImg))
    const selectKey = filterEntries[0]
    const selectImgPath = selectKey[1]
    return selectImgPath
}

export {changeIcons, changeBgImage}

