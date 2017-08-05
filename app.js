//use strict statement?



alert('You are in for a treat, we are going to talk all about MEEEEE!');
var userName = prompt('What is your name, friend?');

<<<<<<< HEAD
function askQs (question, correctAnswer, posResponseMsg, negResponseMsg) {
  var input = prompt(question).toLowerCase();
  console.log(input, correctAnswer.charAt(0) );
  if (input === correctAnswer.charAt(0) ) {
    alert(posResponseMsg);
  }
  else {
    alert(negResponseMsg);
  }
}

askQs( 'Do you think that I like to travel?', 'yes', 'Great Job! You got it right!', 'Wrong. I love traveling' );
askQs( 'Have I ever been to the Virgin Islands?', 'no', 'Correct, I have never been there, maybe one day!', 'Haha, no way! What do I look like? A millionaire?? I\'ve been to Big Corn Island in Nicaragua though.' );
askQs( 'Do I like chocolate?', 'yes', 'Correct, I probably have eaten chocolate in the last hour', 'What? seriously?! Why on earth would I not like chocolate?!' );
askQs( 'Do I like to code?', 'yes', 'Well, that one was easy, why else would I be making this?', 'Whaaaa? Of course I like to code! I want to build things and have zero physical co-ordination.' );
askQs( ' ')

// function askTravel() {
//   var travel = prompt('Do you think that I like to travel?').toLowerCase();
//   console.log (userName + ' picked ' + travel + ' for the travel question ');
//   if (travel === 'yes' || travel === 'y') {
//     alert('How did you know? Traveling is the best!');
//     correctAnswers += 1;
//     console.log(correctAnswers);
//   }
//   else {
//     alert('Wrong. I love traveling.');
//   }
// };
// askTravel();

// function askVirgin() {
//   var virginIslands = prompt( 'Have I ever been to the Virgin Islands?').toLowerCase();
//   console.log(userName + ' picked ' + virginIslands + ' for the virgin islands question.');
//   if (virginIslands === 'yes' | virginIslands === 'y') {
//     alert('Haha, no way! What do I look like? A millionaire?? I\'ve been to Big Corn Island in Nicaragua though.');
//   }
//   else {
//     alert( 'Good one! I haven\'t been there, but hopefully one day I will visit!');
//     correctAnswers += 1;
//     console.log(correctAnswers);
//   }
// };
// askVirgin();

// function askChocolate() {
//   var chocolate = prompt( 'Do I like chocolate? Please answer yes or no' ).toLowerCase();
//   console.log(userName + ' picked ' + chocolate + ' for the chocolate question.');
//   if (chocolate === 'yes' | chocolate === 'y') {
//     alert('Very good. Of course I like chocolate!');
//     correctAnswers += 1;
//     console.log(correctAnswers);
//   }
//   else {
//     alert('What? seriously?! Why on earth would I not like chocolate?!');
//   };
// }
// askChocolate();

// function askCode() {
//   var code = prompt( 'Do I like to code?').toLowerCase();
//   console.log(userName + ' picked ' + code + ' for the code question.');
//   if (code === 'yes' | code === 'y' ) {
//     alert('Well, that one was easy, why else would I be making this?');
//     correctAnswers += 1;
//     console.log(correctAnswers);
//   }
//   else {
//     alert('Whaaaa? Of course I like to code! I want to build things and have zero physical co-ordination.');
//   }
// }
// askCode();
=======
var travel = prompt('Do you think that I like to travel?').toLowerCase();
console.log(userName + ' picked ' + travel + ' for the travel question ');
if (travel === 'yes' | travel === 'y') {
  alert('How did you know? Traveling is the point of life in my opinion.');
}
else {
  alert('Wrong. I love traveling.');
}

var virginIslands = prompt( 'Have I ever been to the Virgin Islands?').toLowerCase();
console.log(userName + ' picked ' + virginIslands + ' for the virgin islands question.');
if (virginIslands === 'yes' | virginIslands === 'y') {
  alert('Haha, no way! What do I look like? A millionaire?? I\'ve been to Big Corn Island in Nicaragua though.');
}
else {
  alert( 'Good one! I haven\'t been there, but hopefully one day I will visit!');
}

var chocolate = prompt( 'Do I like chocolate? Please answer yes or no' ).toLowerCase();
console.log(userName + ' picked ' + chocolate + ' for the chocolate question.');
if (chocolate === 'yes' | chocolate === 'y') {
  alert('Very good. Of course I like chocolate!');
}
else {
  alert('What? seriously?! Why on earth would I not like chocolate?!');
}

var code = prompt( 'Do I like to code?').toLowerCase();
console.log(userName + ' picked ' + code + ' for the code question.');
if (code === 'yes' | code === 'y' ) {
  alert('Well, that one was easy, why else would I be making this?');
}
else {
  alert('Whaaaa? Of course I like to code! I want to build things and have zero physical co-ordination.');
}
>>>>>>> 106fc31fe04a632be36a4169cccfea2dc2b6201a

var booze = prompt( 'Do I not like beer?').toLowerCase();
console.log(userName + ' picked ' + booze + ' for the beer question.');
if (booze === 'yes' | booze === 'y') {
  alert('Not like beer? How absurd. If class is over, I am probably having one now!');
}
else {
  alert('Didn\'t fall for my trick huh? No, I don\'t not like beer- I LOVE it. In fact, I\'m going to have one now!');
}

var response = prompt('Please, using the most elaborate language you posses, describe to me in detail the pleasure that you derived from this quiz');
console.log('Homey said' + response);
var snarkyRetort = response.substring(0, 16);
alert('Okay..Honestly, I was just being polite-   "' + snarkyRetort + '"   would have sufficed!' );
