//Game variables
let mysteryNumber = 50;
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

function clickHandler() {
  playGame();
}

function playGame() {
  console.log("function playGame start");

  guessesRemaining = guessesRemaining -1;
  guessesMade = guessesMade + 1;
  gameState = `Guess: ${guessesMade}, Remaining: ${guessesRemaining}`;
  playersGuess = parseInt(input.value);

  if(playersGuess > mysteryNumber) {
    output.innerHTML = "That's too high." + gameState;
    console.log("That's too high" + gameState); 
    //Check for the end of the game
    if (guessesRemaining < 1){
      endGame();
    }
  }
  else if (playersGuess < mysteryNumber) {
    output.innerHTML = "That's too low." + gameState;
    console.log("That' too low." + gameState);
    //Check for the end of the game
    if (guessesRemaining < 1){
      endGame();
    }
  }
  else if (playersGuess === mysteryNumber) {
    output.innerHTML = "You got it!";
    console.log("You Got it!");
    gameWon = true;
    endGame();
  }
}
