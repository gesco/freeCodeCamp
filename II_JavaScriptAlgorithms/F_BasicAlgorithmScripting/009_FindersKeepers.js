////////////////////////////////////////////////////////////////////////////////
//              Basic Algorithm Scripting: Finders Keepers                    //
//                                                                            //
// Create a function that looks through an array (first argument) and returns //
// the first element in the array that passes a truth test (second argument). //
// If no element passes the test, return undefined.                                                               //
////////////////////////////////////////////////////////////////////////////////

function findElement(arr, func) {
  const holdBoolean = []
  for (let i=0; i<arr.length; i++) {
    if (holdBoolean.push(func(arr[i])) == true) {
    //console.log(arr[i]);
    }
  }
  //console.log(holdBoolean.indexOf(true));
  return arr[holdBoolean.indexOf(true)];

  // arr.forEach(function(arr) {
  //   return func(arr);
  // });
}

////////////////////////////////////////////////////////////////////////////////
//                         Alternate Solution A                               //
//                                                                            //
// https://www.youtube.com/watch?v=0JrZju2q2bs                                //
////////////////////////////////////////////////////////////////////////////////
// function findElement(arr, func) {
//   return arr.filter(func)[0];
// }

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
// should return 8.
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
// should return undefined.



////////////////////////////////////////////////////////////////////////////////
//                         Alternate Solution A                               //
////////////////////////////////////////////////////////////////////////////////
// function findElement(arr, func) {
//   let num = 0;
//
//   for(var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
//
//   return undefined;
// }


////////////////////////////////////////////////////////////////////////////////
//                     Converting a for loop to forEach                       //
////////////////////////////////////////////////////////////////////////////////
// const items = ['item1', 'item2', 'item3'];
// const copy = [];
//
// // BEFORE
// for (let i=0; i<items.length; i++) {
//   copy.push(items[i]);
// }
// console.log(copy); // Returns [ 'item1', 'item2', 'item3' ]

//
// AFTER
// items.forEach(function(item){
//   copy.push(item);
// });
//
// console.log(copy); // Returns [ 'item1', 'item2', 'item3' ]
