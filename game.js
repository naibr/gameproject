// PSEUDOCODE

// Empty grid row - 5 letters
// Buttons that represent letters
// When a letters is pressed it inputs into the "current" grid box
// when enter is pressed checks if letters match order or "word"
// if letters dont match "word" - grey box
// if letters match "word" but not order - yellow box
// if letters match "word" and "word" order - green box

const grid = document.getElementsByClassName("letter__grid");
const button = document.getElementsByClassName("button_letter");

const submit = document.getElementsByClassName("button_enter")

button.forEach(button => {
    button.addEventListener("click", (event) =>{
        grid.innerHTML += button.innerHTML;
    })
});