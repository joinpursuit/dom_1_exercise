let question = "What is your favorite card suit?\n\n\t diamonds (♦)\t clubs (♣)\t hearts (♥)\t spades (♠)";

let input = prompt(question);

while (input !== 'spades' && input !== 'spade') {

  if (input === 'diamonds' || input === 'diamond') {
    alert(`${input}... Are you sure?\nThink of your favorite favorite - your SUPER suit :)`);
    input = prompt(question);
  } else if (input === 'clubs' || input ===  'club') {
    alert(`${input}? Oh no...\n Please try again - this suit is not your actual favorite.`);
    input = prompt(question);
  } else if (input === 'hearts' || input ===  'heart') {
    alert(`Heartless ${input}... Keep trying now ;)`);
    input = prompt(question);
  } else {
    alert(`${input}... Not a suit :(.  Try again!`);
    input = prompt(question);
  }
}

alert("Great job! You picked correctly.\n\tSpade (♠)\nis your favorite suit ;)");
