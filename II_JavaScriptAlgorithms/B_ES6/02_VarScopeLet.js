// When you declare a variable with the var keyword, it is declared globally, or
// locally if declared inside a function.
//
// The let keyword behaves similarly, but with some extra features. When you
// declare a variable with the let keyword inside a block, statement, or
// expression, its scope is limited to that block, statement, or expression.

// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if(i === 2){
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // returns 3

// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   console.log("Inside for loop: " + i);
//   if(i === 2){
//     console.log("Inside the if: " + i);
//     printNumTwo = function() {
//       return "return value: " + i;
//     };
//   }
// }
// console.log(printNumTwo());
// // returns 3

function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();
