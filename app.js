//use strict statement?

/* TODO
- Ask the user 5 y/n questions about me
-fix the input validation 
-style the page
*/
alert('You are in for a treat, we are going to talk all about MEEEEE!');
var userName = prompt('What is your name, friend?');

var chocolate = prompt( 'Do I like chocolate? Please answer yes or no' ).toLowerCase();
console.log(userName + ' picked ' + chocolate + ' for the chocolate question ');
if (chocolate === 'yes' | chocolate === 'y') {
  alert('Very good. Of course I like chocolate!');
}
else {
  alert('What? seriously?! Why on earth would I not like chocolate?!');
}

var travel = prompt( 'Do you think that I like to travel?').toLowerCase();
console.log(userName + ' picked ' + travel + ' for the travel question ');
if (travel === 'yes' | travel === 'y') {
  alert('How did you know? Traveling is the point of life in my opinion');
}
else {
  alert('Wrong. I love traveling.');
}

