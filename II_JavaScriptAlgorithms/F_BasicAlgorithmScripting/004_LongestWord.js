function findLongestWordLength(str) {

  let holdWord = 0;

  // Split the string into an array of strings
  let strSplit = str.split(' ');
  //console.log(strSplit);
  // RETURNS
  // [ 'The',
  // 'quick',
  // 'brown',
  // 'fox',
  // 'jumped',
  // 'over',
  // 'the',
  // 'lazy',
  // 'dog' ]

  for ( let i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > holdWord) {
      holdWord = strSplit[i].length;
    }
  }

  return holdWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
// Return 6
