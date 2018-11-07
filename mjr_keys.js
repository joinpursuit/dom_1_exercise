// ## Final Exercise: Major Keys
//
// It's time to make our own pseudo-form. Inspired by major Snapchat influences, we've decided
// to write an app that allows our user to prioritize the things/concepts that they hold dear - in other words,
//  their Major Keys.
//
// In the HTML file in this folder, you have a few empty HTML elements.
// You have an `h1` tag, an ordered list, and five `li`s inside. Except for the ordered list,
// each element has a unique `id` property.
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
// Take each user response. Change the `h1` tag to read "<name>'s Major Keys", where <name> is the user's
// answer to the first question. Each `li` element should contain the answer to each of their subsequent questions.
//
// ### Bonus
//
// Allow the user to **highlight each key**, in the color of your choice, by CAPITALIZING
// the word in their input. Highlight the word and convert it to lowercase.

let input = prompt('What is your name?')
document.getElementById('header').innerText = input

let input1 = prompt('What is your first key?')
document.getElementById('item1').innerText = input1

let input2 = prompt('What is your second key?')
 document.getElementById('item2').innerText = input2

let input3 = prompt('What is your third key?')
document.getElementById('item3').innerText = input3

let input4 = prompt('What is your fourth key?')
 document.getElementById('item4').innerText = input4

let input5 = prompt('What is your fifth key?')
 document.getElementById('item5').innerText = input5
