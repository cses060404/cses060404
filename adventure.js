var instructions = [
    {
        "id": 1,
        "choices": {
            "first": 2,
            "second": 3
        },
        "choiceText": "choose 1",
        "title": "The Adventure Begins",
        "description": "This is where you setup your initial story"
    },
    {
        "id": 2,
        "choices": {
            "first": 4,
            "second": 5
        },
        "choiceText": "Go Left",
        "title": "The long hallway",
        "description": "Describe the current setting"
    },
    {
        "id": 3,
        "choices": {
            "first": 6,
            "second": 7
        },
        "choiceText": "Go Right",
        "title": "The hungry beast",
        "description": "This is probably not going to end well."
    }
];

//1. create the getItem, updateElement, and updateButton functions
function getItem(instructions, id) {
    for (var i = 0; i < 10; i++)
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


function nextStep(id) {
    
    var instruction = getItem(instructions, id);
    
    updateElement('title', instruction.title);
    updateElement('description', instruction.description);
    var choice1 = getItem(instructions, instruction.choices.first);
    var choice2 = getItem(instructions, instruction.choices.second);
    
    updateElement('choiceOne', choice1.choiceText);
    updateElement('choiceTwo', choice2.choiceText);
    updateButton('buttonOne', choice1.id);
    updateButton('buttonTwo', choice2.id);
}

//updates the screen to show the current description and choices
//requires the id of the new set of instructions

//first we need to get the new item from the list of instructions
 //then we need to update the screen with the main description


//then get the items for choice1 and 2 from the list

//check to see if they are endpoints
    
    //if endpoints then end the game
    
    
    //if not update those sections on the screen with the choiceText



















//2. then create and use a function to initialize the game to step 1

//3. other needed functions
//restart: resets the game back to the beginning.

//happy ending: does whatever we want it to do when they end in a good place    

//sad ending: does whatever we want it to do if they end at a bad place