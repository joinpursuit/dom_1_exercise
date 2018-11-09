let name = prompt('What is your name?');
let first = prompt('What is your first key?');
let second = prompt('What is your second key?');
let third = prompt('What is your third key?');
let fourth = prompt('What is your fourth key?');
let fifth = prompt('What is your fifth key?');

let header = document.getElementById('header');
let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');

let selectedName = header.innerHTML = `${name}'s Major Keys`;
let selectedFirst = item1.innerHTML = first;
let selectedSecond = item2.innerHTML = second;
let selectedThird = item3.innerHTML = third;
let selectedFourth = item4.innerHTML = fourth;
let selectedFifth = item5.innerHTML = fifth;

function highlight(input, numInnerHtmlId) {
  let copy = input.slice(0);
  let action = "<span style = 'background-color : yellow'>" + copy + "</span>";

  numInnerHtmlId.innerHTML = action;

}

let answers =[
  {answer:first, item:item1},
  {answer:second, item:item2},
  {answer:third, item:item3},
  {answer:fourth, item:item4},
  {answer:fifth, item:item5},
];

answers.forEach((el) => {
  if (el.answer.toUpperCase ()=== el.answer) {
    el.answer = el.answer.toLowerCase();
    highlight(el.answer, el.item)
  }
})
