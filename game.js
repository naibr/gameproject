const grid = document.querySelectorAll(".letter__grid");
const letter = document.getElementById("bt1");
const letters = document.querySelectorAll(".button_letter");
const submit = document.getElementById("button_enter");
const refresh = document.querySelector("#refresh");
const winMessage = document.querySelector(".body__h2");
console.log(grid);

let total = 0;
let rowTotal = 1;
let count = 0;

const row1 = [];
const row2 = [];
const row3 = [];
const row4 = [];
const row5 = [];
const row6 = [];
const ans = [
  ["F", "R", "O", "S", "T"],
  ["T", "A", "X", "E", "S"],
  ["R", "A", "I", "S", "E"],
  ["C", "R", "A", "Z", "E"],
  ["R", "I", "G", "H", "T"],
];

const correctAnswer = ans[Math.floor(Math.random() * ans.length)];
console.log(correctAnswer);

grid.forEach((grid) => (grid.style.backgroundColor = ""));

// Buttons
letters.forEach((letter) => {
  letter.addEventListener("click", (event) => {
    for (let i = total; i <= 29; i++) {
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
        }
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

const checkAnswer = (row, num) => {
  const wordArr = [...correctAnswer];
    for (let i = 0; i < row.length; i++) {
        if (row.toString() == wordArr.toString()) {
            winMessage.style.display = "block";
        }
        if (wordArr.indexOf(row[i]) === row.indexOf(row[i])) {
            grid[i + count].style.backgroundColor = "green";
            wordArr.splice(i, 1);
        } else if (
            wordArr.includes(row[i]) &&
            wordArr.indexOf(row[i]) !== row.indexOf(row[i])) {
                grid[i + count].style.backgroundColor = "yellow";
                wordArr.splice(i, 1);
                console.log("includes letter");
        } else {
            grid[i + count].style.backgroundColor = "grey";
            console.log("doesn't include letter");
        }
    }
    count += 5;
};

// Submit Answer
submit.addEventListener("click", (event) => {
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

refresh.addEventListener("click", () => {
  document.location.reload();
});
