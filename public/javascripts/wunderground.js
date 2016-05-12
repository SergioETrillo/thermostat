
$(document).ready(function(){

  function displayWeather(country, city){
    var url = "http://api.wunderground.com/api/5207e24ed23730f6/conditions/q/" + country+ "/"+ city +".json";
    var api_response;
    var temp, city;
    api_response = $.getJSON(url, function(data){
      api_response = data;
      temp = api_response.current_observation.temp_c;
      city = api_response.current_observation.display_location.city;
      $("#current_temp").text("Current temp in " + city + " is: "+ temp);
    });
  }

  displayWeather("UK","Stowmarket");

  $("#select-location").submit(function(event){
    event.preventDefault();
    var country = $("#current-country").val();
    var city = $("#current-city").val();
    displayWeather(country, city);
  });
});