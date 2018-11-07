let inputs = {
  name:window.prompt(`What's your name?`),
  1:window.prompt(`What's your first key? You can CAPITALIZE to mark your key`),
  2:window.prompt(`What's your second key?`),
  3:window.prompt(`What's your third key?`),
  4:window.prompt(`What's your fourth key?`),
  5:window.prompt(`What's your fifth key?`)
}

document.getElementById('header').innerText = `${inputs.name}'s Major Keys:`

function isCaps(str) {
  return (str.toUpperCase()===str&&isNaN(str));
}

for (let i = 1; i<=5; i++) {
  if (isCaps(inputs[i])) {
    document.getElementById(`item${i}`).innerHTML = `<mark>${inputs[i]}</mark>`
  } else {
  document.getElementById(`item${i}`).innerText = inputs[i];
  }
}
