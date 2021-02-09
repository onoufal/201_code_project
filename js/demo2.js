'use strict';

// let userName = prompt('whats your name?');
// while (!userName) {
//   userName = prompt('please enter your name');
// }


// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   // if (i == 3) {
//   //   break;
//   // }
//   if (i == 2) {
//     continue; //skip the 2
//   }
// }

// // let car;
// // console.log(car)

// let i = 1;
// do {
//   console.log(i);
//   i++
// } while (i < 1)

// let grades = [50, 100, 89, 66, 22, 33, 100]
// console.log(grades)
// console.log(grades[0])
// grades.push(77)
// grades.pop()

// let index = grades.indexOf(89)
// console.log(index)

// let info = ['mohammad', 40, 'tall', true, ['walking', 'playing football', 'watching movies']];
// console.log(info[4][1]);

// console.log(typeof grades);

//////////////////////////////////////////////////

alert('welcome to my page');

let score = 0;

let userName = prompt('whats your name?');

while (!userName) {
  userName = prompt('please enter your name')
}

if (userName !== 'mohammed') {
  alert('too bad')
}

alert(`hello ${userName}, glad to have you here!`);

let answer = prompt('is my favorite food is pasta', 'answer with yes or no')

console.log(answer);

if (answer.toLowerCase() === 'yes') {
  alert('good job!');
  score++
} else {
  alert('no thats wrong')
}

console.log(score);

let food = ['mansaf', 'burger', 'steak', 'zait w zaatar'];

for (let i = 0; i < food.length; i++) {
  // let anotherFood = 'pizza';
  console.log(food[i]);
}

let question2 = prompt('do pigs fly').toLowerCase();

if (question2 === 'no' || question2 === 'n') {
  score++
} else {
  alert('wrong')
}

console.log(question2)

console.log(score)
alert('score is ' + score)
