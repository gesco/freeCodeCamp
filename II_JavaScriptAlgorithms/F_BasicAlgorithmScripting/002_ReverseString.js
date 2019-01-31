////////////////////////////////////////////////////////////////////////////////
//            Basic Algorithm Scripting: Reverse a String
////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////
//JavaScript Demo: String.split()//
///////////////////////////////////
var str = 'The quick brown fox jumps over the lazy dog.';

var words = str.split(' ');
console.log(words[3]);
// expected output: "fox"

var chars = str.split('');
console.log(chars[8]);
// expected output: "k"

var strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

////////////////////////////////////
//JavaScript Demo: Array.reverse()//
////////////////////////////////////
var array1 = ['one', 'two', 'three'];
console.log('array1: ', array1);
// expected output: Array ['one', 'two', 'three']

var reversed = array1.reverse();
console.log('reversed: ', reversed);
// expected output: Array ['three', 'two', 'one']

/* Careful: reverse is destructive. It also changes
the original array */
console.log('array1: ', array1);
// expected output: Array ['three', 'two', 'one']

const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]

//////////////////////////////////
//JavaScript Demo: Array.join()//
/////////////////////////////////
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain

var b = ['Wind', 'Rain', 'Fire'];
b.join();      // 'Wind,Rain,Fire'
b.join(', ');  // 'Wind, Rain, Fire'
b.join(' + '); // 'Wind + Rain + Fire'
b.join('');    // 'WindRainFire'


////////////////////////////////////////////////////////////////////////////////
function reverseString(str) {
  // 1) Use the split() method to return a new array
  let stringToArray = str.split("");  // let stringToArray = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // 2) Use the reverse() method to reverse the new created array1
  let reverseArray = stringToArray.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

  // 3) Use the join() method to join all elements of the array into a stringToArray
  let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

  return joinArray;
}

// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

console.log(reverseString("hello")) // should become "olleh".
console.log(reverseString("Howdy")) // should become "ydwoH".
console.log(reverseString("Greetings from Earth")) // should return "htraE morf sgniteerG".
