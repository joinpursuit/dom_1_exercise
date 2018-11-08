// Take the user on a short text adventure of your own composition. Use `window.alert()` to describe to them a situation,
 // and `window.prompt()` to collect input from them to see what they will do. For example:
//
// - Window: `What direction do you travel in? (N, S, E, W)`
// - User: `N`
// - Window: `You see a babbling brook.`

let a = window.prompt("What direction do you travel in? (N, S, E, W)")
let answer = a.toUpperCase()

if (answer === "N") {
  window.alert("You see a beautiful lake")
} else if (answer === "S") {
  window.alert("You see a rain forest")
} else if (answer === "E") {
  window.alert("You see the city")
} else if (answer === "W"){
  window.alert("You see Pursuit")
} else {
  window.alert("Open your eyes silly!")
}
