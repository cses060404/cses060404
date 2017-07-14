/*
function getItem(instructions, id) {
    for (var i = 0; i < instructions.length; i++)
        {
          if ( instructions[i].id == id)
              //The i here would be 0 when the id is one,
              //    i here would be 1 when the id is two.
              return instructions[i];
        }
     
    
}
//getItem: gets an item from a list by id
//requires the list and id of the desired element

function updateElement(elementID,instruction){
    document.getElementById(elementID).innerHTML = instruction;
}
//updateElement: updates the contents of an element on the screen
//requires the id of the div to update, and the new contents.

function updateButton(buttonId,choiceId){

    var button = document.getElementById(buttonId);
    button.setAttribute('onclick',"nextStep(" + choiceId + ")")
}
//updateButton: sets the onclick event for a button with the id of the item it chooses

function reset(){
    nextStep(1);
    document.getElementById("buttonOne").disabled = false;
    document.getElementById("buttonTwo").disabled = false;
}
// This reset function would reset the content after the story ends.

function nextStep(id) {
    
    var instruction = getItem(instructions, id);
    
    updateElement('title', instruction.title);
    updateElement('description', instruction.description);

    var choice1 = getItem(instructions, instruction.choices.first);
    var choice2 = getItem(instructions, instruction.choices.second);
    // get the items for choice1 and 2 from the list
    
    if (instruction.end){
        window.alert("This is the end of the game!");
        document.getElementById("buttonOne").disabled = true;
        document.getElementById("buttonTwo").disabled = true;
    }
    // The if statement would test if the game reach the end point.
    
    updateElement('choiceOne', choice1.choiceText);
    updateElement('choiceTwo', choice2.choiceText);
    updateButton('buttonOne', choice1.id);
    updateButton('buttonTwo', choice2.id);   
}
*/
 


// Current Location Scripts
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
        var url = "../final-project/schedule.json"; //change this to the correct URL for wunderground
    
        getJSON(url).then(function (data) {
            console.log(data);
            //add the code necessary here to update the page with all of the correct data points.
            var curLocation = data.location;
            var condition = data.current_observation
            //this line will cause the Loading message to fade away.
            document.getElementById("cover").classList.add('fadeout');
            
            document.getElementById("cityDisplay").innerHTML = curLocation.city + ", " + curLocation.state;
            
            document.getElementById("currentTemp").innerHTML = Math.round(condition.temp_f) + "&#8457";
            
            document.getElementById("summary").innerHTML = condition.weather;
            
            document.getElementById("add3").innerHTML = condition.observation_time;
            
            document.getElementById("add1").innerHTML = " Relative Humidity : " + condition.relative_humidity;
  
            document.getElementById("add2").innerHTML = "Wind: " + condition.wind_string;

            
        });


    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());

