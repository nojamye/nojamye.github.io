const API_KEY = "ba9fa6248450aff9fc4affb542299e60";
let weatherIcons = {
    '01' : 'fas fa-sun',
    '02' : 'fas fa-cloud-sun',
    '03' : 'fas fa-cloud',
    '04' : 'fas fa-cloud-meatball',
    '09' : 'fas fa-cloud-sun-rain',
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-poo-storm',
    '13' : 'far fa-snowflake',
    '50' : 'fas fa-smog'
  };

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherIcon = document.querySelector(".weatherIcon");
            const weather = document.querySelector(".weatherName");
            const city = document.querySelector(".city");
            const temp = document.querySelector(".temp");

            const iconCode = (data.weather[0].icon).substr(0,2);

            weatherIcon.innerHTML = `<i class="${weatherIcons[iconCode]}"></i>`;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
            city.innerText = data.name;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)