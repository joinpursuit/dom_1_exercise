document.addEventListener("DOMContentLoaded", () => {
  let name = prompt("what is your name?")
  let key1 = prompt("what is your first key?")
  let key2 = prompt("what is your second key?")
  let key3 = prompt("what is your thrid key?")
  let key4 = prompt("what is your fourth key?")
  let key5 = prompt("what is your final key?")

  let head = document.querySelector("#header")
    head.innerText = name + " 's Major keys";
    let item1 = document.querySelector("#item1")
    key1 === key1.toUpperCase() ? item1.style["background-color"] = "red" : null
    item1.innerText = key1
    item1.style.backgroundColor = "red"
    let item2 = document.querySelector("#item2")
    key2 === key2.toUpperCase() ? item2.style["background-color"] = "blue" : null
    item2.innerText = key2;
    let item3 = document.querySelector("#item3")
    key3 === key3.toUpperCase() ? item3.style["background-color"] = "gray" : null
    item3.innerText = key3;
    let item4 = document.querySelector("#item4")
    key1 === key1.toUpperCase() ? item4.style["background-color"] = "red" : null
    item4.innerText = key4;
    let item5 = document.querySelector("#item5")
    key5 === key5.toUpperCase() ? item5.style["background-color"] = "orange" : null
    item5.innerText = key5;
})
