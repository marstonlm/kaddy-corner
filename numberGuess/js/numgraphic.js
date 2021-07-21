// Game Variables
let mysteryNumber = Math.floor(Math.random() * 100);
console.log(mysteryNumber);
let playerGuess = 0;
let guessesRemaining = 10;
let guessesMade = 0;
let gameState = "";
let gameWon = false;

//The input and output fields
const input = document.querySelector("#input");
const output = document.querySelector("#output");

//The button
const button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);

//Listen for enter key presses
window.addEventListener("keydown", keydownHandler, false);

function keydownHandler(event){
  if(event.keyCode === 13){
    validateInput();
  }
}


//The arrow
const arrow = document.querySelector("#arrow");

function render() {
  //Position the arrow
  /* ----- Multiply the players guess by 3 to get the correct pixel position on the scale ----- */
  arrow.style.left = playerGuess * 3 + "px";
}

function clickHandler() {
  validateInput();
}

function validateInput() {
  playerGuess = parseInt(input.value);

  if(isNaN(playerGuess)){
    output.innerHTML = "Please enter a number.";
  }
  else {
    playGame();
  }
}

function playGame(){
  guessesRemaining = guessesRemaining - 1;
  guessesMade = guessesMade + 1;
  gameState = "Guess: " +guessesMade + " , Remaining: " + guessesRemaining;

  //playerGuess = parseInt(input.value);

  if(playerGuess > mysteryNumber) {
    output.innerHTML = "That;s too high." + gameState;

    //Check for the end of the game
    if (guessesRemaining < 1) {
      endGame();
    }
  }
  else if (playerGuess < mysteryNumber) {
    output.innerHTML = "That's too low." + gameState;

    //Check for the end of the game
    if (guessesRemaining < 1) {
      endGame();
    }
  }
  else if(playerGuess === mysteryNumber) {
    gameWon = true;
    endGame();
  }

  //Update the graphic display
  render();
}

function endGame() {
  if (gameWon) {
    output.innerHTML = "Yes, it's " + mysteryNumber + "!" + "<br>" 
      + "It only took you " + guessesMade + " guesses.";
  }
  else {
    output.innerHTML = "No more guesses left!" + "<br>"
      + "The number was: " + mysteryNumber +".";
  }
}