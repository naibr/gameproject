"use strict";

// PSEUDOCODE
// Empty grid row - 5 letters
// Buttons that represent letters
// When a letters is pressed it inputs into the "current" grid box
// when enter is pressed checks if letters match order or "word"
// if letters dont match "word" - grey box
// if letters match "word" but not order - yellow box
// if letters match "word" and "word" order - green box
var grid = document.querySelectorAll(".letter__grid");
var letter = document.getElementById("bt1");
var letters = document.querySelectorAll(".button_letter");
var submit = document.getElementById("button_enter");
var row1 = [];
var correctAnswer = ["R", "I", "G", "H", "T"];
letters.forEach(function (letter) {
  letter.addEventListener("click", function (event) {
    for (var i = 0; i <= 4; i++) {
      if (grid[i].innerHTML == "") {
        grid[i].innerHTML = letter.innerHTML;
        row1.push(letter.innerHTML);
        console.log(row1);
        return;
      }
    }
  });
});
console.log(grid);
submit.addEventListener("click", function (event) {
  for (var i = 0; i < row1; i++) {
    if (correctAnswer.includes(row1[i])) {
      console.log("right letter");
    } // for (let i=0; i<correctAnswer; i++)
    //     if (correctAnswer[i] = row1[i]) {
    //         console.log("right letter and order")
    //     }

  }
});