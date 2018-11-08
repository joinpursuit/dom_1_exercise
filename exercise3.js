// ## Exercise 3: Text Adventure
let start = prompt("Are you ready for a new adventure?");
  if(start === "no"){
    alert("We will waiting for you, see you next time.");
  }else{
    let welcoming = alert("Cool, adventure begins");
  };

  let weather = window.alert("The weather today is aligned opposite of your desire, is raining so badly");
  let toUse = window.prompt("What can you use to avoid getting wet? (umbrella, uber, wait)");

  if(toUse === "umbrella"){
    let uReality = alert("You turn around you, is look like that you are alone >_<' ");
    let creativity = prompt("You're inside of Pursuit building, where it might be the " + toUse + "?");
    let ending = alert("You find it in the " + creativity + "!, now you finally can go to your sweet home~");
  }else if(toUse === "uber"){
    let bReality = alert("Ohh, but it turn out that it is very pricey");
    let creativityB = prompt("Even so you would take the uber or you would like ask for a free drive? (uber, free)");
      if(creativityB === "uber"){
        let uber = alert("Great, a uber is waiting for you. You will be home soon.");
      }else if(creativityB === "free"){
       let free = alert("You are lucky, your friend come up to you and offer to take your home.");
      }else{
        alert("Life has unlimited options but here there is none!");
      }
  }else if(toUse === "wait"){
    let wReality = alert("You are smart person, but you fear to be a skeletor for waiting too much");
    let waiting = prompt("What will you do? (nap, call)");
      if(waiting === "nap"){
        alert("Your are like a Sleeping Beauty, you dont miss an opportunity to sleep.");
      }
      else if(waiting === "call"){
        alert("Somebody answers your call. Fantasty, your friend said he will be here soon.");
  }
}
  alert("Was a nice adventure!");
