// Change the while loop in the code to a do...while loop so that the loop will
// push the number 10 to myArray, and i will be equal to 11 when your code
// finishes running.

// Setup
var myArray = [];
var i = 0;

// Only change code below this line.
do {
  myArray.push(i);
  i++;
} while (i < 11);

console.log(myArray);

// Output
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
