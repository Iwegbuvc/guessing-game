let isGame = true;
const randomNumber =  Math.floor((Math.random() * 100) + 1);
let userName;

userName = prompt("Welcome to the guessing game, \nWhat is your name?")


const level = parseInt(prompt("Enter your level\n1 = Begginer\n2 = Intermediate\n3 = Advanced"))

function calcLive() {
    return level == 1 ? 5
      : level == 2 ? 3
      : level == 3 ? 2
      : 5;
  }
  
let live = calcLive()
console.log(`You have ${live} lives`);

//console.log(randomNumber);

while (isGame & live > 0){
    const userGuess = parseInt(prompt("Enter a number between 1 and 100"))

    console.log(userGuess);

    if (userGuess === randomNumber){
        console.log(`You guessed the number right, You are doing good, ${userName}`)
        break;
        
    } else if (userGuess > randomNumber){
        console.log(`Come on ${userName} You guessed too high, try again`)
    } else if (userGuess < randomNumber){
        console.log( `Opp!! ${userName} You guessed too low try again!`)
    }
    
    live--
    console.log(`You have ${live} lives left, ${userName}`)

}


