const gridWidth =getComputedStyle(document.body).getPropertyValue('--grid-width');
const accentColor =getComputedStyle(document.body).getPropertyValue('--accent-color');
const inactiveColor =getComputedStyle(document.body).getPropertyValue('--inactive-color');

const container = document.querySelector('.container');
const sketchArea = document.querySelector('#sketch-area');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('#slider-value');

// const sliderContainer = document.querySelector('#slider-container');
// sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;

const gridToggle = document.querySelector('#grid-toggle');
let squarePerSide = 16;

let gridVisible = false;
// sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function toggleGrid(){
    gridVisible = gridVisible ? false : true;
    gridToggle.style.color = gridVisible ? accentColor : inactiveColor;

    removeGridCells();
    createGridCells();
}

function createGridCells(){
    const numOfSquares = Math.pow(squarePerSide, 2);
    // const widthAndHeight = `${(GRIDSIDE / squarePerSide) - 2 }px`;
    // let widthAndHeight = 0;

    for(let i = 0; i<numOfSquares; i++){
        const gridCell = document.createElement("div");

        if(gridVisible){
            widthAndHeight = `${(parseInt(gridWidth)/ squarePerSide) - 2}px`; //parseInt: lấy giá trị '600px' bỏ 'px' 
            gridCell.style.border = "1px solid whitesmoke";
        }else if(!gridVisible){
            widthAndHeight = `${(parseInt(gridWidth)/ squarePerSide)}px`; //parseInt: lấy giá trị '600px' bỏ 'px' 
            gridCell.style.border ="none";
        }
        gridCell.style.width = gridCell.style.height = widthAndHeight;

        // gridCell.addEventListener("mouseover",setBackgroundColor);
        sketchArea.appendChild(gridCell);

    }
}
function setBackgroundColor(){
    this.style.backgroundColor = "black";
}
//trước khi tạo mới grid cần xoá grid
function removeGridCells(){
    while(sketchArea.firstChild){
        sketchArea.removeChild(sketchArea.firstChild);
    }
}
slider.oninput = function (){
    squarePerSide = this.value;
    sliderValue.textContent =  `${this.value} x ${this.value} (Resolution)`;
    removeGridCells ();
    createGridCells(this.value);

}
gridToggle.addEventListener("click", toggleGrid);
createGridCells();

console.log(gridToggle.innerHTML);