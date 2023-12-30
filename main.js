const pawnIcon = "♙";
const rookIcon = "♖";
const knightIcon = "♘";
const bishopIcon = "♗";
const queenIcon = "♕";
const kingIcon = "♔";

const mainFn = () => {
  const title = document.getElementsByTagName("title")[0];
  const h1 = document.getElementsByTagName("h1")[0];

  h1.innerText = title.innerText;

  const main = document.getElementById("main");
  const board = document.createElement("div");

  // Creates a chess board with div's using flexbox
  for (let i = 0; i < 8; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < 8; j++) {
      const square = document.createElement("div");
      square.className = "square";

      // Adding icons
      if (i === 0 || i === 7) {
        if (j === 0 || j === 7) {
          square.innerText = rookIcon;
        } else if (j === 1 || j === 6) {
          square.innerText = knightIcon;
        } else if (j === 2 || j === 5) {
          square.innerText = bishopIcon;
        } else if (j === 3) {
          square.innerText = queenIcon;
        } else if (j === 4) {
          square.innerText = kingIcon;
        }
      } else if (i === 1 || i === 6) {
        square.innerText = pawnIcon;
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

      row.appendChild(square);
    }

    board.appendChild(row);
  }

  board.onclick = ({ target }) => {
    console.log("Click on board", target);

    if (target.classList.contains("square") && target.tagName === "DIV") {
      target.classList.toggle("selected");
    }
  };

  main.appendChild(board);
};

window.addEventListener("DOMContentLoaded", mainFn);
