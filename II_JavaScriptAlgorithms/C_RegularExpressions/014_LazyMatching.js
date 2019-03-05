////////////////////////////////////////////////////////////////////////////////
//            Regular Expressions: Find Characters with Lazy Matching
////////////////////////////////////////////////////////////////////////////////

let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; // Change this line
let result = text.match(myRegex);
console.log(result);
// Returns
// [ '<h1>', index: 0, input: '<h1>Winter is coming</h1>' ]

// // ALTERNATE CODE
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);
// Returns
// [ '<h1>', index: 0, input: '<h1>Winter is coming</h1>' ]
