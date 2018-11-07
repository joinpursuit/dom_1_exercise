// //String Repeater
//
let thing = window.prompt("Enter stuff")
let num = window.prompt("Enter a number")
num =+ num;
for (let i=0;i<num;i++){
  window.alert(thing)
}
//
//
// //Odd or even
let numb = window.prompt("Enter a number")
numb =+ numb;
if (numb%2===0){
  window.alert("that number is even")
}else{
  window.alert("that number is odd")
}

//Text Adventure
window.alert("You are trapped in a forest");
window.alert("Find a way out of the forest");
let direction = window.prompt(`What direction do you travel in? (N, S, E, W)`)
direction = direction.toUpperCase();
if(direction === "N"){window.alert("You made it out of the forest")}
else{window.alert("you have died")}

// Final Exercise: Major Keys
let name = window.prompt("What is your name?");
header.innerText = name + "'s keys"
let key1 = window.prompt("What is your first key?");
item1.innerText = key1
let key2 = window.prompt("What is your second key?");
item2.innerText = key2
let key3 = window.prompt("What is your third key?");
item3.innerText = key3
let key4 = window.prompt("What is your fourth key?");
item4.innerText = key4
let key5 = window.prompt("What is your fifth key?");
item5.innerText = key5
