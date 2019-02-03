////////////////////////////////////////////////////////////////////////////////
//                 Basic Algorithm Scripting: Boo who                         //
//                                                                            //
// Check if a value is classified as a boolean primitive. Return true or      //
// false.  Boolean primitives are true and false.                             //
////////////////////////////////////////////////////////////////////////////////

function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if(typeof(bool) === "boolean") {
    // Checks if typeof returns 'boolean'
    return true;
  } else {
    // Type is not a boolean and return false
    return false;
  }
  return bool;
}

////////////////////////////////////////////////////////////////////////////////
//                         Alternate Solution A                               //
////////////////////////////////////////////////////////////////////////////////
// function booWho(bool) {
//   return typeof bool === 'boolean';
// }

console.log(booWho(null)); // false
console.log(booWho(true));  // should return true.
console.log(booWho(false)); // should return true.
console.log(booWho([1, 2, 3])); // should return false.
console.log(booWho([].slice)); // should return false.
console.log(booWho({ "a": 1 })); // should return false.
console.log(booWho(1)); // should return false.
console.log(booWho(NaN)); // should return false.
console.log(booWho("a"));  // should return false.
console.log(booWho("true")); // should return false.
console.log(booWho("false")); // should return false.
