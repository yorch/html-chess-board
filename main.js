const setTitle = () => {
  const title = document.getElementsByTagName("title")[0].innerText;

  document.getElementsByTagName("h1")[0].textContent = title;

  return title;
};

// Creates a chess board with div's
const createBoard = (board) => {
  for (let i = 0; i < 8; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < 8; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.dataset.isSquare = true;
      square.dataset.row = i;
      square.dataset.col = j;
      square.dataset.selected = false;

      // Adding pieces
      if (i === 0 || i === 7) {
        if (j === 0 || j === 7) {
          square.dataset.piece = "rook";
        } else if (j === 1 || j === 6) {
          square.dataset.piece = "knight";
        } else if (j === 2 || j === 5) {
          square.dataset.piece = "bishop";
        } else if (j === 3) {
          square.dataset.piece = "queen";
        } else if (j === 4) {
          square.dataset.piece = "king";
        }
      } else if (i === 1 || i === 6) {
        square.dataset.piece = "pawn";
      }

      // Adding players
      if (i === 0 || i === 1) {
        square.dataset.player = "black";
      } else if (i === 7 || i === 6) {
        square.dataset.player = "white";
      }

      // Adding black and white definitions
      if ((i + j) % 2 === 0) {
        square.dataset.color = "white";
      } else {
        square.dataset.color = "black";
      }

      row.appendChild(square);
    }

    board.appendChild(row);
  }

  return board;
};

let selectedSquare = null;

const selectSquare = ({ target }) => {
  console.log("Click on board", target);

  if (target.dataset.isSquare) {
    if (selectedSquare === target) {
      target.dataset.selected = false;
      selectedSquare = null;
      console.log("Unselected", target);
    } else {
      if (selectedSquare) {
        selectedSquare.dataset.selected = false;
      }
      target.dataset.selected = true;
      selectedSquare = target;
      console.log("Selected", target);
    }
  }
};

const mainFn = () => {
  setTitle();

  const main = document.getElementById("main");
  const board = document.getElementById("board");

  createBoard(board);

  board.onclick = selectSquare;

  main.appendChild(board);
};

window.addEventListener("DOMContentLoaded", mainFn);
