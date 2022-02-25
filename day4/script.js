const startScreen = document.querySelector('#start_screen');
const startButton = document.querySelector('#start_btn');

console.log(startScreen);
console.log(startButton);

const bugScreen = document.querySelector('#bug_screen');

const gameScreen = document.querySelector('.game-screen');
const gameOverScreen = document.querySelector('.game-over-screen');
const gameOverButton = document.querySelector('.game-over-button');
const score = document.querySelector('.score');
const time = document.querySelector('.time');
const timeLeft = document.querySelector('.time-left');
const timeBar = document.querySelector('.time-bar');

function listBugs() {
  console.log('listBugs');
  console.log(startScreen);
  startScreen.classList.add('up');
}

startButton.addEventListener('click', listBugs);
