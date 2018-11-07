// Use​ `​window.prompt()​​` ​to​ ​query​ ​the user​ ​for​ ​a​ number.​ ​Use​ ​`​window.alert()​​` ​to​ ​tell​ ​the​ user​
// `"that​ ​number​ ​is​ ​odd"`,​ `​"that​ ​number​ ​is even"`,​ ​or​ ​`"that​ ​is​ ​not​ ​a​ ​number"`,​ ​as​ ​is​ appropriate.


let num = prompt(`Enter a number.`)

num = Number(num)

if (num % 2 === 0){
  alert(`This number is even`)
} else {
  alert(`This number is odd`)
}
