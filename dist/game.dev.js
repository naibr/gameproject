"use strict";

// PSEUDOCODE
// Empty grid row - 5 letters
// Buttons that represent letters
// When a letters is pressed it inputs into the "current" grid box
// when enter is pressed checks if letters match order or "word"
// if letters dont match "word" - grey box
// if letters match "word" but not order - yellow box
// if letters match "word" and "word" order - green box
var grid = document.getElementsByClassName("letter__grid");
var button = document.getElementsByClassName("button_letter");
var submit = document.getElementsByClassName("button_enter");
button.forEach(function (button) {
  button.addEventListener("click", function (event) {
    grid.innerHTML += button.innerHTML;
  });
});