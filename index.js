const etchASketchBoard = document.getElementById("etch-a-sketch-board");


function createGrid(totalNumberOfSquaresInGrid) {
    const numberOfRows = Math.floor(Math.sqrt(totalNumberOfSquaresInGrid));
    console.log(numberOfRows);
    etchASketchBoard.style.gridTemplateRows = `repeat(${numberOfRows}, 1fr)`;
    etchASketchBoard.style.gridTemplateColumns = `repeat(${numberOfRows}, 1fr)`;
    for (let i = 0; i < numberOfRows * numberOfRows; i++) {
         const oneSquare = document.createElement('div');
         oneSquare.setAttribute("style", "background: white; border-style: solid;");
         etchASketchBoard.appendChild(oneSquare);
    }
}

createGrid(1000);
