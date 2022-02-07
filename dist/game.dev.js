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
var ans = [["F", "R", "O", "S", "T"], ["T", "A", "X", "E", "S"], ["E", "N", "Z", "Y", "M"], ["R", "A", "I", "S", "E"], ["C", "R", "A", "Z", "E"], ["R", "I", "G", "H", "T"]];
var correctAnswer = ans[Math.floor(Math.random() * ans.length)];
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
  for (var i = 0; i < row.length; i++) {
    if (row.toString() == correctAnswer.toString()) {
      winMessage.style.display = "block";
    }

    if (correctAnswer.indexOf(row[i]) === row.indexOf(row[i])) {
      grid[i + count].style.backgroundColor = "green";
    } else if (correctAnswer.includes(row[i]) && correctAnswer.indexOf(row[i]) !== row.indexOf(row[i])) {
      grid[i + count].style.backgroundColor = "yellow";
      console.log("includes letter"); // if (correctAnswer.includes(row[i]) && row.includes(row.slice(0, row.indexOf(row[i]-1))[i]) ) {
      //     grid[i+count].style.backgroundColor = "transparent"
      //     console.log(grid[i + count])
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
}); // for (let i=0; i<row1.length; i++) {
//     for (let j=0; j<correctAnswer.length; j++) {
//         if (row1[i] === correctAnswer[j]) {
//             // grid[i].style.backgroundColor = "green"
//             console.log("right letter")
//         } else {
//             console.log("wrong letter")
//         }    
//     }
// }
// for (let i=0; i<correctAnswer; i++)
//     if (correctAnswer[i] = row1[i]) {
//     //         console.log("right letter and order")
//     //     }
//     }
// })