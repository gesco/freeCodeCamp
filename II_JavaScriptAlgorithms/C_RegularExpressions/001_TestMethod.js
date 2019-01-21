////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Using the Test Method
////////////////////////////////////////////////////////////////////////////////
let testStr = "freeCodeCamp";
let testRegex = /Code/;
console.log(testRegex.test(testStr));  // Returns true

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);  // Returns true
