let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

let inputBox = document.querySelector(".inputBox");
let btn = document.querySelector(".btn");
let guessSpan = document.querySelector(".guessSpan");
let remainingSpan = document.querySelector(".remainingSpan");
let lowOrHigh = document.querySelector(".lowOrHigh");
let resultContainer = document.querySelector(".resultContainer");

let p = document.createElement("p");

let prevGuess = [];
let guessNum = 0;
let playGame = true;

if (playGame) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(inputBox.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    lowOrHigh.textContent = "Please enter a valid number.";
  } else if (guess < 1) {
    lowOrHigh.textContent = "Value must be greater then and equals to 1.";
  } else if (guess > 100) {
    lowOrHigh.textContent = "Value is in between 1 to 100.";
  } else {
    prevGuess.push(guess);
    if (guessNum === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(
      `Congratulations! You have guessed the correct number. Random Number was ${randomNumber}`
    );
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("Your guess is too high.");
  } else if (guess < randomNumber) {
    displayMessage("Your guess is too low.");
  }
}
function displayGuess(guess) {
  inputBox.value = "";
  guessSpan.textContent += `${guess} - `;
  guessNum++;
  remainingSpan.innerHTML = `${10 - guessNum}`;
}
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  inputBox.value = "";
  inputBox.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h1 id = "newGame">Start New Game</h2>`;
  resultContainer.appendChild(p);
  playGame = false;
  startGame();
}
function startGame() {}
