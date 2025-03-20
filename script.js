// DOM elements
const container = document.querySelector(".container");

let gridSize = 16;

function createGrid(size) {
    let squareSize = 720 / size;

    container.innerHTML = "";

    for  (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);

        addHoverEffect();
    }
}

function addHoverEffect() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
        });
    });
}

function resetGrid() {
    const squares = document.querySelectorAll(".square");
    
    squares.forEach((square) => {
        square.style.backgroundColor = "";
    });
}

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", resetGrid);


const newGridButton = document.querySelector(".new-grid-button");

newGridButton.addEventListener("click", () => {
    const newSize = prompt("Enter a new number of squares per side (max 100):");

    // Validate the input
    if (newSize && !isNaN(newSize)) {
        const size = parseInt(newSize);
        if (size > 0 && size <= 100) {
            gridSize = size; // Update the grid size
            createGrid(gridSize); // Create the new grid
        } else {
            alert("Please enter a number between 1 and 100.");
        }
    } else {
        alert("Invalid input. Please enter a number.");
    }
});

createGrid(gridSize);