//Game variables
let mysteryNumber = Math.floor(Math.random() * 100);
console.log(mysteryNumber);
let playersGuess = 0;
let guessesRemaining = 10;
let guessesMade = 0;
let gameState = "";
let gameWon = false;

//The input and output fields
let input = document.querySelector('#input');
let output = document.querySelector('#output');

//The button
const button = document.querySelector('button');
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

//Listen for enter key presses
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event){
  if(event.keyCode === 13){
    validateInput();
  }
}

function clickHandler() {
  validateInput();
}

function validateInput() {
  playersGuess = parseInt(input.value);

  if(isNaN(playersGuess)){
    output.innerHTML = "Please enter a number.";
  }
  else {
    playGame();
  }
}

function playGame() {
  guessesRemaining = guessesRemaining -1;
  guessesMade = guessesMade + 1;
  gameState = `Guess: ${guessesMade}, Remaining: ${guessesRemaining}`;

  if(playersGuess > mysteryNumber) {
    output.innerHTML = "That's too high." + gameState; 
    //Check for the end of the game
    if (guessesRemaining < 1){
      endGame();
    }
  }
  else if (playersGuess < mysteryNumber) {
    output.innerHTML = "That's too low." + gameState;
    //Check for the end of the game
    if (guessesRemaining < 1){
      endGame();
    }
  }
  else if (playersGuess === mysteryNumber) {
    output.innerHTML = "You got it!";
    gameWon = true;
    endGame();
  }
}

function endGame() {
  if(gameWon) {
    output.innerHTML
    = `Yes, it's ${mysteryNumber}! <br> It only took you ${guessesMade} guesses.`
  }
  else {
    output.innerHTML
    = `No more guesses left! <br> The number was: ${mysteryNumber}.`
  }

  //Disable the button
  button.removeEventListener("click", clickHandler, false);

  //Disable the enter key
  window.removeEventListener("keydown", keydownHandler, false);

  //Disable the input field
  input.disables = true;
}