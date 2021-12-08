var apiKey = "8642a9c705707c1cadcb64d7a8889d54";
var search = document.getElementById("search");

// get the 5 day forecast

function weatherSearch(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName+ '&units=imperial&appid=' + apiKey)
    .then(function(response) { return response.json() })
    .then(function(data) {
        current(data)
    });
};

// search for a city 

function searchCity() {
    var city = document.getElementById("cityName").value
    if (city.length <= 1) return;
    else weatherSearch("" + city);
};

// update the information on the page with the most current information

// previously searched cities