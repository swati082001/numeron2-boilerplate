// Iteration 8: Making scoreboard functional
let searchURL = new URLSearchParams(window.location.search);
console.log(searchURL);
let score = searchURL.get("score");

let scoreBoard = document.getElementById("score-board");

let playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) => {
  location.href = "./game.html";
};
