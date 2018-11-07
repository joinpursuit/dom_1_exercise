let str = window.prompt("Type Beetlejuice, please.")
let x = window.prompt("Tell me your favorite number please.")
let num = parseInt(x);

// console.log(typeof x);
// console.log(typeof parseInt(x));
// console.log(typeof num);
// console.log(str);

const strRepeater = (num) => {
  for (let i = 0; i < num; i++) {
    window.alert(str) * i
  }
}

strRepeater(num)
