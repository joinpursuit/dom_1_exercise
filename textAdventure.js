//TODO: build @least 1 stage a day!
//make it where fellows can easily add to the level design etc and create custom levels maps etc
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
//tiles that teleport, jump, freeze for count_ etc buttons switches activate traps open doors paths new baddies rewards etc
//unlock upgrade etc kitten come home too
//choose avatar: kitten or puupy?
//multiplayer: have to work together to get home? etc unlock doors flip switches push buttons block baddies etc
//bonus levels? fish in pond escape baddies etc
//perhaps that can be purchased with stars?
//spelunky like procedural map generation
//& items & basic abilities boosts powerups etc
//gow game mechanics game design challenges etc
//Emphasizers are enemies which emphasize a certain mechanic. They encourage players to use specific attacks or abilities against them to defeat them, yet at the same time it is still possible to take them out by regular means.
//Enforcers are enemies which force the player to use a specific mechanic to defeat them. This means the player can only defeat them using these specific mechanics, with the other mechanics having little or (more often) no effect.
//Smashers are enemies which can easily be defeated and allow the player to have fun smashing them up.
//Challengers are tougher enemies which are meant to challenge the player and test their skills.
//balance levels between survival | resource mgmt | melee battle|collectible game etc
//Kit N Cuddles
//Pup E Precious
//top down shovel night|spelunky rogue like but w/ hp etc
//baddie that doesnt move can block path and diff versions remove % hp etc
//perhaps changes color => spawns diff baddy after walked over etc
//areas|sides of weaknesses ex: LR hurt player but if atkd|walked over Top|btm hurts baddy etc
//alerts with tips: ex: puppyLR->baddy=skull, puppyUD^baddy=live etc
//some appear when activated:switch or player near etc
//perhaps touch some baddy and reset to start etc
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
