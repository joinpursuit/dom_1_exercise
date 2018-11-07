// ## Exercise 1: String Repeater

// Use​ `​window.prompt()​​` ​once​ ​to​ ​query​ ​the​ ​user​ ​for​ ​a​ ​string,​ and​ ​again​ ​to​ ​query​
// ​the​ ​user for​ ​a​ ​number,​ which we'll call x.​ Use​ ​`​window.alert()​​` ​to​ ​display​ ​the​
// ​same​ ​string,​ repeated​ ​x​ ​times.​ ​You​ ​may assume​ ​appropriate​ ​input.​


let input = window.prompt("Enter a word.")

let num = window.prompt("Please enter a number 1 - 20.")

num = Number(num)

for(let i = 0; i < num; i++){
  alert(input)
}
