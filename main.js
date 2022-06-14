const container = document.getElementById("gridContainer");

function makeRows(rows, cols) {
  if (rows >= 65 || cols >= 65) {
    alert("Type below 64");
    throw new Error("Stop script");
  }
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = `gridItem${c}`;
    cell.addEventListener(
      "mouseover",
      (e) => (e.target.style.backgroundColor = "purple")
    );
  }
}

function gameplay() {
  let v1 = prompt("Value1 (note: 64 max)");
  let v2 = prompt("Value2 (note: 64 max)");
  makeRows(v1, v2);
}

/* function hoverEfx() {
  document.getElementsByClassName(`gridItem${c}`).style.backgroundColor = "red";
}

container.addEventListener("mouseover", function (event) {
  event.target.style.backgroundColor = "purple";
}); */
