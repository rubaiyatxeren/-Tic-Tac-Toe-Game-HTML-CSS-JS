// Collection DOM Elements
const gameInfo = document.querySelector(".game-info");
const boxes = document.querySelectorAll(".box");
const newGameBtn = document.querySelector(".btn");

// Difine Game Variables
let currentPlayer;
let gameGrid;
const winningPositions = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6], // Diagonal top-right to bottom-left
];

// initGame() -> Current Player -> Empty Game Grid -> Reset ui for boxes -> Reset game controls

function initGame() {
  currentPlayer = "X";

  gameGrid = ["", "", "", "", "", "", "", "", ""];

  boxes.forEach((box, index) => {
    box.innerText = "";
    box.style.pointerEvents = "all";
    box.classList.remove("win");
  });

  newGameBtn.classList.remove("active"); // Hide new game button
  gameInfo.innerText = `Current Player - ${currentPlayer}`; // Update display
  console.log(`Current Player - ${currentPlayer}`);
}

function handleClick(index) {
  if (gameGrid[index] === "") {
    boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;
    boxes[index].style.pointerEvents = "none";

    swapTurn();

    checkGameOver();
  }
}

function swapTurn() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
  for (let position of winningPositions) {
    const [a, b, c] = position;
    console.log(position);
    if (
      gameGrid[a] !== "" &&
      gameGrid[a] === gameGrid[b] &&
      gameGrid[a] === gameGrid[c]
    ) {
      console.log(gameGrid[a]);
      boxes[a].classList.add("win");
      boxes[b].classList.add("win");
      boxes[c].classList.add("win");

      boxes.forEach((box) => (box.style.pointerEvents = "none"));

      gameInfo.innerText = `Winner - Player ${gameGrid[a]}`;
      newGameBtn.classList.add("active");
      return true;
    }
  }

  const isTied = gameGrid.every((cell) => cell !== "");
  if (isTied) {
    gameInfo.innerText = `Game has been tied!`;
    newButtonShow();
    return true;
  }
  return false;
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => handleClick(index));
});

newGameBtn.addEventListener("click", initGame);

initGame();

