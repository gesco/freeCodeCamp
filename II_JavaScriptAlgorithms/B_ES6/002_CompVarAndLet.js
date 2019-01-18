////////////////////////////////////////////////////////////////////////////////
// The let keyword behaves similarly, but with some extra features. When you
// declare a variable with the let keyword inside a block, statement, or expression,
// its scope is limited to that block, statement, or expression.
////////////////////////////////////////////////////////////////////////////////
// var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }
//
// console.log(numArray);  // returns [0,1,2]
// console.log(i);         // returns 3

////////////////////////////////////////////////////////////////////////////////
// As you can see, printNumTwo() prints 3 and not 2. This is because the value
// assigned to i was updated and the printNumTwo() returns the global i and not the
// value i had when the function was created in the for loop. The let keyword does
// not follow this behavior:
////////////////////////////////////////////////////////////////////////////////
// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   console.log(i);
//   if(i === 2){
//     printNumTwo = function() {
//       return i;
//     }
//   }
// }
// console.log(printNumTwo()); // returns 3

////////////////////////////////////////////////////////////////////////////////
// i is not defined because it was not declared in the global scope. It is only
// declared within the for loop statement. printNumTwo() returned the correct value
// because three different i variables with unique values (0, 1, and 2) were created
// by the let keyword within the loop statement.
////////////////////////////////////////////////////////////////////////////////
// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i ===2) {
//     printNumTwo = function() {
//       return i;
//     }
//   }
// }
// console.log(printNumTwo());  // returns 2
// console.log(i);              // returns "i is not defined"

////////////////////////////////////////////////////////////////////////////////
// This function is designed to illustrate the difference between how var and let
// keywords assign scope to the declared variable.
////////////////////////////////////////////////////////////////////////////////
function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
console.log(checkScope());
