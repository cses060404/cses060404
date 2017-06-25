var number1 = 4;
var number2 = 4;

var number4 = [4, 5, 6];
//number4[1] = 5

var number5 = document.getElementById("number5");

number5.value = 5;




var total = number1 + parseFloat(number5.value);

console.log(total);

// "4" == 4 is true because == checks the value only.
// "4" === 4 is false because === checks both value and the type.


//@@ if i have a obeject, i can access to the object with two methods.
// First: number2.Franklin.High 
// Second: number2["Franklin"]["High"]


//You can play around with the Console in google chrome.(developer tool.) 
console.dir(document.getElementById(number5));