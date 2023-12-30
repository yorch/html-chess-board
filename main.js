const setTitle = () => {
  const title = document.getElementsByTagName("title")[0].innerText;

  document.getElementsByTagName("h1")[0].textContent = title;

  return title;
};

const createBoard = (board) => {
  const pawnIcon = "♙";
  const rookIcon = "♖";
  const knightIcon = "♘";
  const bishopIcon = "♗";
  const queenIcon = "♕";
  const kingIcon = "♔";

  // Creates a chess board with div's using flexbox
  for (let i = 0; i < 8; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < 8; j++) {
      const square = document.createElement("div");
      square.className = "square";
      square.dataset.isSquare = true;

      // Adding icons
      if (i === 0 || i === 7) {
        if (j === 0 || j === 7) {
          square.innerText = rookIcon;
          square.dataset.piece = "rook";
        } else if (j === 1 || j === 6) {
          square.innerText = knightIcon;
          square.dataset.piece = "knight";
        } else if (j === 2 || j === 5) {
          square.innerText = bishopIcon;
          square.dataset.piece = "bishop";
        } else if (j === 3) {
          square.innerText = queenIcon;
          square.dataset.piece = "queen";
        } else if (j === 4) {
          square.innerText = kingIcon;
          square.dataset.piece = "king";
        }
      } else if (i === 1 || i === 6) {
        square.innerText = pawnIcon;
        square.dataset.piece = "pawn";
      }

      if (i === 0 || i === 1) {
        square.classList.add("black-player");
      } else if (i === 7 || i === 6) {
        square.classList.add("white-player");
      }

      // Adding black and white classes
      if ((i + j) % 2 === 0) {
        square.classList.add("white");
      } else {
        square.classList.add("black");
      }

      square.dataset.row = i;
      square.dataset.col = j;
      square.dataset.selected = false;

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
    const selectedClass = "selected";

    if (selectedSquare === target) {
      target.classList.remove(selectedClass);
      target.dataset.selected = false;
      selectedSquare = null;
      console.log("Unselected", target);
    } else {
      if (selectedSquare) {
        selectedSquare.classList.remove(selectedClass);
        selectedSquare.dataset.selected = false;
      }
      target.classList.add(selectedClass);
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
