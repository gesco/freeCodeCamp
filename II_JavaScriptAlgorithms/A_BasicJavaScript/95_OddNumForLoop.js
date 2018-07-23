// For loops don't have to iterate one at a time. By changing our
// final-expression, we can count by even numbers.

// Push the odd numbers from 1 through 9 to myArray using a for loop.

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);
