// Functions is a keyword in JavaScript that allows us to define reusable blocks of code. Functions can take parameters, which are values that we can pass into the function to customize its behavior.

// Here is an example of a simple function that takes two parameters and returns their sum:

function myName(){
console.log("C");
console.log("H");
console.log("A");
console.log("K");
console.log("R");
console.log("E");
console.log("S");
console.log("H");
}

myName(); // This will call the function and execute the code inside it, printing each letter of "CHAKRESH" on a new line.

// We can also define a function that takes parameters and returns a value.

function addTwoNumbers(number1, number2){ // parameter
   console.log(number1 + number2);
}
const result = addTwoNumbers(3, 5);  // arguement
console.log("Result: ", result);

// This will call the function with the arguments 3 and 5, and it will print the result (8) to the console. The variable 'result' will be undefined because the function does not return a value, it only logs the sum to the console.
// If we want the function to return the sum instead of logging it, we can use the 'return' keyword:

function addTwoNumbers(number1, number2){
  return number1 + number2;
}


function loginUserMessage(username){
  return `${username} just logged in`
}
console.log(loginUserMessage("Chakresh"))


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Chakresh"))
console.log(loginUserMessage("Chakresh"))
