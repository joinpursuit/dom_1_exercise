let number = window.prompt("please enter a number");

if(number % 2 === 0){
  window.alert("That number is even");
}else if(number % 3){
  window.alert("the number is odd");
}else if(isNaN(number)){
  window.alert("that is not a number");
}
