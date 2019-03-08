////////////////////////////////////////////////////////////////////////////////
//         Regular Expressions: Match Ending String Patterns
////////////////////////////////////////////////////////////////////////////////

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);  // Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding); // Returns false

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
console.log(result);  // Returns true
