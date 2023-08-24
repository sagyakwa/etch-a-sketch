const etchASketchBoard = document.querySelector("#etch-a-sketch-board");
const resetButton = document.querySelector("#reset-button")

const createGrid = (totalNumberOfSquaresInGrid) =>  {
    const numberOfRows = Math.floor(Math.sqrt(totalNumberOfSquaresInGrid));
    console.log(numberOfRows);
    etchASketchBoard.style.gridTemplateRows = `repeat(${numberOfRows}, 1fr)`;
    etchASketchBoard.style.gridTemplateColumns = `repeat(${numberOfRows}, 1fr)`;
    for (let i = 0; i < numberOfRows * numberOfRows; i++) {
         const oneSquare = document.createElement('div');
         oneSquare.setAttribute("style", "background: white;");
         oneSquare.classList.add("etch-a-sketch-square");
         etchASketchBoard.appendChild(oneSquare);
    }
}

const onEtchASketchSquareHovered = (mouseEvent) => {
    mouseEvent.target.setAttribute("style", "background: black;");
}

createGrid(1000);

const currentEtchASketchSquares = document.querySelectorAll(".etch-a-sketch-square");
for (const square of currentEtchASketchSquares) {
    square.addEventListener("mouseover", onEtchASketchSquareHovered);
}

resetButton.addEventListener("click", () => {
    const etchASketchSquares = document.querySelectorAll(".etch-a-sketch-square");
    for (const square of etchASketchSquares) {
        square.setAttribute("style", "background: white;")
    }
});
