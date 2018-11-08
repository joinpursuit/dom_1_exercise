// Use​ `​window.prompt()​​` ​to​ ​query​ ​the user​ ​for​ ​a​ number.​
// ​Use​ ​`​window.alert()​​` ​to​ ​tell​ ​the​ user​ `"that​ ​number​ ​is​ ​odd"`,​ `​"that​ ​number​ ​is even"`,​ ​or​ ​`"that​ ​is​ ​not​ ​a​ ​number"`,​
//  ​as​ ​is​ appropriate.

let num = window.prompt("Please enter a number")
let isNum = parseFloat(num)
if (isNum % 2 === 0) {
  window.alert("Your number is even!")
} else {
  window.alert("Your number is odd!")
}
