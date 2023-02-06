const grid = document.querySelector(".grid");

function newGrid() {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {

      let child = document.createElement("div");
      child.classList.add("grid-blocks");
      grid.append(child);
    }
  }
}




function init() {
  newGrid();
}
init();