// const play = arr => prompt(arr.join(''));
let life = `💚 `;
let lost = `💔`;
let star = `⭐`;
let lives = 3;
let stars = 0;
const getLives = () => {
  let str = '';
  for (let i = 0; i < lives; i++) {
    str += life;
  }

  return str;
};

const getStars = () => `${star} x${stars}`;

let gfx = [`⬜`, `🏡`, `🐶`, `🌳`, `🦖`];

const render = tiles =>
  tiles.map(tile => (typeof tile === 'number' ? gfx[tile] : tile)).join('');
let dirs = `1:⬇ 2:⬆  8:⬅  9:➡`;

let tiles = [
  3,
  3,
  3,
  3,
  3,
  3,
  `
`,
  3,
  0,
  0,
  0,
  1,
  3,
  // `   [ 1:⬇ ]`,
  `
`,
  3,
  0,
  0,
  0,
  0,
  3,
  // `   [2]⬆ `,
  `
`,
  3,
  0,
  0,
  0,
  0,
  3,
  // `   [8]⬅ `,
  `
`,
  3,
  2,
  0,
  0,
  0,
  3,
  // `   [9]➡ `,
  `
`,
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

// let home = () => tiles.reduce((acc, tile, i) => (acc = tile === 1 ? i : acc));
// let puppy = () => tiles.reduce((acc, tile, i) => (acc = tile === 2 ? i : acc));
const isValidMove = move =>
  +move === 1 || +move === 2 || +move === 8 || +move === 9;

const getNum = dir => (dir === 1 ? 7 : dir === 2 ? -7 : dir === 8 ? -1 : 1);

const isTileOpen = dir => {
  let num = getNum(dir);
  return tiles[get('puppy') + num] !== 3;
};

const isTileHome = dir => get('puppy') + getNum(dir) === get('home');

const move = dir => {
  let pTile = getNum(dir) + get('puppy');
  tiles[get('puppy')] = 0;
  tiles[pTile] = 2;

  // return tiles;
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
      }

      move(+input);
    }
  }

  // console.log(input);
  play(
    prompt(`Puppy Come Home!
${getLives()} ${getStars()}
${render(tiles)}
${dirs}`)
  );
};

play(
  prompt(`Puppy Come Home!
${getLives()} ${getStars()}
${render(tiles)}
${dirs}`)
);

// while (counter < 10) {
// play(render(tiles));
// counter++;
// }

// let player = {
//   charm: 1,
//   power: 1,
//   skill: 1,
//   coins: 0,
// };
// let dir = input => {
//   switch (true) {
//     case input === '1':
//       myPrompt(`${input} === down`);
//       break;
//     case input === '2':
//       myPrompt(`${input} === up`);
//       break;
//     case input === '8':
//       myPrompt(`${input} === left`);
//       break;
//     case input === '9':
//       myPrompt(`${input} === right`);
//       break;
//     default:
//       console.log('NA');
//   }
// };
//
// let prompted = ;
//
// const myPrompt = cb => prompt(cb);
//
// const myAlert = cb => alert(cb);
//
// // myPrompt(dir);
// prompted();
//
//
//
//
let scene = `🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲1
🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲2
🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲3
🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲4
🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲5
🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲6
🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲7
🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲8`;
