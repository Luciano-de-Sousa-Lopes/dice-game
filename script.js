'use strict';

function resetCurrentScore(player) {
  document.querySelector(player).textContent = 0;
}

function switchPlayer() {
  const players = document.querySelectorAll('.player');

  // for (let i = 0; i < players.length; i++) {
  //   if (players[i].classList.contains('player--active')) {
  //     resetCurrentScore('#current--' + i);
  //     players[i].classList.remove('player--active');
  //     players[i + 1].classList.add('player--active');
  //   } else {
  //     resetCurrentScore('#current--' + i);
  //     players[i].classList.remove('player--active');
  //     players[i - 1].classList.add('player--active');
  //   }
  // }

  if (players[0].classList.contains('player--active')) {
    players[0].classList.remove('player--active');
    players[1].classList.add('player--active');
    resetCurrentScore('#current--0');
  } else {
    players[1].classList.remove('player--active');
    players[0].classList.add('player--active');
    resetCurrentScore('#current--1');
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

function checkIfPlayerWon(player, playerScore) {
  const score = Number(document.querySelector(playerScore).textContent);
  if (score >= 10) {
    document.querySelector(player).classList.add('player--winner');
    return true;
  }
  return false;
}

document.querySelector('.btn--roll').addEventListener('click', function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.dice').src = 'dice-' + diceNumber + '.png';

  if (diceNumber === 1) {
    switchPlayer();
  } else {
    addDiceNumber(diceNumber);
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  const players = document.querySelectorAll('.player');
  for (let i = 0; i < players.length; i++) {
    if (players[i].classList.contains('player--active')) {
      const score = Number(document.querySelector('#score--' + i).textContent);
      const currentScore = Number(
        document.querySelector('#current--' + i).textContent
      );
      document.querySelector('#score--' + i).textContent = score + currentScore;
      if (!checkIfPlayerWon('.player--' + i, '#score--' + i)) {
        switchPlayer();
      }
      break;
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  console.log(`Reset the game!!!`);
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');
});
