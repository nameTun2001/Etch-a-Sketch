const GRIDSIDE = 600;

let squarePerSide = 16;
const sliderContainer = document.querySelector('#slider-container');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');
sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function createGridCells(squarePerSide){
    const numOfSquares = Math.pow(squarePerSide, 2);
    const widthAndHeight = `${(GRIDSIDE / squarePerSide) - 2 }px`;

    for(let i = 0; i<numOfSquares; i++){
        const gridCell = document.createElement("div");
        gridCell.style.width = gridCell.style.height = widthAndHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);
        // gridCell.addEventListener("mouseenter",setBackgroundColor);

    }
}
function setBackgroundColor(){
    this.style.backgroundColor = "black";
}
createGridCells();
