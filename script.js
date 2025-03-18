// DOM elements
const container = document.querySelector("#container");


const gridSize = 16;
const squareSize = 720 / gridSize;

for  (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
}

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black";
    });
});

const resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', () => {
    squares.forEach((square) => {
        square.style.backgroundColor = "";
    })
});