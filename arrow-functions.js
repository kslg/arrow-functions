/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

//  Vanilla JavaScript Function
 function addTwoNumbers(a, b) {
    // code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
// Usually, ES6 arrow functions are defined as constants.
// This ensures that they can't be overwritten or misused later in the code, and also that
// they must be defined before being called.
const addTwoNumbers2 = (a, b) => {
    return a + b;
}
let sum2 = addTwoNumbers2(5, 5);
console.log(sum2);
// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a ,b) => (a + b);
// const addTwoNumbers3 = (a ,b) => a + b;
let sum3 = addTwoNumbers3(6, 6);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello');
//If you’ve got a function that takes no parameters at all, such as this one called sayHello,
// you must use an empty set of parentheses to tell JavaScript you’re declaring a function.
const sayHello = () => console.log('Hello there!');
sayHello();


// Returning Multiple Lines
// Whenever an arrow function needs to return multiple lines of code, such as this one which
// returns a multi-line string, the parentheses mentioned in the implicit return function above are required.
// This goes for using an explicit return statement inside a set of curly braces, too.
// If you need to return multiple lines of code, you must wrap whatever comes after the return keyword in parentheses.
const returnMultiplelines = () => (
    `
    This is a multiple string!
    
    
    `
)
console.log(returnMultiplelines());