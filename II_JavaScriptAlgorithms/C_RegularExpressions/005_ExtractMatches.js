////////////////////////////////////////////////////////////////////////////////
//             Regular Expressions: Extract Matches
////////////////////////////////////////////////////////////////////////////////

"Hello, World!".match(/Hello/);  // Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
console.log(ourStr.match(ourRegex));
// Returns
// [ 'expressions', index: 8, input: 'Regular expressions' ]


// Apply the .match() method to extract the word coding.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
console.log(result);
// Returns
// [ 'coding',
//   index: 18,
//   input: 'Extract the word \'coding\' from this string.' ]
