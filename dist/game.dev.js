"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
var refresh = document.querySelector("#refresh");
var winMessage = document.querySelector(".body__h2");
console.log(grid);
var total = 0;
var rowTotal = 1;
var count = 0;
var row1 = [];
var row2 = [];
var row3 = [];
var row4 = [];
var row5 = [];
var row6 = [];
var ans = [["F", "R", "O", "S", "T"], ["T", "A", "X", "E", "S"], ["R", "A", "I", "S", "E"], ["C", "R", "A", "Z", "E"], ["R", "I", "G", "H", "T"]];
var correctAnswer = ans[Math.floor(Math.random() * ans.length)];
console.log(correctAnswer);
grid.forEach(function (grid) {
  return grid.style.backgroundColor = "";
}); // Buttons

letters.forEach(function (letter) {
  letter.addEventListener("click", function (event) {
    for (var i = total; i <= 29; i++) {
      if (grid[i].innerHTML == "") {
        grid[i].innerHTML = letter.innerHTML;

        if (row1.length < 5) {
          row1.push(letter.innerHTML);
        } else if (row2.length < 5) {
          row2.push(letter.innerHTML);
        } else if (row3.length < 5) {
          row3.push(letter.innerHTML);
        } else if (row4.length < 5) {
          row4.push(letter.innerHTML);
        } else if (row5.length < 5) {
          row5.push(letter.innerHTML);
        } else if (row6.length < 5) {
          row6.push(letter.innerHTML);
        } // row1.push(letter.innerHTML)


        console.log(row1);
        console.log(row2);
        console.log(row3);
        console.log(row4);
        console.log(row5);
        console.log(row6);
        return;
      }
    }

    total += 5;
  });
});

var checkAnswer = function checkAnswer(row, num) {
  var wordArr = _toConsumableArray(correctAnswer);

  for (var i = 0; i < row.length; i++) {
    if (row.toString() == wordArr.toString()) {
      winMessage.style.display = "block";
    }

    if (wordArr.indexOf(row[i]) === row.indexOf(row[i])) {
      grid[i + count].style.backgroundColor = "green";
      wordArr.splice(i, 1);
    } else if (wordArr.includes(row[i]) && wordArr.indexOf(row[i]) !== row.indexOf(row[i])) {
      grid[i + count].style.backgroundColor = "yellow";
      wordArr.splice(i, 1);
      console.log("includes letter");
    } else {
      grid[i + count].style.backgroundColor = "grey";
      console.log("doesn't include letter");
    }
  }

  count += 5;
}; // Submit Answer


submit.addEventListener("click", function (event) {
  if (count == 0) {
    checkAnswer(row1, 0);
  } else if (count == 5) {
    checkAnswer(row2, 5);
  } else if (count == 10) {
    checkAnswer(row3, 10);
  } else if (count == 15) {
    checkAnswer(row4, 15);
  } else if (count == 20) {
    checkAnswer(row5, 20);
  } else if (count == 25) {
    checkAnswer(row6, 25);
  } else {
    alert("Game Over");
  }
});
refresh.addEventListener("click", function () {
  document.location.reload();
});