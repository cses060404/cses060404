var instructions = [
    {
        "id": 1,
        "choices": {
            "first": 2,
            "second": 3
        },
        "choiceText": "choose 1",
        "title": "The Adventure Begins",
        "description": "This is where you setup your initial story",
        "end": false
    },
    {
        "id": 2,
        "choices": {
            "first": 4,
            "second": 5
        },
        "choiceText": "Go Left",
        "title": "The long hallway",
        "description": "Describe the current setting",
        "end": false
    },
    {
        "id": 3,
        "choices": {
            "first": 6,
            "second": 7
        },
        "choiceText": "Go Right",
        "title": "The hungry beast",
        "description": "This is probably not going to end well.",
        "end": true
    }
];

//1. create the getItem, updateElement, and updateButton functions
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


//I worked with Travis for this assignment:)