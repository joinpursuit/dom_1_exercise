let x = parseInt(window.prompt("Gimme your lucky number"));

while (isNaN(x)) {
  x = parseInt(window.prompt("This is not a number. Try again:"));
}

(x % 2) ? window.alert(`${x} is an odd number`) : window.alert(`${x} is an even number`);
