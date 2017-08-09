//use strict statement?
function askQs (question, correctAnswer, posResponseMsg, negResponseMsg) {
  var input = prompt (question).toLowerCase();
  //console.log(input, correctAnswer.charAt(0) );
  if (input === correctAnswer || input === correctAnswer.charAt(0) ) {
    alert(posResponseMsg);
  }
  else {
    alert(negResponseMsg);
  }
}

var correctAnswers = 0;
alert('You are in for a treat, we are going to talk all about MEEEEE!');
var userName = prompt('What is your name, friend?');

askQs( 'Do you think that I like to travel?', 'yes', 'Great Job! You got it right!', 'Wrong. I love traveling' );
askQs( 'Have I ever been to the Virgin Islands?', 'no', 'Correct, I have never been there, maybe one day!', 'Haha, no way! What do I look like? A millionaire?? I\'ve been to Big Corn Island in Nicaragua though.' );
askQs( 'Do I like chocolate?', 'yes', 'Correct, I probably have eaten chocolate in the last hour', 'What? seriously?! Why on earth would I not like chocolate?!' );
askQs( 'Do I like to code?', 'yes', 'Well, that one was easy, why else would I be making this?', 'Whaaaa? Of course I like to code! I want to build things and have zero physical co-ordination.' );
askQs( 'Do I not like beer? ', 'yes', 'Didn\'t fall for my trick huh? No, I don\'t not like beer- I LOVE it. In fact, I\'m going to have one now!', 'Wrong. Beer is delicious');

for (var i = 0; i < 4; i++) {
  var yearsFrance = parseInt( prompt( 'How many years did I live in France?' ) );
  if ( yearsFrance === 5) {
    alert('Good job! You guessed the right number');
    correctAnswers += 1;
    console.log(correctAnswers);
    break;
  }
  else if ( yearsFrance <= 4 ) {
    alert( 'Oooohhh you guessed too low, try again. You have ' + (4 - i) + ' tries left');
  }
  else {
    alert( 'That\'s too high, try again. You have ' + (4 - i) + ' tries left.');
  }
}

for (var i = 0; i < 6; i++) {
  var potentialAnswers = [ 'florida', 'virginia', 'new York', 'ohio', 'texas' ];
  var userGuess = prompt( 'Can you guess a state I have visited besides Oregon?').toLowerCase();

  if (potentialAnswers.indexOf( userGuess ) === -1) {
    alert('Nope, I have never been there. You have ' + ( 5 - i) + ' tries left');
    if ( i === 5 ) {
      alert( 'All the potential answers are: Florida, Virginia, New York, Ohio, Texas');
    }
  }
  else {
    alert('Yes! Correct, I visited that place!');
    alert( 'All the potential answers are: Florida, Virginia, New York, Ohio, Texas');
    correctAnswers += 1;
    console.log(correctAnswers);
    break;
  }
}

alert('Congratulations you got ' + correctAnswers + ' out of 7 questions correct ' + userName + ' !');
