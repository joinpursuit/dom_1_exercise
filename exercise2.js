// ## Exercise 2: Odd or Even
let evenly = window.prompt("Please, enter a number");
 if(evenly % 2 === 0){
   window.alert("that number is even");
 }else if(evenly % 2 === 1){
   window.alert("that​ ​number​ ​is​ ​odd");
 }else{
    window.alert("that​ ​is​ ​not​ ​a​ ​number");
 };

  if (!isNaN(evenly) % 2 !== 0) {
    window.alert("that​ ​number​ ​is​ ​odd");
  }else if(evenly % 2){
    window.alert(​"that​ ​number​ ​is even");
  }else{
    window.alert("that​ ​is​ ​not​ ​a​ ​number");
  }
