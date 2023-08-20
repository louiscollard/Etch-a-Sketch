// Get the necessary DOM elements
const container = document.querySelector(".container");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const color = document.getElementById("myColor");
const clear = document.getElementById("clear");
const randomColor = document.getElementById("random-color");
const btnToggleGrid = document.getElementById("toggle-grid");
const btnEraser = document.getElementById("eraser");

let selectedColor = "black";
let mouseIsDown = false;
let isGridVisible = true;
let isRandomMode = false;
let isEraserMode = false;

// Event listener to track mouse state
document.addEventListener("mousedown", () => {
	mouseIsDown = true;
});

document.addEventListener("mouseup", () => {
	mouseIsDown = false;
});

// Function to get the color from user
function getColor() {
	color.addEventListener("input", (e) => {
		selectedColor = e.target.value;
	});
}

// Function to update the grid size based on the slider input
function getInputForGridSize() {
	slider.addEventListener("input", (e) => {
		const gridSize = parseInt(e.target.value); // Parse the slider value as an integer
		output.textContent = `${gridSize} x ${gridSize}`;

		// Clear the previous grid content
		container.textContent = "";

		// Create a new grid with the updated size;
		createGrid(gridSize);
	});
}

// Function to create the grid
function createGrid(num) {
	container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

	let gridSize = num * num;

	for (let i = 0; i < gridSize; i++) {
		const square = document.createElement("div");
		square.classList = `square square-${i}`;
		square.style.background = "white";
		square.style.border = `0.5px solid gray`;
		// Add both "mouseover" and "click" event listeners to each square
		square.addEventListener("mouseover", () => {
			if (mouseIsDown) {
				square.style.background = selectedColor;
			}
		});

		square.addEventListener("click", () => {
			square.style.background = selectedColor;
		});
		container.appendChild(square);
	}
}

function clearGrid() {
	const squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
		square.style.background = "white";
	});
}

function toggleGrid() {
	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		if (isGridVisible) {
			square.style.border = "none";
		} else {
			square.style.border = "0.5px solid gray";
		}
	});

	isGridVisible = !isGridVisible;
}

function getRandomColour() {
	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {
			if (mouseIsDown) {
				if (isRandomMode) {
					let randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
						Math.random() * 256
					})`;

					square.style.background = randomColor;
				}
			}
		});

		square.addEventListener("click", () => {
			if (isRandomMode) {
				let randomColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
					Math.random() * 256
				})`;

				square.style.background = randomColor;
			}
		});
	});

	isRandomMode = !isRandomMode;
}

function toggleEraser() {
	const squares = document.querySelectorAll(".square");
	squares.forEach((square) => {
		square.addEventListener("mouseover", () => {
			if (mouseIsDown) {
				if (isEraserMode) {
					square.style.background = "white";
				}
			}
		});

		square.addEventListener("click", () => {
			if (isEraserMode) {
				square.style.background = "white";
			}
		});
	});

	isEraserMode = !isEraserMode;
}

// Set default grid size to 30
const defaultGridSize = 30;
slider.value = defaultGridSize;
output.textContent = `${defaultGridSize} x ${defaultGridSize}`;
createGrid(defaultGridSize);

// Initialize the grid and slider behavior
getInputForGridSize();
getColor();

clear.addEventListener("click", clearGrid);
randomColor.addEventListener("click", getRandomColour);
btnToggleGrid.addEventListener("click", toggleGrid);
btnEraser.addEventListener("click", toggleEraser);
