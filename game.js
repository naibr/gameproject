// PSEUDOCODE

// Empty grid row - 5 letters
// Buttons that represent letters
// When a letters is pressed it inputs into the "current" grid box
// when enter is pressed checks if letters match order or "word"
// if letters dont match "word" - grey box
// if letters match "word" but not order - yellow box
// if letters match "word" and "word" order - green box

const grid = document.querySelectorAll(".letter__grid")
const letter = document.getElementById("bt1")
const letters = document.querySelectorAll(".button_letter")
const submit = document.getElementById("button_enter")

const row1 = [];
const correctAnswer = ["R", "I", "G", "H", "T"]

letters.forEach(letter => {
    letter.addEventListener("click", (event) => {
        for (let i=0; i<=4; i++) {
            if (grid[i].innerHTML == "") {
                grid[i].innerHTML = letter.innerHTML;
                row1.push(letter.innerHTML)
                console.log(row1)
                return
            }
        }
    })
})
console.log(grid)

submit.addEventListener("click", (event) => {
    for (let i=0; i<row1; i++) {
        if (correctAnswer.includes(row1[i])) {
            console.log("right letter")
        }
    // for (let i=0; i<correctAnswer; i++)
    //     if (correctAnswer[i] = row1[i]) {
    //         console.log("right letter and order")
    //     }
    }
})