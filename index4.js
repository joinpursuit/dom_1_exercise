// Final Exercise: Major Keys
// It's time to make our own pseudo-form. Inspired by major Snapchat influences, we've decided to write an app that allows our user to prioritize the things/concepts that they hold dear - in other words, their Major Keys.
//
// In the HTML file in this folder, you have a few empty HTML elements. You have an h1 tag, an ordered list, and five lis inside. Except for the ordered list, each element has a unique id property.
//
// Your task is to create a window dialogue that asks the following questions:
//
// What is your name?
// What is your first key?
// What is your second key?
// What is your third key?
// What is your fourth key?
// What is your fifth key?
// Take each user response. Change the h1 tag to read "'s Major Keys", where is the user's answer to the first question. Each li element should contain the answer to each of their subsequent questions.

let name = prompt("What's your name?")

let header = document.getElementById("header")
header.innerText = name + "'s Major Keys"

let firstKey = document.getElementById("item1")
let first = prompt("What's the first most important key for you?")
firstKey.innerText = first

let secondKey = document.getElementById("item2")
let second = prompt("and the second most important?")
secondKey.innerText = second

let thirdKey = document.getElementById("item3")
let third = prompt("and the third most important?")
thirdKey.innerText = third

let fourthKey = document.getElementById("item4")
let fourth = prompt("and the fourth most important?")
fourthKey.innerText = fourth

let fifthKey = document.getElementById("item5")
let fifth = prompt("and the fifth most important?")
fifthKey.innerText = fifth

alert("This computer will self-destruct in 3 seconds...")
