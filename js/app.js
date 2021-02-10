'use strict';

let score = 0;

// first question
function questionOne() {
  let result = 0;
  let userName = prompt('Hi, What is your name?')
  let userDecision = prompt(`Welcome ${userName} to my guess me game, are you ready?`).toLowerCase()

  switch (userDecision) {
    case 'yes':
    case 'y':
      alert('great! lets start then..')
      result = 1;
      break
    case 'no':
    case 'n':
      alert('Goodbye then!')
      break
    default:
      alert('Invalid answer!')
  }
  return result;
}
score += questionOne();
alert(score);

/*if (userDecision === 'yes' || userDecision === 'y') {
  let myAge = prompt('I am I older than 30?').toLowerCase()
  switch (myAge) {
    case 'yes':
    case 'y':
      alert('You are right! 👏')
      score++
      break
    case 'no':
    case 'n':
      alert('Wrong! 😁')
      break
    default:
      alert('Invalid answer! 😒')
  }
} else {
  alert('Bye bye!')
}


let myStudy = prompt('Do I have an Engineering or a computer scince degree?').toLowerCase()

switch (myStudy) {
  case 'yes':
  case 'y':
    alert('Wrong! 😁')
    break
  case 'no':
  case 'n':
    alert('You are right! 👏')
    score++
    break
  default:
    alert('Invalid answer! 😒')
}

let myPet = prompt('Am I a cat person?').toLowerCase()

switch (myPet) {
  case 'yes':
  case 'y':
    alert('You are right! 👏')
    score++
    break
  case 'no':
  case 'n':
    alert('Wrong! 😁')
    break
  default:
    alert('Invalid answer! 😒')
}

let myGoal = prompt('Do I want to be a professional web/software developer?').toLowerCase()

switch (myGoal) {
  case 'yes':
  case 'y':
    alert('You are right! 👏')
    score++
    break
  case 'no':
  case 'n':
    alert('Wrong! 😁')
    break
  default:
    alert('Invalid answer! 😒')
}

let myDegree = prompt('Do I have an accounting degree?').toLowerCase()

switch (myDegree) {
  case 'yes':
  case 'y':
    alert('You are right! 👏')
    score++
    break
  case 'no':
  case 'n':
    alert('Wrong! 😁')
    break
  default:
    alert('Invalid answer! 😒')
}


let rightNumber = 8;

let guessNumber;

for (let i = 0; i < 4; i++) {
  guessNumber = Number(prompt('Guess the number!'))
  if (guessNumber === rightNumber) {
    alert('You are correct, the number is ' + rightNumber)
    score++
    break
  } else if (guessNumber > rightNumber) {
    alert('Your guess is too high!')
  } else {
    alert('Your guess is too low!')
  }
}

if (guessNumber != rightNumber) {
  alert('The Number is ' + rightNumber)
}

let myCars = ['mercedes', 'bmw', 'toyota', 'mazda'];
let correctly = false;
for (let i = 0; i < 6; i++) {
  let guessCar = prompt('guess the type of one of my cars!')
  for (let j = 0; j < myCars.length; j++) {
    console.log(j);
    if (guessCar === myCars[j]) {
      console.log('heloooooooo');
      alert('good job');
      score++
      correctly = true;
      break;
    }

  }
  if (correctly == true) {
    break // stop the 1st loop after the user guess correctly so the question doent prompy again
  } else if (correctly == false) {
    alert('Wrong answer!')
  }
}

*/



