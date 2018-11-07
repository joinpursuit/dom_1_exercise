let header = document.getElementById('header');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let name = prompt('What is your name?');
let key1 = prompt(`${name} what is your first key?`);
let key2 = prompt(`${name} what is your second key?`);
let key3 = prompt(`${name} what is your third key?`);
let key4 = prompt(`${name} what is your fourth key?`);
let key5 = prompt(`${name} what is your fifth key?`);
let keys = [key1, key2, key3, key4, key5];
const highlight = arr => {
  arr.forEach((el, i) => {
    if (isNaN(el) && el[0] === el[0].toUpperCase()) {
      document.getElementById(`item${i + 1}`).classList.add(`item${i + 1}`);
    }
  });
};

header.innerText = `${name}'s Major Keys:`;
item1.innerText = key1;
item2.innerText = key2;
item3.innerText = key3;
item4.innerText = key4;
item5.innerText = key5;

highlight(keys);
