let input = prompt('please enter a number');
let isOdd = `${input} is odd.`;
let isEven = `${input} is even.`;
let isNot = `${input} is not a number.`;

const inputReply = input => {
  if (isNaN(input)) {
    prompt(isNot);
  } else if (+input % 2) {
    prompt(isOdd);
  } else {
    prompt(isEven);
  }
};

inputReply(input);
