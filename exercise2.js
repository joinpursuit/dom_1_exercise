// Use​ ​window.prompt()​​ ​to​ ​query​ ​the user​ ​for​ ​a​ number.​ ​Use​ ​​window.alert()​​ ​to​ ​tell​ ​the​ user​ "that​ ​number​ ​is​ ​odd",​ ​"that​ ​number​ ​is even",​ ​or​ ​"that​ ​is​ ​not​ ​a​ ​number",​ ​as​ ​is​ appropriate.

let input = window.prompt("Hey! Pick a number just 'cause....")

if (input % 2 === 0){
  alert("That number is even!")
} else {
  window.alert("That number is so odd!")
};
