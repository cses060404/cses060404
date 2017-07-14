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
    
        getJSON("/final-project/schedule.json").then(function (data) {
            console.log(data);
            //add the code necessary here to update the page with all of the correct data points.
            var game1 = data.[1];
            var game2 = data.[2];
            var game3 = data.[3];
            var game4 = data.[4];
            var game5 = data.[5];
            console.log(game5);
            
            
            
            document.getElementById("round").innerHTML = curLocation.city;
       /*     
            document.getElementById("date").innerHTML = ;
            
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

