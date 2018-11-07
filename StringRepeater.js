let number = window.prompt("Enter a number")
let string = window.prompt("Enter a string")
  number = Number(number)
  let repeater = "";
  for (let i = 0; i < number; i++) {
    repeater += string + "\n";
  }
window.alert(repeater);
