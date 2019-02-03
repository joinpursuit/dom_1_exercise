let name = window.prompt("What is your name?");
let age = window.prompt("Hi " + name + ", How old are you?");
if (age < 18) {
  window.alert("Please ask parental permission to play this game.⛔");
} else if (age > 18) {
  window.alert(
    "You're a " +
      age +
      " year old Full Stack developer, attending as a fellow at Pursuit."
  );
  window.alert("Congratulations!!😃");
  let door = window.prompt(
    "🏢Looks like the door is locked🔒, What would you like to do? Enter: 'k' - Use my keycard🔑, 'w' - Wait outside.😴"
  );
}
if ((door = "w")) {
  window.alert(
    "You pull out your keycard but it doesn't work.😟 You'll have to wait for someone to come by and unlock it for you.🕤"
  );
  window.alert(
    "👤Someone you've seen before in the flex space, but you've never met comes to the door.👫"
  );
  let thank1 = window.prompt(
    "They unlock the door and you follow after👣. Will you thank them? Or New-Yorker them?  Please Enter: 't' - Thank them! 😄  OR  'n' - New York, never thank.😠"
  );
  if (thank1 === "t") {
    window.alert("😃 You made a new friend today! 😃   YOU WON LIFE!  😃");
  } else {
    window.alert("😢 You lost out on a friend today! 😢Try again tomorrow!");
  }
} else {
  window.alert(
    "You pull out your keycard but it doesn't work.😟 You'll have to wait for someone to come by and unlock it for you.🕤"
  );
  window.alert(
    "👤Someone you've seen before in the flex space, but you've never met comes to the door.👫"
  );
  let thank2 = window.prompt(
    "They unlock the door and you follow after👣. Will you thank them? Or New-Yorker them?   Please  Enter: 't' - Thank them! 😄 OR  'n' - New York, never thank.😠"
  );
  if (thank2 === "t") {
    window.alert("😃 You made a new friend today! 😃   YOU WON LIFE!  😃");
  } else {
    window.alert("😢 You lost out on a friend today! 😢Try again tomorrow!");
  }
}
