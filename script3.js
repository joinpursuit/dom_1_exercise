const circleOfFifths = (userInput) => {
  let root = userInput.charAt(0).toLowerCase();
  if (userInput.charAt(1) === '#') {
    root += 's';
  }
  let numAcc = {
    'c':0,
    'g':1,
    'd':2,
    'a':3,
    'e':4,
    'b':5,
    'fs':6,
    'cs':7,
    'gs':8,
    'ds':9,
    'as':10
  }
  let notes = ['C','D','E','F','G','A','B'];
  let j = 0;
  for (let i = 0; i<numAcc[root]; i++) {
    if (j >= notes.length-3) {
     j -= notes.length;
    }
    notes[j+3] = notes[j+3]+"#";
    j += 4;
  }
  let k = notes.indexOf(userInput.toUpperCase());
  let scale = notes.map(note => {
    let output = [];
    if (k >= notes.length) {
      k -= notes.length;
    }
    output.push(notes[k]);
    k++;
    return output;
  });

  return `\n🎺🎺🎺 ${userInput.toUpperCase()} major scale: ${scale.join(', ')}\n
  Available Pentatonic Scales: ${scale[1]} minor, ${scale[2]} minor, ${scale[5]} minor\n`;
}

const circleOfFourths = (userInput) => {
  let root = userInput.toLowerCase();
  let numAcc = {
    'c':0,
    'f':1,
    'bb':2,
    'eb':3,
    'ab':4,
    'db':5,
    'gb':6,
    'cb':7,
    'fb':8
  }
  let notes = ['C','D','E','F','G','A','B'];
  let j = 0;
  for (let i = 0; i<numAcc[root]; i++) {
    if (j >= notes.length-6) {
     j -= notes.length;
    }
    notes[j+6] = notes[j+6]+"b";
    j += 3;
  }
  let k = notes.indexOf(userInput.charAt(0).toUpperCase()+userInput.charAt(1));
  let scale = notes.map(note => {
    let output = [];
    if (k >= notes.length) {
      k -= notes.length;
    }
    output.push(notes[k]);
    k++;
    return output;
  });

  return `\n🎺🎺🎺 ${userInput.charAt(0).toUpperCase()+userInput.charAt(1)} major scale: ${scale.join(', ')}\n
  Available Pentatonic Scales: ${scale[1]} minor, ${scale[2]} minor, ${scale[5]} minor\n`;
}

let fifths = {
  'c':0,
  'g':1,
  'd':2,
  'a':3,
  'e':4,
  'b':5,
  'f#':6,
  'c#':7,
  'g#':8,
  'd#':9,
  'a#':10
}
let fourths = {
  'c':0,
  'f':1,
  'bb':2,
  'eb':3,
  'ab':4,
  'db':5,
  'gb':6,
  'cb':7,
  'fb':8
}


const buildScale = () => {
  const userInput = window.prompt(`Input the root of a major scale. A-G letter, plus optional accidental #/b (ex. Ab, or F#): `);
  if (Object.keys(fifths).includes(userInput.toLowerCase())) {
    return window.alert("CONGRATULATIONS! YOU GOT THE BEST SCALE: \n"+circleOfFifths(userInput));
  } else if (Object.keys(fourths).includes(userInput.toLowerCase())) {
    return window.alert("CONGRATULATIONS! YOU GOT THE BEST SCALE: \n"+circleOfFourths(userInput));
  } else {
     setTimeout(buildScale,1000);
     return window.alert(`\n💥 '${userInput}' is an invalid input. Press OK to try again in a second.💥\n`)
  }
}


let input = window.prompt("You are about to enter the land of Major Keys and Pentatonics. Do you choose the red pill, or the blue pill?").toLowerCase();

const pills = () => {
  if (input === "blue pill") {
    window.alert("Blue is the right choice. You are about to build a Major key. How friggin' exciting, I just cannot help it.");
    buildScale();
  }

  while (input === "red pill") {
    let options = {
      0:"is the worst",
      1:"sucks",
      2:"is terrible",
      3:"is really bad for you",
      4:"is crap"
    }
    let randomNum = Math.floor(Math.random()*5);
    input = window.prompt(`Red pill ${options[randomNum]}. It doesn't do anything and you can not enter the land of major keys. Bye, or Try again:`).toLowerCase();
    pills();
  }

  while (input !== "red pill" && input !== "blue pill") {
    input = window.prompt(`Your input is invalid. Type in the pill you choose. It's "Red Pill", or "Blue Pill". You can do this:`).toLowerCase();
    pills();
  }
}

pills();
