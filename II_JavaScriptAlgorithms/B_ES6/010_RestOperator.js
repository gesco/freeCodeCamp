// pass elements of an array as arguments to a function
// function addThreeNumbers(x,y,z) {
//   console.log(x+y+z);
// }
// var args = [0, 1, 2];
// addThreeNumbers(...args);

// copy arrays
// var arr = [1,2,3];
// var arr2 = [...arr]; // like arr.slice()
// arr2.push(4);
// console.log(arr);   // [ 1, 2, 3 ]
// console.log(arr2);  // [ 1, 2, 3, 4 ]

// concatenate arrays
// var arr1 = [0,1,2];
// var arr2 = [3,4,5];
// var arr1and2 = arr1.concat(arr2);
// console.log(arr1and2);  // [ 0, 1, 2, 3, 4, 5 ]
// arr4 = [...arr1, ...arr2];
// console.log(arr4);      // [ 0, 1, 2, 3, 4, 5 ]
// arr5 = [...arr1, "freeCodeCamp", ...arr2];
// console.log(console.log(arr5)); // [ 0, 1, 2, 'freeCodeCamp', 3, 4, 5 ]

// REST: condense multiple elements into an arrays
// function multiply(multiplier, ...theArgs) {
//   return theArgs.map(function(element) {
//     return multiplier * element;
//   });
// }
// var arr = multiply(2, 1, 2, 3);
// console.log(arr); // [ 2, 4, 6 ]

// function multiply(multiplier, ...theArgs) {
//   return theArgs.map(element => element * multiplier);
// }
// var arr = multiply(2, 1, 2, 3);
// console.log(arr); // [ 2, 4, 6 ]


const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));  // 6
console.log(sum(1,2,3,4));  // 10
console.log(sum(5));        // 5
console.log(sum());         // 0
