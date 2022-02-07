# gameproject

For this project I attempted to create the popular internet game "Wordle" using
HTML, SCSS and Javascript.

The game requires the use of eventlisteners to input letters and the use of arrays.
The user has 6 chances to input letters to guess the word, represented by 6 arrays for each row.

The checkAnswer function checks the array for each row input and compares them 
to the correct answer using the .includes method and displays a background colour representing whether or not the correct letter has been entered.
If the letters and order of the letters are all correct the 


// PSEUDOCODE


// Empty grid row - 5 letters
// Buttons that represent letters
// When a letters is pressed it inputs into the "current" grid box
// when enter is pressed checks if letters match order or "word"
// if letters dont match "word" - grey box
// if letters match "word" but not order - yellow box
// if letters match "word" and "word" order - green box


check answer:
- the current row is an empty array 
- if current item is empty input letter on click, else input in next item
- when letter is pressed, push to row array
- repeat until array length is 5
- compare row array with word when enter is pressed