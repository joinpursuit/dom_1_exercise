// Exercise 1: String Repeater
// Use​ ​window.prompt()​​ ​once​ ​to​ ​query​ ​the​ ​user​ ​for​ ​a​ ​string,​ and​ ​again​ ​to​ ​query​ ​the​ ​user for​ ​a​ ​number,​ which we'll call x.​ Use​ ​​window.alert()​​ ​to​ ​display​ ​the​ ​same​ ​string,​ repeated​ ​x​ ​times.​ ​You​ ​may assume​ ​appropriate​ ​input.​

let str = window.prompt("What's your name?")

let x = window.prompt("Give me a number")

for(let i = 0; i < x; i++){
alert(str)
}
