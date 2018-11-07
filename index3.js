// Exercise 3: Text Adventure
// Take the user on a short text adventure of your own composition. Use window.alert() to describe to them a situation, and window.prompt() to collect input from them to see what they will do. For example:
//
// Window: What direction do you travel in? (N, S, E, W)
// User: N
// Window: You see a babbling brook.

 window.alert("Welcome to the JojoExpress")

 let input = window.prompt("Which direction would you like to travel to? Select N, S, E, or W")
 input = input.toLowerCase()

 if(input === 'n'){
   alert("Bienvenue à Montréal, Canada! Nous esperons que vous aimez votre sejour!");
 }else if(input === 's'){
   alert("Bienvenido a Cancun, Mexico! Disfruta de nuestras hermosas playas!");
 }else if(input === 'e'){
   alert("Merhbe a Dakar, Senegal! Wer gu yaram!")
 }else if(input === 'w'){
   alert("Welcome to Honolulu, Hawaii! Loaʻa kā mākou lua pele!")
 }else{
   alert("Please choose N, S, E or W")
 }
