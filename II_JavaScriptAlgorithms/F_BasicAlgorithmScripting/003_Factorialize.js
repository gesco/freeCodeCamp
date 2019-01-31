////////////////////////////////////////////////////////////////////////////////
//             Basic Algorithm Scripting: Factorialize a Number               //
////////////////////////////////////////////////////////////////////////////////
function factorialize(num) {
  let numTotal = 1;
  for (let i = 1; i <= num; i++) {
    numTotal *= i;
  }
  num = numTotal;
  return num
}

////////////////////////////////////////////////////////////////////////////////
//                        Returns [ 0, 1, 2, 3, 4 ]                           //
////////////////////////////////////////////////////////////////////////////////
// function factorialize(num) {
//   let fillArray = [];
//   fillArray = Array(num).fill().map((x,i)=>i)
//
//   return fillArray  // Returns [ 0, 1, 2, 3, 4 ]
// }
// console.log(factorialize(5));

////////////////////////////////////////////////////////////////////////////////
//                        Returns  [ 1, 2, 3, 4, 5 ]
//https://stackoverflow.com/questions/6299500/tersest-way-to-create-an-array-
//of-integers-from-1-20-in-javascript
////////////////////////////////////////////////////////////////////////////////
// function range(i) {return i>0 ? range(i-1).concat(i) : [];}
// console.log(range(5)); // Returns [ 1, 2, 3, 4, 5 ]

// [...Array(5).keys()];
//  => [0, 1, 2, 3, 4]

// function laRana(i) {return i > 0 ? laRana(i-1).concat(i) : [];}
// console.log(laRana(5)); // Returns [ 1, 2, 3, 4, 5 ]

//elPimentero(x) => x > 0 ? elPimentero(x-1).concat(x) : [];

// const elSalero = (x) => x > 0 ? elSalero(x-1).concat(x) : [];
// console.log(elSalero(5)); // Returns [ 1, 2, 3, 4, 5 ]

//HOW THE TERNARY OPERATOR WORKS//
// // (condition) ? expression on true : expression on false
// // Set age of user
// let age = 20;
//
// // Place result of ternary operation in a variable
//                   (condition) ? expression on true : expression on false
// const oldEnough = (age >= 21) ? "You may enter."   : "You may not enter.";
//
// Print output
// oldEnough;

//HOW RANGE WORKS//
// range(1, 3); // Array(1, 2, 3)
// range("A", "C"); // Array("A", "B", "C")


//HOW CONCAT WORKS//
// const letters = ['a', 'b', 'c'];
// const numbers = [1, 2, 3];
//
// letters.concat(numbers);
// // result in ['a', 'b', 'c', 1, 2, 3]


// function factorialize(num) {
//   const elSalero = (x) => x > 0 ? elSalero(x-1).concat(x) : [];
//   console.log(elSalero(5)); // Returns [ 1, 2, 3, 4, 5 ]
//   // return elSalero // Returns [Function: elSalero]
//   const sum = [ 1, 2, 3, 4, 5 ].reduce((accumulator, currentValue) => accumulator + currentValue);
//   return sum;

// How do I turn a function into an array?
  // var elSalero = (x) => x > 0 ? elSalero(x-1).concat(x) : [];
  // return elSalero;

// }



console.log(factorialize(5)); // should return a number.
console.log(factorialize(5)); // should return 120.
console.log(factorialize(10)); // should return 3628800.
console.log(factorialize(20)); // should return 2432902008176640000.
console.log(factorialize(0)); // should return 1.
