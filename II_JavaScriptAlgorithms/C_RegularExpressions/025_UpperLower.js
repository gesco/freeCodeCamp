////////////////////////////////////////////////////////////////////////////////
//      Regular Expressions: Specify Upper and Lower Number of Matches
////////////////////////////////////////////////////////////////////////////////

// For example, to match only the letter a appearing between 3 and 5 times in
// the string "ah", your regex would be /a{3,5}h/.
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

// Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let result = ohRegex.test(ohStr);
console.log(result);  // Returns true
