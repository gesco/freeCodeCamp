////////////////////////////////////////////////////////////////////////////////
//          Regular Expressions: Match Letters of the Alphabet
////////////////////////////////////////////////////////////////////////////////

// Example, to match lowercase letters a through e you would use [a-e].
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

// Match all the letters in the string quoteSample.
// Also, both upper - and lowercase letters.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);
// Returns:
// [ 'T',
//   'h',
//   'e',
//   'q',
//   'u',
//   'i',
//   'c',
//   'k',
//   'b',
//   'r',
//   'o',
//   'w',
//   'n',
//   'f',
//   'o',
//   'x',
//   'j',
//   'u',
//   'm',
//   'p',
//   's',
//   'o',
//   'v',
//   'e',
//   'r',
//   't',
//   'h',
//   'e',
//   'l',
//   'a',
//   'z',
//   'y',
//   'd',
//   'o',
//   'g' ]
