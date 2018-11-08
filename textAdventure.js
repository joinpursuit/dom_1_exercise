let life = `💚 `;
let lost = `💔`;
let star = `⭐`;
let lives = 3;
let stars = 0;
let won = false;
let welcome = `Puppy Come Home!`;
let winner = `Welcome Home Puppy!! You earned a ${star}!`;
const getLives = () => {
  let str = '';
  for (let i = 0; i < lives; i++) {
    str += life;
  }

  return str;
};

const getStars = () => `${star} x${stars}`;
const getMsg = () => (won ? winner : welcome);

let gfx = [`⬜`, `🏡`, `🐶`, `🌳`, `🦖`];

const render = tiles =>
  tiles.map(tile => (typeof tile === 'number' ? gfx[tile] : tile)).join('');
let dirs = `[ 1:⬅ ][ 2:⬇ ][ 3:⬆ ][ 4:➡ ]`;

let o = `
`;

let tiles = [
  3,
  3,
  3,
  3,
  3,
  3,
  o,
  3,
  0,
  0,
  0,
  1,
  3,
  o,
  3,
  0,
  0,
  3,
  0,
  3,
  o,
  3,
  0,
  3,
  0,
  0,
  3,
  o,
  3,
  2,
  0,
  0,
  0,
  3,
  o,
  3,
  3,
  3,
  3,
  3,
  3,
];

const get = el => {
  let num = el === 'puppy' ? 2 : el === 'home' ? 1 : 0;
  return tiles.reduce((acc, tile, i) => (acc = tile === num ? i : acc));
};

const isValidMove = move =>
  +move === 1 || +move === 2 || +move === 3 || +move === 4;

const getNum = dir => (dir === 1 ? -1 : dir === 2 ? 7 : dir === 3 ? -7 : 1);

const isTileOpen = dir => {
  let num = getNum(dir);
  return tiles[get('puppy') + num] !== 3;
};

const isTileHome = dir => get('puppy') + getNum(dir) === get('home');

const move = dir => {
  let pTile = getNum(dir) + get('puppy');
  tiles[get('puppy')] = 0;
  tiles[pTile] = 2;
};

const play = input => {
  if (input === 'quit') {
    return;
  }

  if (isValidMove(input)) {
    // input = 'ValidMove';
    // console.log(input);
    if (isTileOpen(+input)) {
      console.log('tileOpen');
      if (isTileHome(+input)) {
        stars += 1;
        won = true;
      }

      move(+input);
    }
  }

  // if (won) {
  //   input = getMsg();
  // }
  // console.log(input);
  play(
    prompt(`${getMsg()}
${getLives()} ${getStars()}
${render(tiles)}
${dirs} You entered: ${input}`)
  );
};

play(
  prompt(`${getMsg()}
${getLives()} ${getStars()}
${render(tiles)}
${dirs}`)
);

// let player = {
//   charm: 1,
//   power: 1,
//   skill: 1,
//   coins: 0,
// };
// let scene = `🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲1
// 🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲2
// 🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲3
// 🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲4
// 🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲5
// 🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲6
// 🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲7
// 🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲8`;
