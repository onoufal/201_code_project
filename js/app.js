'use strict';

let userName = prompt('Hi, What is your name?')
let userDecision = prompt(`Welcome ${userName} to my guess me game, are you ready?`).toLowerCase()

switch (userDecision) {
  case 'yes':
  case 'y':
    alert('great! lets start then..')
    break
  case 'no':
  case 'n':
    alert('Goodbye then!')
    break
  default:
    alert('Invalid answer!')
}


if (userDecision === 'yes' || userDecision === 'y') {
  let myAge = prompt('I am I older than 30?').toLowerCase()
  switch (myAge) {
    case 'yes':
    case 'y':
      alert('You are right! 👏')
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
    break
  default:
    alert('Invalid answer! 😒')
}

let myPet = prompt('Am I a cat person?').toLowerCase()

switch (myPet) {
  case 'yes':
  case 'y':
    alert('You are right! 👏')
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
    break
  case 'no':
  case 'n':
    alert('Wrong! 😁')
    break
  default:
    alert('Invalid answer! 😒')
}

alert(`Good job ${userName}, here is a short bio of mine 😉`)