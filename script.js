//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
var city = "";
var apiKey = "291838650f5204a838af3a3257c22f77";
var CityArr = [];

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

  // Looping over every result item
  for (var i = 0; i < results.length; i++) {}
});
