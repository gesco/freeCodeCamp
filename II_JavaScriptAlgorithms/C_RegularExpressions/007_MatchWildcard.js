////////////////////////////////////////////////////////////////////////////////
//          Regular Expressions: Match Anything with Wildcard Period
////////////////////////////////////////////////////////////////////////////////

// example, if you wanted to match "hug", "huh", "hut", and "hum", you can use
// the regex /hu./ to match all four words.
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
humStr.match(huRegex); // Returns ["hum"]
hugStr.match(huRegex); // Returns ["hug"]

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
let result1 = exampleStr.match(unRegex);
console.log(result); // Return true
console.log(result1);
// Returns
  // [ 'fun',
  //   index: 11,
  //   input: 'Let\'s have fun with regular expressions!' ]
