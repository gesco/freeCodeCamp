var count = 0;

function cc(card) {
  // Only change code below this line
  if(card > 1 && card < 7){
    count++;
  }else if (card == 7 || card == 8 || card == 9){
    count += 0;
  }else if (card == 10 || card == "J" || card == "Q" || card == "K"|| card == "A") {
    count--;
  }

  if (count > 0){
  return count + " Bet";
  } else {
  return count + " Hold";
  }
  // Only change code above this line
}

// function cc(card) {
//   // Only change code below this line
//   switch(card){
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }
//   if (count > 0){
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
//   // Only change code above this line
// }

// Add/remove calls to test your function.
// Note: Only the last will display
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));
