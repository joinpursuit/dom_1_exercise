let askDir = `What direction to you travel in?
[N] [E] [S] [W]`;
let input = prompt(askDir.toLowerCase());
const validated = input => {
  return input === 'N' || input === 'E' || input === 'S' || input === 'W';
};

const dirStory = dir => {
  if (validated(dir)) {
    let obj = {
      N: 'North',
      E: 'East',
      S: 'South',
      W: 'West',
    };
    alert(`You chose ${obj[dir]}`);
  } else {
    dirStory(prompt(askDir));
  }
};

dirStory(prompt(input));
