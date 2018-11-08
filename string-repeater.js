let name = window.prompt('What is your name?');
let x = +(window.prompt('What is your age?'));

//console.log(typeof x);

// iteratively;
// for (let i = 1; i <= x; i++) {
//   window.alert(`${name} ${i}`);
// }

//recursion;
function repeater(name, x, counter = 1) {
  if (counter === x + 1) {return};
  alert(`${name} ${counter}`);
  counter++;
  return repeater(name, x, counter);
}

repeater(name, x);
