////////////////////////////////////////////////////////////////////////////////
//         Basic Algorithm Scripting: Return Largest Numbers in Arrays        //
//                                                                            //
// Return an array consisting of the largest number from each provided        //
// sub-array. For simplicity, the provided array will contain exactly         //
// 4 sub-arrays. Remember, you can iterate through an array with a simple for //
// loop, and access each member with array syntax arr[i].                     //
////////////////////////////////////////////////////////////////////////////////

function largestOfFour(arr) {
  let largestHolder = [];
  for (let i=0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (var j = 0; j < arr.length; j++) {
      if (largestNumber < arr[i][j]) {
        largestNumber = arr[i][j];
      }
    }
    largestHolder.push(largestNumber);
  }
  return largestHolder;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26],
  [32, 35, 37, 39], [1000, 1001, 857, 1]]
)); // Returns [ 5, 27, 39, 1001 ]

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48],
  [4, -10, 18, 21], [-72, -3, -17, -10]])
); //should return [25, 48, 21, -3].

////////////////////////////////////////////////////////////////////////////////
//                     JavaScript Demo: Array.find()                          //
////////////////////////////////////////////////////////////////////////////////
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12

////////////////////////////////////////////////////////////////////////////////
//                     Converting a for loop to forEach                       //
////////////////////////////////////////////////////////////////////////////////
const items = ['item1', 'item2', 'item3'];
const copy = [];

// before
for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
}

// after
items.forEach(function(item){
  copy.push(item);
});

////////////////////////////////////////////////////////////////////////////////
// function largestOfFour(arr) {
//   const largestArray = [];
//
//   arr.forEach(function(item) {
//     let largestNumber = 0;
//     arr.forEach(function(jtem){
//       if (largestNumber < arr[item][jtem]) {
//          largestNumber = arr[item][jtem];
//       }
//     })
//     largestArray.push(largestNumber)
//   })
// }
//
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26],
//   [32, 35, 37, 39], [1000, 1001, 857, 1]]
// )); // Returns [ 5, 27, 39, 1001 ]
