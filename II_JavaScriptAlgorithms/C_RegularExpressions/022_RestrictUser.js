////////////////////////////////////////////////////////////////////////////////
//           Regular Expressions: Restrict Possible Usernames
// 1) The only numbers in the username have to be at the end. There can be zero
//    or more of them at the end.
//    /\d*$/;
//
// 2) Username letters can be lowercase and uppercase.
//    /\d*$/i;
//
// 3) Usernames have to be at least two characters long. A two-letter username
//    can only use alphabet letter characters.
//    /^[a-z]{2,}\d*$/i;
////////////////////////////////////////////////////////////////////////////////

let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
let result = userCheck.test(username);
console.log(result);  // Returns True
