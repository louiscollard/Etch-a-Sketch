// Get the necessary DOM elements
const container = document.querySelector(".container");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const color = document.getElementById("myColor");
const clear = document.getElementById("clear");
const randomColor = document.getElementById("random-color");

let selectedColor = "black";

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
		square.style.border = `0.5px solid black`;
		square.addEventListener("mouseover", () => {
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

function getRandomColour() {
	let r = Math.trunc(Math.random() * 256);
	let g = Math.trunc(Math.random() * 256);
	let b = Math.trunc(Math.random() * 256);
	let randomColor = `rgb( ${r} , ${g}, ${b})`;
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
