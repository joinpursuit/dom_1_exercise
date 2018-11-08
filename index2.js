let input = window.prompt("enter number");
if (isNaN(input)) {
  window.alert("that​ ​is​ ​not​ ​a​ ​number");
}
else if (input % 2 === 1) {
  window.alert("that number is odd");
} else {
  window.alert("that number is even");
}
