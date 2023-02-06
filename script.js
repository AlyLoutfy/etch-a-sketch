const DEFAULT_COLOR = '#43da85';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor) {
  currentColor = newColor;
}

function setCurrentSize(newSize) {
  currentSize = newSize;
}

const colorPicker = document.querySelector(".color-picker");
const clearBtn = document.querySelector(".clear-btn");
const grid = document.querySelector(".grid");
const gridSize = document.querySelector(".grid-size");

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
clearBtn.onclick = () => newGrid();

function changeRange(newVal) {
  gridSize.innerHTML = "Grid Size: "+ newVal + " x "+ newVal;
  currentSize = newVal;
  newGrid();
}

function newGrid() {
  clearGrid();
  setupGrid(currentSize);
}

function clearGrid() {
  grid.innerHTML = "";
}

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size ** 2; i++) {
    const child = document.createElement("div");
    child.classList.add("grid-blocks");
    child.addEventListener('mouseover', changeColor);
    child.addEventListener('mousedown', changeColor);
    grid.append(child);
  
  }
}

function changeColor() {
  const gridBlocks = document.querySelectorAll(".grid-blocks");
  gridBlocks.forEach(block => {
    block.addEventListener('mousedown', event => {
      block.style.backgroundColor = currentColor;
    })
  });
}

function init() {
  newGrid();
  changeColor();
}
init();