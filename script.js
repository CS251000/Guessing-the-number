'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = 'correct number 🥳';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').textContent = secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high think lower..';
    } else {
      document.querySelector('.message').textContent = 'loser haha 😂😂';
      document.querySelector('.score').textContent = 0;
    }

    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low think higher..';
    } else {
      document.querySelector('.message').textContent = 'loser haha 😂😂';
      document.querySelector('.score').textContent = 0;
    }

    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '1 0rem';
});
