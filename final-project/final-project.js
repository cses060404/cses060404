// Current Location Scripts
(function () {

    function getJSON() {
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
        var url = "../final-project/schedule.json"; //change this to the correct URL for wunderground
          getJSON(url).then(function (data) {
            console.log(data);
            //add the code necessary here to update the page with all of the correct data points.
              
              
            var one = data.one;
            var two = data.two;
            var quarterFinal = data.quarterFinal;
            var semifinal = data.semifinal;
            var final = data.final;
            //this line will cause the Loading message to fade away.
        
            
            document.getElementById("currentT").innerHTML = Math.round(condition.temp_f) + "&#8457";
            
            document.getElementById("realtemp").innerHTML = condition.weather;
            
           // document.getElementById("direction").innerHTML = condition.observation_time;
            
            document.getElementById("muchrain").innerHTML = "Humidity" + condition.relative_humidity;
  
            document.getElementById("speed").innerHTML= condition.wind_string;

            
        });


    }
}
)

 
