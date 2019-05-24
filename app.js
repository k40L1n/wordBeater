window.addEventListener("load", init);

// Globals

// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
};

// To Change levels
const currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;

// Elements

const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Words

const words = [
  "tasty",
  "voter",
  "mine",
  "destruction",
  "calendar",
  "abundant",
  "apathy",
  "process",
  "burial",
  "soil",
  "frog",
  "racism",
  "trend",
  "ritual",
  "secular",
  "suppress",
  "auditor",
  "blue",
  "trip",
  "seasonal",
  "minimum",
  "alcohol",
  "creep",
  "station",
  "fear",
  "pig",
  "sandwich",
  "thumb",
  "shame",
  "surprise",
  "liberal",
  "declaration",
  "locate",
  "tool",
  "mask",
  "shallow",
  "horn",
  "sphere",
  "past",
  "risk"
];

// Initialize game

function init() {
  // load word from array
  showWord(words);
  // Start matchin on word input
  wordInput.addEventListener("input", startMatch);

  // call countdown every sec
  setInterval(countDown, 1000);
  // check game status
  setInterval(checkStatus, 50);
}

function showWord(words) {
  // generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
}

// countdown timer
function countDown() {
  // make sure time is run out
  if (time > 0) {
    //decrement
    time--;
  } else if (time === 0) {
    // game is over
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}
// Start Match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = "";
    score++;
  }
  if (score === -1) {
    scoreDisplay.innerHTMl = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match the current word to the current input
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "correct!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}
// check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = "Game Over !!";
    score = -1;
  }
}
