////////////////////////////////////////////////////////////////////////////////
//            Basic Algorithm Scripting: Title Case a Sentence                //
//                                                                            //
// Return the provided string with the first letter of each word capitalized. //
// Make sure the rest of the word is in lower case. For the purpose of this   //
// exercise, you should also capitalize connecting words like "the" and "of". //
////////////////////////////////////////////////////////////////////////////////
function titleCase(str) {
  let holdWords = str.toLowerCase().split(" ");
  for (let i = 0; i < holdWords.length; i++ ) {
    holdWords[i] = holdWords[i][0].toUpperCase() + holdWords[i].slice(1);
  }
  return holdWords.join(" ");
}

////////////////////////////////////////////////////////////////////////////////
//                           Alternate Code A                                 //
////////////////////////////////////////////////////////////////////////////////
// function titleCase(str) {
//   let titled = str.toLowerCase().split(" ").map(function(elem) {
//     return elem[0].toUpperCase() + elem.slice(1)
//   })
//
//   return titled.join(" ");
// }
////////////////////////////////////////////////////////////////////////////////
//                           Alternate Code B                                 //
////////////////////////////////////////////////////////////////////////////////
// String.prototype.replaceAt = function(index, character) {
//     return this.substr(0, index) + character + this.substr(index+character.length);
// };
//
// function titleCase(str) {
//     var newTitle = str.split(' ');
//     var updatedTitle = [];
//     for (var st in newTitle) {
//         updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//     }
//     return updatedTitle.join(' ');
// }

////////////////////////////////////////////////////////////////////////////////
//                           Alternate Code C                                 //
////////////////////////////////////////////////////////////////////////////////
// function titleCase(str) {
//   // Splits one string into an array of strings seperated by ' '
//   strSplit = str.split(' ');
//
//   for (let i = 0; i < strSplit.length; i++) {
//     // Place holder for original string
//     let holdString = strSplit[i];
//     // Selects first letter and uppercases it
//     let upLetter = holdString.charAt(0).toUpperCase();
//     // Selects 2nd letter to end of the word and lower cases interval
//     holdString = holdString.slice(1, holdString.length).toLowerCase();
//     // Concats uppercase first letter and rest of lowercase word
//     strSplit[i] = upLetter.concat(holdString);
//   }
//   // Takes array and sets str to a single string
//   str = strSplit.join(' ');
//   return str;
// }

console.log(titleCase("I'm a little tea pot"));

////////////////////////////////////////////////////////////////////////////////
//                          String.charAt()                                   //
////////////////////////////////////////////////////////////////////////////////
//
// var sentence = 'The quick brown fox jumps over the lazy dog.';
//
// var index = 4;
//
// console.log('The character at index ' + index + ' is ' + sentence.charAt(index));
// // expected output: "The character at index 4 is q"


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
