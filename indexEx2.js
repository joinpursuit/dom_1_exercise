let num = prompt("give me a number")

if (isNaN(num)) {
  alert("that is not a number")
} else if (num % 2 === 1) {
  alert("your number is odd")
} else {
  alert("your number is even")
}
