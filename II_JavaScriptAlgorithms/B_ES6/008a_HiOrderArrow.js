// FBPosts.filter(function(post) {
//   return post.thumbnail !== null && post.shares > 100 && post.likes > 500;
// })

// FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)

////////////////////////////////////////////////////////////////////////////////
// JavaScript Array Filter
// https://www.youtube.com/watch?v=4_iT6EGkQfk
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
////////////////////////////////////////////////////////////////////////////////
// const numbers = [1, -1, 2, 3];
//
// const filtered = numbers.filter(function(value) {
//   return value >= 0;
// });
//
// console.log(filtered); // [ 1, 2, 3 ]

// const filtered = numbers.filter(value => value >=0);
// console.log(filtered); // [ 1, 2, 3 ]

// const filtered = numbers.filter(n => n >=0);
// console.log(filtered); // [ 1, 2, 3 ]

////////////////////////////////////////////////////////////////////////////////
// JavaScript Array Map
// https://www.youtube.com/watch?v=G3BS3sh3D8Q
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
////////////////////////////////////////////////////////////////////////////////
// var array1 = [1, 4, 9, 16];
//
// pass a function to map
// const map1 = array1.map(x => x * 2);
//
// console.log(map1);
// expected output: Array [2, 8, 18, 32]

////////////////////////////////////////////////////////////////////////////////
// Use arrow function syntax to compute the square of only the positive integers
// (decimal numbers are not integers) in the array realNumberArray and store the
// new array in the variable squaredIntegers.
////////////////////////////////////////////////////////////////////////////////
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {

   const positiveIntegers = arr.filter(num => num > 0 && Number.isInteger(num));
   const squaredIntegers = positiveIntegers.map(y => Math.pow(y, 2));
  // const squaredPositiveIntegers =
  //   arr.filter(x => x > 0 && Number.isInteger(x)).map(y => Math.pow(y,2));

  return squaredIntegers;
  // return squaredPositiveIntegers;
};

// console.log(squareList(realNumberArray));
 const squaredIntegers = squareList(realNumberArray);
 console.log(squaredIntegers);  // [ 16, 1764, 36 ]
