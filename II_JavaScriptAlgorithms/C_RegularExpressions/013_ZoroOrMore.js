////////////////////////////////////////////////////////////////////////////////
//             Match Characters that Occur One or More Times
////////////////////////////////////////////////////////////////////////////////

// Any letter in a regex expression that is followed by a * does not have to
// occur in the string tested whereas any letter in a regex expression followed
// by a + must occur in a string at least once, as shown below,
// let phrase = "ba humbug";
//
// let regexPlus = /bah+/;
// let regexStar = /bah*/;
// console.log(regex.test(phrase));  // return false
// console.log((regexStar.test(phrase)));  // return true

// let phrase = "wooooow look at that!";
//
// let regexPlus = /wo+w/;
// let regexStar = /wo*w/;
// console.log(regexPlus.test(phrase));  // returns true
// console.log(resexStar.test(phrase));  // returns true

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null

// Create a regex chewieRegex that uses the * character to match all the upper
// and lower"a" characters in chewieQuote. Your regex does not need flags, and
// it should not match any of the other quotes.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);
console.log(result);
// Returns
// [ 'Aaaaaaaaaaaaaaaa', index: 0, input: 'Aaaaaaaaaaaaaaaarrrgh!' ]
