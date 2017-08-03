var correctAnswers = 0;
alert('You are in for a treat, we are going to talk all about MEEEEE!');
var userName = prompt('What is your name, friend?');

function askTravel() {
  var travel = prompt('Do you think that I like to travel?').toLowerCase();
  console.log (userName + ' picked ' + travel + ' for the travel question ');
  if (travel === 'yes' || travel === 'y') {
    alert('How did you know? Traveling is the best!');
    correctAnswers += 1;
    console.log(correctAnswers);
  }
  else {
    alert('Wrong. I love traveling.');
  }
};
askTravel();

function askVirgin() {
  var virginIslands = prompt( 'Have I ever been to the Virgin Islands?').toLowerCase();
  console.log(userName + ' picked ' + virginIslands + ' for the virgin islands question.');
  if (virginIslands === 'yes' | virginIslands === 'y') {
    alert('Haha, no way! What do I look like? A millionaire?? I\'ve been to Big Corn Island in Nicaragua though.');
  }
  else {
    alert( 'Good one! I haven\'t been there, but hopefully one day I will visit!');
    correctAnswers += 1;
    console.log(correctAnswers);
  }
};
askVirgin();

function askChocolate() {
  var chocolate = prompt( 'Do I like chocolate? Please answer yes or no' ).toLowerCase();
  console.log(userName + ' picked ' + chocolate + ' for the chocolate question.');
  if (chocolate === 'yes' | chocolate === 'y') {
    alert('Very good. Of course I like chocolate!');
    correctAnswers += 1;
    console.log(correctAnswers);
  }
  else {
    alert('What? seriously?! Why on earth would I not like chocolate?!');
  };
}
askChocolate();

function askCode() {
  var code = prompt( 'Do I like to code?').toLowerCase();
  console.log(userName + ' picked ' + code + ' for the code question.');
  if (code === 'yes' | code === 'y' ) {
    alert('Well, that one was easy, why else would I be making this?');
    correctAnswers += 1;
    console.log(correctAnswers);
  }
  else {
    alert('Whaaaa? Of course I like to code! I want to build things and have zero physical co-ordination.');
  }
}
askCode();

function askBooze() {
  var booze = prompt( 'Do I not like beer?').toLowerCase();
  console.log(userName + ' picked ' + booze + ' for the beer question.');
  if (booze === 'yes' | booze === 'y') {
    alert('Not like beer? How absurd. If class is over, I am probably having one now!');
  }
  else {
    alert('Didn\'t fall for my trick huh? No, I don\'t not like beer- I LOVE it. In fact, I\'m going to have one now!');
    correctAnswers += 1;
    console.log(correctAnswers);
  }
}
askBooze();

var response = prompt('Please, using the most elaborate language you posses, describe to me in detail the pleasure that you derived from this quiz');
console.log('The user said' + response);
var snarkyRetort = response.substring(0, 16);
alert('Okay..Honestly, I was just being polite-   "' + snarkyRetort + '"   would have sufficed!' );

for (var i = 0; i <= 4; i++) {
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
  userGuess = prompt( 'Can you guess a state I have visited besides Oregon?').toLowerCase();
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
  };
};

alert('Congratulations you got ' + parseInt(correctAnswers) + ' out of 7 questions correct ' + userName + ' !');
//comment change