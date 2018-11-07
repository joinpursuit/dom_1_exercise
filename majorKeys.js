// It's time to make our own pseudo-form. Inspired by major Snapchat influences, we've decided to write an app that allows our user to prioritize the things/concepts that they hold dear - in other words, their Major Keys.
//
// In the HTML file in this folder, you have a few empty HTML elements. You have an `h1` tag, an ordered list, and five `li`s inside. Except for the ordered list, each element has a unique `id` property.
//
// Your task is to create a window dialogue that asks the following questions:
//
// - What is your name?
// - What is your first key?
// - What is your second key?
// - What is your third key?
// - What is your fourth key?
// - What is your fifth key?
//
// Take each user response. Change the `h1` tag to read "<name>'s Major Keys", where <name> is the user's answer to the first question. Each `li` element should contain the answer to each of their subsequent questions.


let answer = window.prompt("What is your name?");
let header=document.getElementById("header");
header.innerText = answer;

let ans2 = window.prompt("What is your first key?");
let i =document.getElementById("item1");
i.innerText = ans2;

let ans3 = window.prompt("What is your second key?");
let it=document.getElementById("item2");
it.innerText = ans3;

let ans4 = window.prompt("What is your third key?");
let ite=document.getElementById("item3");
ite.innerText = ans4;

let ans5 = window.prompt("What is your fourth key?");
let item=document.getElementById("item4");
item.innerText = ans5;

let ans6 = window.prompt("What is your fifth key?");
let items=document.getElementById("item5");
items.innerText = ans6;
