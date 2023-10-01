let level;
// giving user chance to choose gameLevel
while (true) {
  level = parseInt(
    prompt(
      "Hi there welcome!\nChoose your level\n1=Beginner\n2=Intermediate\n3=Advance"
    )
  );
  if (isNaN(level) || level < 1 || level > 3) {
    alert("Wrong value\nPlease input correctly your level");
  } else {
    break;
  }
}

// Calculating users chances based on the level entered
function calculateLives() {
  if (level == 1) {
    return 5;
  } else if (level == 2) {
    return 3;
  } else if (level == 3) {
    return 1;
  }
  return 0;
}

let gameLives = calculateLives();

// generating random number
const randomNumber = Math.floor(Math.random() * 10 + 1);

// user guessing random number
let userGuess;
while (true && gameLives > 0) {
  // Use a while loop to ensure valid input
  while (true) {
    let userInput = prompt(
      `Guess a number between 1 to 10, You have ${gameLives} Chance/s`
    );
    if (userInput == null) {
      break;
    } else if (isNaN(userInput) || userInput < 1 || userInput > 10) {
      alert("Choose a valid number");
    } else {
      userGuess = parseInt(userInput);
      break;
    }
  }

  // logical checks
  if (userGuess == randomNumber) {
    alert("Congrats! You guess correctly");
    break;
  } else if (userGuess > randomNumber) {
    gameLives--;
    alert(
      `Opps!\n Your guess is too high, make another guess and you have ${gameLives} trial left`
    );
  } else if (userGuess < randomNumber) {
    gameLives--;
    alert(
      `Sorry your guess is low\n make another guess and you have ${gameLives} trial left`
    );
  } else if (userGuess == null) {
    break;
  }
}
