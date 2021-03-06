// (function (){
"use strict";

// ALL LOCATIONS ARE Latitude, Longitude Use reverse method for map-box implementation.
var defaultLocation = [29.4241, -98.4936]; // SAN ANTONIO, TX
var currentLocation = [];
var draggedLocation =[];

// ===== SELECTOR VARIABLES =====
//      ---- jQuery selectors functions to enable dynamic searches throughout ----
var forecastContainer = function () {
    return $("#daily-forecast-container");
};

var forecastCards = function () {
    return forecastContainer().children("div");
};

var weatherInfo = function () {
    var weatherInfoTags = $("#daily-forecast-container").children("div").children("p");
    if (weatherInfoTags.length === 0) {
        return "weatherInfo() returned nothing";
    } else {
        return weatherInfoTags;
    }
};
// console.log(weatherInfo());

// ----- selector actions -----
// Dynamically add card styling classes to allow seamless future customization with the 'set attribute' method
forecastCards().addClass("card-border card-color");
// Only displays first 3 daily weather conditions.
forecastCards().slice(3).hide();

// ===== RENDER FORECAST CARD =====
function renderForecastCard(index) {
    var content = "<div" + " ";
    content += "id='forecast-card-'" + index + "'" + " ";
    content += "class='weather-card" + ">";
    // content += forecast;
    content += "</div>";

    return content;
}

// ===== .svg FEATURE CHECK =====
function checkImageFeature() {
    var svgStatus = false;

    if (Modernizr.svg) {
        svgStatus = true;
    }
    return svgStatus;
}

var svgSupport = checkImageFeature();

// ===== SET WEATHER ICON =====
function weatherIcon(condition) {
    var icon = "";
    var weatherIconFormat = "";
    var weatherIconDirectory = "";

    if (svgSupport) {
        weatherIconFormat = ".svg";
        weatherIconDirectory = "img/weather_map_icons/svg/";
        // console.log("svg format enabled");
    } else {
        weatherIconDirectory = "img/weather_map_icons/png/";
        weatherIconFormat = ".png";
        // console.log("png format enabled");
    }

    switch (condition) {
        case "clear-day":
            icon = weatherIconDirectory + "015-sunny" + weatherIconFormat;
            break;
        case "clear-night":
            icon = weatherIconDirectory + "016-moon" + weatherIconFormat;
            break;
        case "rain":
            icon = weatherIconDirectory + "010-rain" + weatherIconFormat;
            break;
        case "snow":
            icon = weatherIconDirectory + "009-snowfall" + weatherIconFormat;
            break;
        case "sleet":
            icon = weatherIconDirectory + "011-sleet" + weatherIconFormat;
            break;
        case "wind":
            icon = weatherIconDirectory + "031-wind" + weatherIconFormat;
            break;
        case "fog":
            icon = weatherIconDirectory + "046-volcano" + weatherIconFormat;
            break;
        case "cloudy":
            icon = weatherIconDirectory + "008-cloudy" + weatherIconFormat;
            break;
        case "partly-cloudy-day":
            icon = weatherIconDirectory + "001-cloudy" + weatherIconFormat;
            break;
        case "partly-cloudy-night":
            icon = weatherIconDirectory + "014-cloudy" + weatherIconFormat;
            break;
        case "hail":
            icon = weatherIconDirectory + "013-hail" + weatherIconFormat;
            break;
        case "thunderstorm":
            icon = weatherIconDirectory + "049-thunder" + weatherIconFormat;
            break;
        case "tornado":
            icon = weatherIconDirectory + "042-tornado" + weatherIconFormat;
            break;
        default:
            icon = weatherIconDirectory + "022-weather forecast" + weatherIconFormat;
    }
    return icon;
}

// ===== RENDER WEATHER IMAGE =====
function renderImage(source, index) {
    var content = "<img" + " ";
    content += "id=" + "'image-icon-" + index + "'" + " ";
    content += "src='";
    content += source;
    content += "'" + " ";
    content += "alt='";
    content += source;
    content += "'" + " ";
    content += "class='weather-image'";
    content += ">";

    return content;
}

// ===== RENDER HIGH/LOW =====
function renderHighLow(highSource, lowSource, index) {
    var content = "<span" + " ";
    content += "id='" + "high-low-" + index + "'" + " ";
    content += "class='weather-info'" + ">";
    // content += "class='weather-info'" + ">";
    content += highSource + "/" + lowSource;
    content += "</span>";

    return content;
}

// Renders weather property to reduce code redundancy
function weatherProperty(idName, weatherPropertyName, source, index) {
    var content = "<p" + " ";
    content += "id='" + idName + "-" + index + "'" + " ";
    content += "class='weather-info'" + ">";
    content += "<span" + " ";
    content += "class='weather-property'" + ">";
    content += weatherPropertyName + ":" + "</span>" + " ";
    content += source;
    content += "</p>";

    return content;
}

// ===== RENDER HUMIDITY =====
function renderHumidity(source, index) {
    return weatherProperty("humidity", "Humidity", source, index);
}

// ===== RENDER WIND =====
function renderWind(source, index) {
    return weatherProperty("wind", "Wind", source, index);
}

// ===== RENDER PRESSURE =====
function renderPressure(source, index) {
    return weatherProperty("pressure", "Pressure", source, index);
}

// ===== RENDER SUMMARY =====
function renderSummary(source, index) {
    return weatherProperty("summary", "Details", source, index);
}

// ===== RESET WEATHER CARDS ====
function resetWeatherCards() {
    $("#daily-forecast-container .weather-card").each(function () {
        $(this).html("");
    });
}

// ===== RETRIEVE WEATHER ===== * default coordinates set to San Antonio, TX
function getWeather(latitude = defaultLocation[0],longitude = defaultLocation[1]) {
// Location set for france
// function getWeather(latitude = "48.864716", longitude = "2.349014") {
    var darSkyApi = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/";
    var weather = $.get(darSkyApi + darkSkyKey + "/" + latitude + "," + longitude + "?units=auto");
//     function getWeather() {
//     var weather = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241,-98.4936" + "?units=auto");
    weather.done(function (data) {
        // ===== Update daily weather cards=====
        // NOTE: Arrays for daily weather information
        var nextDailyImages = [];
        var nextDailyHighLow = [];
        var nextDailyHumidity = [];
        var nextDailyWind = [];
        var nextDailyPressure = [];
        var nextDailySummary = [];

        for (var i = 0; i < forecastCards().length; i++) {
            if (i === 0) {
                nextDailyHighLow.push(renderHighLow(data.daily.data[i].temperatureHigh, data.daily.data[i].temperatureLow, i));
                nextDailyImages.push(renderImage(weatherIcon(data.currently.icon), 0));
                nextDailyHumidity.push(renderHumidity((data.currently.humidity * 100), 0));
                nextDailyWind.push(renderWind((data.currently.windSpeed), 0));
                nextDailyPressure.push(renderPressure(data.currently.pressure, 0));
                nextDailySummary.push(renderSummary("<br>" + data.currently.summary, 0));
                continue;
            }
            nextDailyHighLow.push(renderHighLow(data.daily.data[i].temperatureHigh, data.daily.data[i].temperatureLow, i));
            nextDailyImages.push(renderImage(weatherIcon(data.daily.data[i].icon), i));
            nextDailyHumidity.push(renderHumidity((data.daily.data[i].humidity * 100), i));
            nextDailyWind.push(renderWind((data.daily.data[i].windSpeed), i));
            nextDailyPressure.push(renderPressure(data.daily.data[i].pressure, i));
            nextDailySummary.push(renderSummary("<br>" + data.daily.data[i].summary, i));
        }
        // NOTE: Update each weather card with appropriate data
        $("#daily-forecast-container .weather-card").each(function (index) {
            $(this).append(nextDailyHighLow[index]);
            $(this).append(nextDailyImages[index]);
            $(this).append(nextDailyHumidity[index]);
            $(this).append(nextDailyWind[index]);
            $(this).append(nextDailyPressure[index]);
            $(this).append(nextDailySummary[index]);
        });
    })
}

getWeather();
// getWeather("48.864716","2.349014");

// ===== WEEKLY FORECAST BUTTON =====
$("#forecast-button").click(function () {
    $(this).toggleClass("forecast-button-style");
    if ($(this).hasClass("forecast-button-style")) {
        $("#daily-forecast-container div:nth-child(n + 4)").toggle();
        $(this).html("3 Day Forecast")
    } else {
        $(this).html("7 Day Forecast");
        forecastCards().slice(3).hide();
    }
});

// ===== CURRENT LOCATION BUTTON CLICKED =====
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var currentLatLong = {
        "latitude": position.coords.latitude,
        "longitude": position.coords.longitude
    };

    resetWeatherCards();

    // Fly to current location
    map.flyTo({
        center: [currentLatLong.longitude, currentLatLong.latitude],
        zoom: 15
    });

    // Reposition marker to current location
    marker.setLngLat([currentLatLong.longitude, currentLatLong.latitude]);

    getWeather(currentLatLong.latitude, currentLatLong.longitude);
    currentLocation = [];
    currentLocation.push(currentLatLong.latitude,currentLatLong.longitude);
    console.log(currentLocation);
}

$("#current-location").click(function () {
    getLocation();
});

// ==== MAP-BOX ====
// ***** NOTE: map-box coordinates are entered long, lat. Refer to location variable format at the top to manipulate map-box data
// ----- setup map container
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 1,
    // United States
    center: [-95.7129, 37.0902]
});

// add/remove specific features
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();

// ----- map-box marker -----
var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([defaultLocation[1], defaultLocation[0]])
    .addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;

    // Possible un-needed code snippet
    draggedLocation = [];
    draggedLocation.push(lngLat.lng,lngLat.lat);

    resetWeatherCards();
    // Fly to marker location when repositioned
    map.flyTo({
        center: [lngLat.lng,lngLat.lat],
        zoom: 7
    });
    // Initiate getWeather function for marker positioned location
    getWeather(lngLat.lat, lngLat.lng);
}

marker.on('dragend', onDragEnd);

// - Adds geocoder input to the map
// map.addControl(new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
// }));


// Add geocoder to div
var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: false
});
// document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
$("#geocoder").append(geocoder.onAdd(map));

geocoder.on('result', function (result) {
    var longitude = result.result.center[0];
    var latitude = result.result.center[1];
    marker.setLngLat([longitude, latitude]);

    resetWeatherCards();
    getWeather(latitude, longitude);
    console.log(result);
});
// });