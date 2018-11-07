let input = window.prompt("What direction do you travel in? (N, S, E, W)")
if(input === "N"){
  window.prompt("You will see a crooked old tree.")
} else if(input === "S"){
  window.alert("You will meet a dirty-looking beggar. Give him a coin and he will guide you to the unicorn.")
} else if(input === "W"){
  window.alert("You will see a sleeping dragon.");
} else if(input === "E"){
  window.alert("RUN FOR YOUR LIFE! Where? Mexico!!")
} else {
  window.alert("Please enter either N or S or E or W")
}
