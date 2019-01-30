// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr);
// console.log(maximus); // returns 89

// const arr = [6, 89, 3, 45];
// const maximus = Math.max(...arr);
// console.log(maximus); // returns 89

// Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
