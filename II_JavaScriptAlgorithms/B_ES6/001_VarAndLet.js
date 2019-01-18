// One of the biggest problems with declaring variables with the var keyword is
// that you can overwrite variable declarations without an error.

let catName;
let quote;
function catTalk() {
  catName = "Oliver";
  quote = catName + " says Meow!";

  return quote;
}
console.log(catTalk());
