let name = prompt("What is your name?")
let first = prompt("What is your first key?")
let second = prompt("What is your second key?")
let third = prompt("What is your third key?")
let fourth = prompt("What is your fourth key?")
let fifth = prompt("What is your fifth key?")

// console.log(third);



document.getElementById("header").innerText = name.toUpperCase() + "'s Major Keys";
document.getElementById("item1").innerText = first
document.getElementById("item2").innerText = second
document.getElementById("item3").innerText = third
document.getElementById("item4").innerText = fourth
document.getElementById("item5").innerText = fifth

//BONUS:---------------------

if (first === first.toUpperCase()) {
  document.getElementById("item1").style.backgroundColor = "yellow";
  first.toLowerCase();

  document.getElementById("item1").style.color = "blue";
}

if (second === second.toUpperCase()) {
  document.getElementById("item2").style.backgroundColor = "blue";
  second.toLowerCase();
  document.getElementById("item2").style.color = "pink";
}

if (third === third.toUpperCase()) {
  document.getElementById("item3").style.backgroundColor = "lightgreen";
  second.toLowerCase();
  document.getElementById("item3").style.color = "red";
}

if (fourth === fourth.toUpperCase()) {
  document.getElementById("item4").style.backgroundColor = "violet";
  second.toLowerCase();
  document.getElementById("item4").style.color = "white";
}

if (fifth === fifth.toUpperCase()) {
  document.getElementById("item5").style.backgroundColor = "silver";
  second.toLowerCase();
  document.getElementById("item5").style.color = "gold";
}


// document.getElementById("item1").style.property = new style;

// for loop try:----------------------
// let array = [first, second, third, fourth, fifth]
// let arrayID = [item1, item2, item3, item4, item5]
//
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < arrayID.length; j++) {
//     if (array[i] === array[i].toUpperCase()) {
//       document.getElementById(arrayID[j]).style.backgroundColor = "yellow";
//       array[i].toLowerCase();
//       document.getElementById(arrayID[j]).style.color = "red";
//     }
//   }
// }
