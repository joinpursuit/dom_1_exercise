// Exercise 1: String Repeater

let str = window.prompt("Please enter a string you'd like repeated");
let num = window.prompt("Please enter a number you'd like to see you string repeated");
num = Number(num);
for(let i = 0; i < num; i++){
    window.alert(str);
}

//Exercise 2: Odd or Even

let input = window.prompt("Please pick a number and I'll tell you if it's odd or even");

if(isNaN(input)){
  window.alert("Not a number! Please pick a number!");
} else if(input % 2){
  window.alert(input + " is an odd number");
} else {
  window.alert(input + " is even number");
}

//Exercise 3: Text Adventure

let input = window.prompt("Let me tell you a little bit about classes at Pursuit \n Please type the one you would like to know more about(iOS, FSDays, FSNights, Android)");
window.alert("You picked " + input);

if(input.toLowerCase() === "ios"){
  window.alert(input + " is a days class that teaches fellows Apple operating system and app developement");
}else if(input.toLowerCase() === "fsdays"){
  window.alert(input + " is a days class that teaches Fullstack and front end JS frameworks");
}else if(input.toLowerCase() === "fsnights"){
window.alert(input + " is a nights class that teaches Fullstack and front end JS frameworks");
}else if(input.toLowerCase() === "android"){
  window.alert(input + " is a nights class that teaches fellows about Android operating system and app developement");
}else{
  window.alert("Sorry " + input + " is not a valid choice. Please refresh and try again");
}

//Final Exercise: Major Keys
//
let name = window.prompt("What is your name?");

document.getElementById("header").innerHTML = name + "'s Major Keys";

let key1 = window.prompt("What is your 1st key?");
document.getElementById("item1").innerHTML = key1;

let key2 = window.prompt("What is your 2nd key?");
document.getElementById("item2").innerHTML = key2;

let key3 = window.prompt("What is your 3rd key?");
document.getElementById("item3").innerHTML = key3;

let key4 = window.prompt("What is your 4th key?");
document.getElementById("item4").innerHTML = key4;

let key5 = window.prompt("What is your 5th key?");
document.getElementById("item5").innerHTML = key5;
