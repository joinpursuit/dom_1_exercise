let userInput = window.prompt("Which direction do you want to go? N,S,E,W")
if(userInput === "N" || userInput === "n"){
window.alert("you are in the safe zone and in front of a beautiful garden");
}else if(userInput === "S" || userInput === "s"){
  window.alert("you are in the danger zone, please tread lightly");
}else if(userInput === "E" || userInput === "e"){
  window.alert("you are in the clear, you are on your way home");
}else if(userInput === "W" || userInput === "w"){
  window.alert("safe choice")
}else if(userInput !== "N" || "S" ||"E"||"W"){
  window.alert("enter valid choice")
}
