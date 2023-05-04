function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

var randomNumber = generateRandomNumber();
var numberOfTries = 0; // Starter gettede ganger på 0

var guessField = document.getElementById("guessField");
var guessSubmit = document.getElementById("submitguess");
var iFeelLucky = document.getElementById("ifeel");

//kjekker om tallet er riktig
function checkGuess() {
  var guess = parseInt(guessField.value);
  if (guess === randomNumber) {
    numberOfTries++;
    let playAgain = confirm(
      `Congratulations! You found the number in ${numberOfTries} tries. Do you want to play again?`
    );
    if (playAgain) {
      //Starter spillet på nytt
      location.reload()
      randomNumber = generateRandomNumber();
      numberOfTries = 0;
    } else {
      //Lukker winduet
      window.close();
    }
  } else if (guess < randomNumber) {
    alert("Too low. Try again.");
    numberOfTries++;
  } else {
    alert("Too high. Try again.");
    numberOfTries++;
  }
  guessField.value = "";
}

function handleIFeelLucky() {

  var guess = Math.floor(Math.random() * 101);
  //Samme if() som i den over bare at den gjetter med ↖️ og ikke hva brukeren har inputtet
  if (guess === randomNumber) {
    numberOfTries++;
    let playAgain = confirm(
      `Congratulations! You found the number in ${numberOfTries} tries. Do you want to play again?`
    );
    if (playAgain) {
      location.reload()
      randomNumber = generateRandomNumber();
      numberOfTries = 0;
    } else {
      window.close();
    }
  } else if (guess < randomNumber) {
    alert("Too low. Try again.");
    numberOfTries++;
  } else {
    alert("Too high. Try again.");
    numberOfTries++;
  }
  guessField.value = "";
}


//Sånn at knappene funker og blir registrert
guessSubmit.addEventListener("click", checkGuess);
iFeelLucky.addEventListener("click", handleIFeelLucky);
