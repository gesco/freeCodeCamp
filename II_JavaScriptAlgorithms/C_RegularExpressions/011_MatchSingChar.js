////////////////////////////////////////////////////////////////////////////////
//       Regular Expressions: Match Single Characters Not Specified
////////////////////////////////////////////////////////////////////////////////

// negated character set
// For example, /[^aeiou]/gi matches all characters that are not a vowel. Note
// that characters like ., !, [, @, / and white space are matched - the negated
// vowel character set only excludes the vowel characters.

// Create a single regex that matches all characters that are not a number or
// a vowel. Remember to include the appropriate flags in the regex.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result);
