// Number 1
let str = window.prompt('Please enter a string');
let x = window.prompt('Enter a number');
let i = 0;
while (i < x) {
  window.alert(str);
  i++;
}

// Number 2
let num = window.prompt("Pick a number, I'll tell you if it's even or odd");
if (isNaN(num)) {
  window.alert(
    "Hmm.. Seems like you don't know your numbers because " +
      num +
      ' is not even a number. Think about your life choices and pick a real number'
  );
} else if (num % 2 === 0) {
  window.alert(num + ' is even');
} else {
  window.alert('Something is odd here... oh yeah!' + num + ' is quite odd.');
}

// Number 3
window.alert(
  `It's 3 a.m. and you are walking home but you see someone following you.`
);

let input = window.prompt(
  `What do you do? 
 F - Fight for your life 
 S - Scream for help 
 N - Nothing, you are just being paranoid`
);

if (input === 'f'.toLowerCase()) {
  window.aler('Chill~ it was just a stray cat');
} else if (input === 's'.toLowerCase()) {
  window.alert('Great... You woke up the crazy lady down the block..');
} else if (input === 'n'.toLowerCase()) {
  window.alert("Don't question why you get robbed all the time...");
} else {
  window.alert('Invalid key. Try again');
}

// Number 4
let h1 = window.prompt('What is your name?');
let header = document.getElementById('header');
header.innerHTML = h1 + "'s Major Keys'";
let keyOne = window.prompt('What is your first key?');
let itemOne = document.getElementById('item1');
itemOne.innerHTML = keyOne;
let keyTwo = window.prompt('What is your second key?');
let itemTwo = document.getElementById('item2');
itemTwo.innerHTML = keyTwo;
let keyThree = window.prompt('What is your third key?');
let itemThree = document.getElementById('item3');
itemThree.innerHTML = keyThree;
let keyFour = window.prompt('What is your fourth key?');
let itemFour = document.getElementById('item4');
itemFour.innerHTML = keyFour;
let keyFive = window.prompt('What is your fifth key?');
let itemFive = document.getElementById('item5');
itemFive.innerHTML = keyFive;
