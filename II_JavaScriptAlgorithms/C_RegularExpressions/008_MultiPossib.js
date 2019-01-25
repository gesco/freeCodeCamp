////////////////////////////////////////////////////////////////////////////////
//  Regular Expressions: Match Single Character with Multiple Possibilities
////////////////////////////////////////////////////////////////////////////////

// Example, you want to match "bag", "big", and "bug" but not "bog". You can
// create the regex /b[aiu]g/ to do this. The [aiu] is the character class that
// will only match the characters "a", "i", or "u".
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex
// to find all the vowels in the string quoteSample.
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result);
// Returns :
// [ 'e',
//   'a',
//   'e',
//   'o',
//   'u',
//   'i',
//   'e',
//   'a',
//   'o',
//   'e',
//   'o',
//   'e',
//   'I',
//   'a',
//   'e',
//   'o',
//   'o',
//   'e',
//   'i',
//   'o',
//   'e',
//   'o',
//   'i',
//   'e',
//   'i' ]
