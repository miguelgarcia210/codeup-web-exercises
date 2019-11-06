// (function (){
"use strict";
var forecastContainer = $("#forecast-container");


// Dynamically add card styling classes to allow seamless future customization with the 'set attribute' method
forecastContainer.children("div").addClass("card-border card-color");

// OBTAIN CURRENT WEATHER CONDITION
function currentWeatherIcon(x) {
    var icon = "";
    switch (x.currently.icon) {
        case "clear-day":

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