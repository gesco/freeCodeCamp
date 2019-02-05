// ES6: Use Destructuring Assignment with the
// Rest Operator to Reassign Array Elements
// The result is similar to Array.prototype.slice(), as shown below:
// The rest element only works correctly as the last variable in the list. As in,
// you cannot use the rest operator to catch a subarray that leaves out last
// element of the original array.

// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b); // 1, 2
// console.log(arr); // [3, 4, 5, 7]

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  const [a, b, ...arr] = source; // change this
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);    // [3,4,5,6,7,8,9,10]
console.log(source); // [1,2,3,4,5,6,7,8,9,10];
