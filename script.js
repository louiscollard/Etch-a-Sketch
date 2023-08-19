const title = document.querySelector(".title");
const container = document.querySelector(".container");
const main = document.querySelector(".main");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
function getInputForGridSize() {
	// slider.oninput = (e) =>
	// 	(output.textContent = `${e.target.value} x ${e.target.value}`);
	output.textContent = "30";
	slider.oninput = (e) => (output.textContent = e.target.value);
}

function createGrid(num) {
	container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

	let gridSize = num * num;

	for (let i = 0; i < gridSize; i++) {
		const square = document.createElement("div");
		square.classList = `square square-${i}`;
		square.style.background = "white";
		square.style.border = "0.5px solid black";
		square.addEventListener("mouseover", () => {
			square.style.background = "black";
		});
		container.appendChild(square);
	}
}

getInputForGridSize();
