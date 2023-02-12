const gridContainer = document.querySelector(".main-container");
const gridSizeInput = document.querySelector("#gridSizeInput");
const gridSizeDisplay = document.querySelector("#gridSizeDisplay");
const colorSelection = document.querySelectorAll('input[name="colorSelection"]');
const clearButton = document.querySelector('#clear-button');
const colorWheel = document.querySelector("#color-wheel");


function createBoard() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    
    for(let i = 0; i < gridSizeInput.value; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for(let j = 0; j < gridSizeInput.value; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.addEventListener('mouseover', function() {
                // for(const radio of colorSelection) {
                //     if(radio.checked){
                //         column.style.backgroundColor = radio.value;
                //     }
                // }
                column.style.backgroundColor = colorWheel.value;
            });
            row.appendChild(column);
        }

        gridContainer.appendChild(row);
    }
}

function resetGrid() {
    let columns = document.getElementsByClassName('column');
    for(const col of columns) {
        col.style.backgroundColor = 'white';
    }
}

gridSizeInput.addEventListener('input', () => {
    const gridSize = gridSizeInput.value;
    gridSizeDisplay.innerHTML = `${gridSize}x${gridSize}`;
    createBoard();
})

clearButton.addEventListener('click', resetGrid);



createBoard();