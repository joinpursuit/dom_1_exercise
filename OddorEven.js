let number = window.prompt("Enter a number")
number = Number(number)
if (number % 2 === 0){
  window.alert("that number is even");
} else if (number % 2 === 1){
  window.alert("that number is odd");
} else {
window.alert("that number is not a number");
}
