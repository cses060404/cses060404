

console.log("data");
// Current Location
(function () {
    
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
    function getData() {
    
        getJSON("/final-project/schedule.json").then(function (data) {
            //add the code necessary here to update the page with all of the correct data points.
            var data = data;
            console.log(data);
            var game1 = data[game1];
            document.getElementById("date").innerHTML = game1.time;
            
          //  document.getElementById("round").innerHTML = curLocation.city;
            
            
       /*     
            document.getElementById("location").innerHTML = condition.weather;
            
            document.getElementById("time").innerHTML = condition.observation_time;
            
            document.getElementById("description").innerHTML = condition.relative_humidity;

           */
        });
    }
/*
    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }*/
}());
//still dont know why

