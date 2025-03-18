const container = document.querySelector("#container");
const gridSize = 16;
const squareSize = 960 / gridSize;

for  (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
}