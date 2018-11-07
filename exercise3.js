let start = window.alert(
  "Hello adventurer, \n I need your help, it seems like thugs have stolen mah memeeess!"
);
let in2 = "";
let input = window.prompt("Will you help me recover the great memes of 2020?");
if (input === "yes") {
  alert("Thank u, kind sir");
  in2 = window.prompt(
    "You need to go south.(Press N,E,W,S to head a certain direction)"
  );
} else {
  alert("You son of a gun, you'll regret this!!!");
  start;
}
if (in2 === "S" || "s") {
  alert(
    "Narrator:...and that is  how the greatest adventure you will ever play started..."
  );
} else {
  alert("You silly jerkface, I SAID SOUTH!!");
}
