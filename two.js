let numInput = window.prompt("Please enter a number.");
if (isNaN(numInput)) {
  window.alert("Your input is not a number. Please try again.")
  } else if (numInput % 2 === 0) {
    window.alert("This is an even number.");
  } else {
  window.alert("This is an odd number.");
}
