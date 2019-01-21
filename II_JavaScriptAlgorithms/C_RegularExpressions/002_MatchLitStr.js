////////////////////////////////////////////////////////////////////////////////
// Regular Expressions: Match Literal Strings
////////////////////////////////////////////////////////////////////////////////
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
console.log(testRegex.test(testStr));  // Returns true

// Any other forms of "Kevin" will not match. For example, the regex /Kevin/
// will not match "kevin" or "KEVIN".

let wrongRegex = /kevin/;
console.log(wrongRegex.test(testStr));  // Returns false

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo is hiding/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result);  // Returns true
