let num = window.prompt("Give me a number!")

if (num * 2 !== num * 2) {
    window.alert("Please enter a valid Number!")
} else if (num % 2 !== 0) {
    window.alert("This number is odd!")
} else if (num % 2 === 0){
    window.alert("This number is even!")
}