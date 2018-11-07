let input = prompt('please enter a number');
let isOdd = `${input} is odd.`;
let isEven = `${input} is even.`;
let isNot = `${input} is not a (whole) number.`;

const inputReply = input => {
  // if (isNaN(input)) {
  //   prompt(isNot);
  // } else
  if (+input % 2 === 0) {
    alert(isEven);
  } else if (+input % 2 === 1) {
    alert(isOdd);
  } else {
    alert(isNot);
  }
};

inputReply(input);
