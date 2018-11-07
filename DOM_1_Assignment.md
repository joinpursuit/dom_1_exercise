# 🔑 Major Keys 🔑

_Create different js files for each exercise. Import them into your HTML file to check them_

## Exercise 1: String Repeater

Use​ `​window.prompt()​​` ​once​ ​to​ ​query​ ​the​ ​user​ ​for​ ​a​ ​string,​ and​ ​again​ ​to​ ​query​ ​the​ ​user for​ ​a​ ​number,​ which we'll call x.​ Use​ ​`​window.alert()​​` ​to​ ​display​ ​the​ ​same​ ​string,​ repeated​ ​x​ ​times.​ ​You​ ​may assume​ ​appropriate​ ​input.​

## Exercise 2: Odd or Even

Use​ `​window.prompt()​​` ​to​ ​query​ ​the user​ ​for​ ​a​ number.​ ​Use​ ​`​window.alert()​​` ​to​ ​tell​ ​the​ user​ `"that​ ​number​ ​is​ ​odd"`,​ `​"that​ ​number​ ​is even"`,​ ​or​ ​`"that​ ​is​ ​not​ ​a​ ​number"`,​ ​as​ ​is​ appropriate.

## Exercise 3: Text Adventure

Take the user on a short text adventure of your own composition. Use `window.alert()` to describe to them a situation, and `window.prompt()` to collect input from them to see what they will do. For example:

- Window: `What direction do you travel in? (N, S, E, W)`
- User: `N`
- Window: `You see a babbling brook.`

## Final Exercise: Major Keys

It's time to make our own pseudo-form. Inspired by major Snapchat influences, we've decided to write an app that allows our user to prioritize the things/concepts that they hold dear - in other words, their Major Keys.

In the HTML file in this folder, you have a few empty HTML elements. You have an `h1` tag, an ordered list, and five `li`s inside. Except for the ordered list, each element has a unique `id` property.

Your task is to create a window dialogue that asks the following questions:

- What is your name?
- What is your first key?
- What is your second key?
- What is your third key?
- What is your fourth key?
- What is your fifth key?

Take each user response. Change the `h1` tag to read "<name>'s Major Keys", where <name> is the user's answer to the first question. Each `li` element should contain the answer to each of their subsequent questions.

### Bonus

Allow the user to **highlight each key**, in the color of your choice, by CAPITALIZING the word in their input. Highlight the word and convert it to lowercase.
