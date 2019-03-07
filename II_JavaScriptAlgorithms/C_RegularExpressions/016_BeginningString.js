////////////////////////////////////////////////////////////////////////////////
//         Regular Expressions: Match Beginning String Patterns
////////////////////////////////////////////////////////////////////////////////

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);  // Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst); // Returns false


let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(result);
