// If you have a multi-dimensional array, you can use the same logic as the prior
// waypoint to loop through both the array and any sub-arrays. Here is an example:
// var arr = [
//   [1,2], [3,4], [5,6]
// ];
// for (var i=0; i < arr.length; i++) {
//   for (var j=0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// Modify function multiplyAll so that it multiplies the product variable by each
// number in the sub-arrays of arr

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  var arrProd = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      arrProd *= arr[i][j];
      if (arr[i] === arr[i].length) {
        product *= arrProd;
        arrProd = 1;
      }
      // console.log(arrProd);
    }
  }
  // Only change code above this line
  return arrProd;
}

// Modify values below to test your code
//multiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

// OUTPUT
// 5040
