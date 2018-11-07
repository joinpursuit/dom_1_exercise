//Exercise 2: Odd or Even
// Use​ ​window.prompt()​​ ​to​ ​query​ ​the user​ ​for​ ​a​ number.​ ​Use​ ​​window.alert()​​ ​to​ ​tell​ ​the​ user​ "that​ ​number​ ​is​ ​odd",​ ​"that​ ​number​ ​is even",​ ​or​ ​"that​ ​is​ ​not​ ​a​ ​number",​ ​as​ ​is​ appropriate.


let num = window.prompt("Type in a number!")

if(num % 2 === 0){
  alert("This number is even!");
}else if(num % 2 === 1){
  alert("This number is odd!");
}else {
  alert("This is not a number");
}
