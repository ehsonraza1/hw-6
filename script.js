//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
var city = "";
var apiKey = "291838650f5204a838af3a3257c22f77";
var CityArr = [];
//local storage boilder plate
var citySearch = JSON.parse(localStorage.getItem("city-search"));
if (citySearch !== null) {
  citySearch.forEach(function (city) {
    city.toUpperCase();
  });
  CityArr = citySearch;
}

$(document).ready(function () {
  displayCities(CityArr);
  if (getSeachedCitiesFromLS !== null) {
    var lastCity = CityArr[0];
    searchCity(lastCity);
  }
});

function citySearch() {
  var cityName = $("input").val();
  $("city-list").append("<li class=list-group>" + cityName + "</li>");
}
var queryURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  city +
  "&appid=" +
  apiKey;
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log();
  // Storing an array of results in the results variable
  var results = response.data;
  console.log(queryURL);

  $("city-search").html("<li class=list-group>" + response.name + "</li>");
  $(".wind").text("Wind Speed: " + response.wind.speed);
  $(".humidity").text("Humidity: " + response.main.humidity);

  // Convert the temp to fahrenheit
  var tempF = (response.main.temp - 273.15) * 1.8 + 32;

  // add temp content to html
  $(".temp").text("Temperature (K) " + response.main.temp);
  $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
  console.log(response.wind.speed);
  console.log(response.main.humidity);
  console.log(tempF);
});
