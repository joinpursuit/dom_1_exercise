// Use​ `​window.prompt()​​` ​once​ ​to​ ​query​ ​the​ ​user​ ​for​ ​a​ ​string,​ and​ ​again​ ​to​ ​query​ ​the​ ​user for​ ​a​ ​number,​ which we'll call x.​
// Use​ ​`​window.alert()​​` ​to​ ​display​ ​the​ ​same​ ​string,​ repeated​ ​x​ ​times.​ ​You​ ​may assume​ ​appropriate​ ​input.​

let string = window.prompt("Please enter your name")
let x = window.prompt("Please enter a number from 1-5")
let newX = parseFloat(x)
for (let i=0; i<newX; i++) {
 if (newX <= 5) {
   window.alert(string)
 } else {
   window.alert("Sorry that number is not between 1-5")
 }
}
