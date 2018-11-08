//TODO: build @least 1 stage a day!
let star = `⭐`;
let stars = 0;
let hearts = ['💔', '💛', '💚', '💖'];
let pups = ['☠', '💀', '🐶', '🐶'];
let hp = 3;
let won = false;
let welcome = `Puppy Come Home!`;
let winner = `Welcome Home Puppy!! You earned a ${star}!`;
// const getLives = () => {
//   let str = '';
//   for (let i = 0; i < hp; i++) {
//     str += life;
//   }
//
//   return str;
// };

const getLives = () => `${pups[hp]}${hearts[hp]}`;
const getStars = () => `  ${star} x${stars}`;
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

// TODO: hearts = number of moves allowed?
//ex: 1 heart = x_colors = 3+? moves etc
//OR -> heart(s) = armor etc allowed PER
//stage|map|scene etc iow can risk hp for rewards etc
//baddies= stationary, LR1+, UD1+, Diag1+ etc
//&& each with a 1x only version etc
//each take a different amount of hp
//each have various spds iow will 'patrol' and then stay stationaryfor a count_num etc and then reverse etc
//circle & zigzag & jump rng patterns etc
//bombs, fire, rain, etc
//tiles that teleport, jump, freeze for count_ etc
//powerups, boosts, etc
//perhaps that can be purchased with stars?
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
