let meowPut = window.prompt(
  `Greetings hooman! What direction would you like to travel in? Pick one of these four options :N, S, E, W`
);
if (meowPut === "N") {
  window.alert(
    "You will soon see the magical kitty 'Ruf'. Prepare for puuuuuuurs"
  );
} else if (meowPut === "S") {
  window.alert(
    "Loser, you should have went North! Welcome to dogland or whatever!"
  );
} else if (meowPut === "E") {
  window.alert(
    "Did you mean to come this way? Like are you sure? It sucks here."
  );
} else if (meowPut === "W") {
  window.alert("Okay, so North was the only good choice. Ugh... ");
} else if (
  meowPut !== "N" &&
  meowPut !== "S" &&
  meowPut !== "E" &&
  meowPut !== "W"
) {
  window.alert(" can you not read? pick one of the given choices!!!");
}
