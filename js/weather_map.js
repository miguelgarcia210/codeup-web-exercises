// (function (){
"use strict";
// Check if browser supports .svg format
var weatherIconFormat = "";
var weatherIconDirectory = "";

if (Modernizr.svg) {
    weatherIconFormat = ".svg";
    weatherIconDirectory = "img/weather_map_icons/svg/";
    console.log("Hurray!");
} else {
    weatherIconFormat = ".png";
    console.log("That sucks");
}

var forecastContainer = $("#forecast-container");


// Dynamically add card styling classes to allow seamless future customization with the 'set attribute' method
forecastContainer.children("div").addClass("card-border card-color");

// OBTAIN CURRENT WEATHER CONDITION
function currentWeatherIcon(x) {
    var icon = "";
    switch (x.currently.icon) {
        case "clear-day":
            icon =
            // icon = "img/weather_map_icons";
            break;
        case "clear-night":
            // icon = "img/weather_map_icons";
            break;
        case "rain":
            // icon = "img/weather_map_icons";
            break;
        case "snow":
            // icon = "img/weather_map_icons";
            break;
        case "sleet":
            // icon = "img/weather_map_icons";
            break;
        case "wind":
            // icon = "img/weather_map_icons";
            break;
        case "fog":
            // icon = "img/weather_map_icons";
            break;
        case "cloudy":
            // icon = "img/weather_map_icons";
            break;
        case "partly-cloudy-day":
            // icon = "img/weather_map_icons";
            break;
        case "partly-cloudy-night":
            // icon = "img/weather_map_icons";
            break;
        case "hail":
            // icon = "img/weather_map_icons";
            break;
        case "thunderstorm":
            // icon = "img/weather_map_icons";
            break;
        case "tornado":
            // icon = "img/weather_map_icons";
            break;
        default:
        // icon = "img/weather_map_icons";
    }
    return icon;
}

// OBTAIN DAILY WEATHER CONDITIONS
function dailyWeatherIcon(x) {

}

// RENDER BASIC WEATHER PROPERTIES
function renderBasicWeather(x) {
    var content = "<img ";
}

function getWeather() {
    var weather = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241,-98.4936");
    weather.done(function (data) {
        console.log(data);
        console.log(data.currently.icon);

    })
}

// getWeather();

// });