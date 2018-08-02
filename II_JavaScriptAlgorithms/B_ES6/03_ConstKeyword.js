// let is not the only new way to declare variables. In ES6, you can also declare
// variables using the const keyword.

function printManyTimes(str) {
 "use strict";

 // change code below this line

 const SENTENCE = str + " is cool!";
 for(let i = 0; i < str.length; i+=2) {
   console.log(SENTENCE);
 }

 // change code above this line

}
printManyTimes("freeCodeCamp");
