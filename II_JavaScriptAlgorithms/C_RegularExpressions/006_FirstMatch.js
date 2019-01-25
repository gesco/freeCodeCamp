////////////////////////////////////////////////////////////////////////////////
//             Regular Expressions: Find More Than the First Match
////////////////////////////////////////////////////////////////////////////////

// Extract or search a pattern once.
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);  // Returns ["Repeat"]

// To search or extract a pattern more than once, you can use the g flag.
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex); // Returns ["Repeat", "Repeat", "Repeat"]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);  // Returns [ 'Twinkle', 'twinkle' ]
