// Current Location Scripts
(function () {

    var status = document.getElementById('status');

    (function getGeoLocation() {
    
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    }());

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Get the data from the wunderground API
    function getData(lat, long) {
        var url = "http://api.wunderground.com/api/3e84b1ddb35bcd69/geolookup/conditions/q/"; //change this to the correct URL for wunderground
        url = url +  lat + ',' + long + ".json";        getJSON(url).then(function (data) {
            console.log(data);
            //add the code necessary here to update the page with all of the correct data points.
            var curLocation = data.location;
            var condition = data.current_observation
            //this line will cause the Loading message to fade away.
        

            document.getElementById("fr").innerHTML = curLocation.city + ", " + curLocation.state;
            
            document.getElementById("currentT").innerHTML = Math.round(condition.temp_f) + "&#8457";
            
            document.getElementById("realtemp").innerHTML = condition.weather;
            
           // document.getElementById("direction").innerHTML = condition.observation_time;
            
            document.getElementById("muchrain").innerHTML = "Humidity" + condition.relative_humidity;
  
            document.getElementById("speed").innerHTML= condition.wind_string;

            
        });


    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());
