////////////////////////////////////////////////////////////////////////////////
//         Basic Algorithm Scripting: Repeat a String Repeat a String         //
//                                                                            //
// Repeat a given string str (first argument) for num times (second argument).//
// Return an empty string if num is not a positive number.                    //
////////////////////////////////////////////////////////////////////////////////

// function repeatStringNumTimes(str, num) {
//     let storeString = str;
//   if (num > 0) {
//     for (let i = 0; i <= num - 2; i++) {
//       storeString += str;
//     }
//     return storeString;
//   } else return "";
// }

////////////////////////////////////////////////////////////////////////////////
// function repeatStringNumTimes(str, num) {
//   var accumulatedStr = '';
//
//   while (num > 0) {
//     accumulatedStr += str;
//     num--;
//   }
//
//   return accumulatedStr;
// }

////////////////////////////////////////////////////////////////////////////////
function repeatStringNumTimes(str, num) {
  let holderArray = [];
  for (let i = 0; i < num; i++) {
    holderArray.push(str);
  }
  str = holderArray.join("");
  return str;
}

////////////////////////////////////////////////////////////////////////////////

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -2)); // should return ""
//repeatStringNumTimes("abc", 3);

////////////////////////////////////////////////////////////////////////////////
//                     Converting a for loop to forEach                       //
////////////////////////////////////////////////////////////////////////////////
// const items = ['item1', 'item2', 'item3'];
// const copy = [];
//
// // before
// for (let i=0; i<items.length; i++) {
//   copy.push(items[i]);
// }
//
// // after
// items.forEach(function(item){
//   copy.push(item);
// });
