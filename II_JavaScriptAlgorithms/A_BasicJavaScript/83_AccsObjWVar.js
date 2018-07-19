// Another use of bracket notation on objects is to access a property which is
// stored as the value of a variable.

// Here is an example of using a variable to access a property:
// var dogs = {
//   Fido: "Mutt", Hunter: "Doberman", Snoopie: "Beagle"
// };
// var myDog = "Hunter";
// var myBreed = dogs[myDog];
// console.log(myBreed); // "Doberman"

// Another way
// var someObj = {
//   propName: "John"
// };
// function propPrefix(str) {
//   var s = "prop";
//   return s + str;
// }
// var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
// console.log(someObj[someProp]); // "John"

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
