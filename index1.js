let input1 = window.prompt("enter a number")
if(isNaN(input1*2)){
  window.alert("not a number")
} else if(input1 % 2 === 0){
  window.alert("even number")
} else if(input1 % 2 != 0){
  window.alert("odd number")
}
