// We have an array of objects representing different people in our contacts lists.
// A lookUpProfile function that takes name and a property (prop) as arguments
// has been pre-written for you.

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
  // Only change code below this line

  // The function should check if name is an actual contact's firstName and the
  // given property (prop) is a property of that contact.

  var nameFlag = 0;
  for (var i = 0; i < contacts.length; i++) {
    // Only change code below this line

    // If both are true, then return the "value" of that property.
    if ((contacts[i].firstName === name) && (contacts[i].hasOwnProperty(prop))) {
      return contacts[i][prop];
    }
    // If name does not correspond to any contacts then return "No such contact"
    if ((contacts[i].firstName !== name) && (i === contacts.length - 1)) {
        return "No such contact";
    }
    // If prop does not correspond to any valid properties of a contact found to
    // match name then return "No such property"
    if ((contacts[i].firstName === name) && !(contacts[i].hasOwnProperty(prop))) {
      return "No such property";
    }

    // Only change code above this line
  }
}

// Change these values to test your function
console.log(lookUpProfile("Akira", "likes"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Akira", "address"));

// Output
// [ 'Pizza', 'Coding', 'Brownie Points' ]
// [ 'Intriguing Cases', 'Violin' ]
// [ 'Hogwarts', 'Magic', 'Hagrid' ]
// No such contact
// No such property

// "Sherlock", "likes" should return ["Intriguing Cases", "Violin"]
// "Harry","likes" should return an array
// "Bob", "number" should return "No such contact"
// "Bob", "potato" should return "No such contact"
// "Akira", "address" should return "No such property"

// ALTERNATE CODE
// for (var x = 0; x < contacts.length; x++){
//     if (contacts[x].firstName === name) {
//         if (contacts[x].hasOwnProperty(prop)) {
//             return contacts[x][prop];
//         } else {
//             return "No such property";
//         }
//     }
// }
// return "No such contact";
