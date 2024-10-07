'use strict';

function switchPlayer() {
  const players = document.querySelectorAll('.player');

  if (players[0].classList.contains('player--active')) {
    players[0].classList.remove('player--active');
    players[1].classList.add('player--active');
  } else {
    players[1].classList.remove('player--active');
    players[0].classList.add('player--active');
  }
}

function addDiceNumber(diceNumber) {
  const players = document.querySelectorAll('.player');

  if (players[0].classList.contains('player--active')) {
    const currentScore = Number(
      document.querySelector('#current--0').textContent
    );
    document.querySelector('#current--0').textContent =
      currentScore + diceNumber;
  } else {
    const currentScore = Number(
      document.querySelector('#current--1').textContent
    );
    document.querySelector('#current--1').textContent =
      diceNumber + currentScore;
  }
}

document.addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.dice').src = 'dice-' + diceNumber + '.png';

  if (diceNumber === 1) {
    switchPlayer();
  } else {
    addDiceNumber(diceNumber);
  }
});
