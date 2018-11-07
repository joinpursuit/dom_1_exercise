
// Use​ ​window.prompt()​​ ​once​ ​to​ ​query​ ​the​ ​user​ ​for​ ​a​ ​string,​ and​ ​again​ ​to​ ​query​ ​the​ ​user for​ ​a​ ​number,​ which we'll call x.​ Use​ ​​window.alert()​​ ​to​ ​display​ ​the​ ​same​ ​string,​ repeated​ ​x​ ​times.​ ​You​ ​may assume​ ​appropriate​ ​input

let repeatStr = window.prompt("What's going on in the world?")
let numOftimes = window.prompt("Guess a number between 0 & 3 because I don't want to cylce through so many methods")

for(let i = 1; i <= numOftimes; i++){
  window.alert(repeatStr)
}
