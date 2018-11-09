let number = +(prompt("Enter a number: "));

if (number % 2) {
  alert(`${number} is odd.`);
} else if ( number % 2 === 0){
  alert(`${number} is even.`);
} else {
  alert(`Your input is not a number.`);
}

// if (number % 2) {
//   alert(`${number} is odd`);
// } else if ( number % 2 === 0){
//   alert(`${number} is even`);
// } else if (isNaN(number)){
//   alert(`${number} is not a number`);
// }
