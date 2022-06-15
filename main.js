let color = "black";
let click = true;

makeRows(16);

function makeRows(gridSize) {
  const sketchBoard = document.getElementById("gridContainer");
  // Board clear function
  let squares = sketchBoard.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  sketchBoard.style.setProperty("--grid-rows", gridSize);
  sketchBoard.style.setProperty("--grid-cols", gridSize);
  for (c = 0; c < gridSize * gridSize; c++) {
    let cell = document.createElement("div");
    sketchBoard.appendChild(cell).className = `gridItem`;
    cell.addEventListener("mouseover", colorSquare);
    sketchBoard.insertAdjacentElement("beforeend", cell);
  }
}

function gameplay() {
  makeRows(gridSize);
}

function clearBoard() {
  makeRows(gridSize);
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

let gridSize;
const labelGridSize = document.querySelector("#labelGridSize");
const inputGridSize = document.querySelector("#inputGridSize");

inputGridSize.addEventListener("input", (e) => {
  gridSize = e.target.value;
  labelGridSize.textContent = `Grid size: ${gridSize}x${gridSize}`;
});

/* function hoverEfx() {
  document.getElementsByClassName(`gridItem${c}`).style.backgroundColor = "red";
}

container.addEventListener("mouseover", function (event) {
  event.target.style.backgroundColor = "purple";
}); */
