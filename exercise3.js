// Take the user on a short text adventure of your own composition. Use window.alert() to describe to them a situation, and window.prompt() to collect input from them to see what they will do. For example:
//
// Window: What direction do you travel in? (N, S, E, W)
// User: N
// Window: You see a babbling brook.
window.alert("Welcome to the 4-ball game!")
let input = window.prompt("What are you doing this weekend? Enter 1 for going out to socialize. Enter 2 for staying in to relax or sleep. Enter 3 studying. Enter 4 for if you aren't sure")
console.log(typeof input)
if(input === "1"){
  window.alert("It's a long journey to the end, my friend. Going at it alone may not be the best process.")
} else if(input === "3"){
  window.alert("Hey, some of us are naturally gifted at things without even trying...then there are the one's that need to put in the time...log-story-short: Study!")
} else if( input === "2"){
  window.alert("Who needs sleep?  We will sleep when we are dead, right?  Wrong!!!  You, my friend, new sleep.  Enough of it for that matter.")
} else if ( input === "4"){
  window.alert("A flexable schedule can open the door for a golden opportunity.  Keep your head on a swivel")
} else {
  window.alert("Invalid Entry!  Please refresh the page to play again")
}
