let askName = 'Please enter your name:';
let askNum = 'Please enter your age:';
let name = prompt(askName);
let age = prompt(askNum);
const ageName = (name, age) => {
  let year = 2018;
  age = age > 50 ? 21 : age;
  for (let i = 0; i < age; i++) {
    alert(`${name} ${i} years old in ${year - age + i}`);
  }
};

ageName(name, age);
