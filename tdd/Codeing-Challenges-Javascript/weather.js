const js_weather = document.querySelector("span.js-weather");

const COORDS = "coords";
const apiKey = "a2d781c6e5eaf980abee3f81753673e0";

function getWearther(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(function(response){
        return response.json()
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        js_weather.innerText = `${temperature} ℃ ${place}`;
    });
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))

}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,   // latitude: latitude,
        longitude   // longitude: longitude;
    };
    saveCoords(coordsObj);
    getWearther(latitude, longitude)
}

function handleGeoError(){
    console.log("에러")
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    if(loadCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadCoords);
        getWearther(parsedCoords.latitude, parsedCoords.longitude);
        console.log(parsedCoords);
    }
}



function init(){
    loadCoords();
}

init();