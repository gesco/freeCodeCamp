////////////////////////////////////////////////////////////////////////////////
//             Basic Algorithm Scripting: Confirm the Ending                  //
//Check if a string (first argument, str) ends with the given target string   //
//(second argument, target).                                                  //
//This challenge can be solved with the .endsWith() method, which was         //
//introduced in ES2015. But for the purpose of this challenge, we would like  //
//you to use one of the JavaScript substring methods instead.                 //
////////////////////////////////////////////////////////////////////////////////

function confirmEnding(str, target) {
   // console.log(str.length);
   // console.log(str.substring(1,3));
   // console.log(str.substring(str.length - 1));
   // console.log(target.length);
   // console.log(str.substring(str.length - target.length));

   let lastChar = str.substring(str.length - target.length);
   if(lastChar === target) {
     return true
   } else {
     return false
   }
   
   // return str.slice(str.length - target.length) === target;
}

// console.log(confirmEnding("Bastian", "n"));
// console.log(confirmEnding("Congratulation", "on")); // should return true.
// confirmEnding("Bastian", "n");
// confirmEnding("Congratulation", "on");
confirmEnding("He has to give me a new name", "name")
console.log(confirmEnding("He has to give me a new name", "name"));
