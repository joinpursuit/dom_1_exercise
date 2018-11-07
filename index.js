// QUESTION: 1

const repeatPrompt = (string, x) => {
  string = window.prompt(`Enter sum werds.`);
  x = window.prompt(`Now enter a number, scrub.`);

  if (isNaN(x)) {
    window.prompt(`Please enter a number, idiot...`);
  } else {
    for (let i = 1; i <= x; i++) {
      let repeat = window.alert(string);
    }
  }
  return repeat;
}

// repeatPrompt();


// QUESTION: 2

const oddOrEven = (num) => {
  num = window.prompt(`Enter a numbah.`);

  console.log(num % 2);

  if (num % 2) {
    return window.alert(`${num} is an odd number.`);
  }
  else if (num % 2 === 0) {
    return window.alert(`${num} is an even number.`);
  } else {
    if (isNaN(num)) {
      return window.alert(`That's not a number, bakayarou!`)
    }
  }
}

// oddOrEven();



// QUESTION: 3



// QUESTION: 4
