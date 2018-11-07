let alert = window.alert("A wild Corey appears...!");
let prompt = window.prompt("What do you do...?! \nUse Pokeball (P), snap a picture (S), or run away (R).");

if (prompt.toUpperCase() === 'P') {
  window.alert('... \n... \n...\n \nYou have caught Corey...!');
} else if (prompt.toUpperCase() === 'S') {
  window.alert('You take out your camera and snap a picture of Corey...\nTime to sell it on Ebay!\nGood luck selling it though :P')
} else if (prompt.toUpperCase() === 'R') {
  window.alert('You start to run away... but you turn around and see Corey furiously sprinting after you...! \n*BAM* \n*POW* \n*KABOOM* \nYou have been beaten up by Corey.')
} else {
  window.alert('Please choose a valid input!')
}
