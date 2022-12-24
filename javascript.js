const mainContainer = document.querySelector('.main-container');
const clearButton = document.getElementById('clear-button');


clearButton.addEventListener('click', resetGrid);



function addShading() {
    this.classList.add('column-hover');
}

function resetGrid() {
    let columns = document.getElementsByClassName('column');
    for(let i = 0; i < columns.length; i++) {
        columns[i].classList.remove('column-hover');
    }
}

function createBoard() {
    for(let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for(let j = 0; j < 16; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            column.addEventListener('mouseover', addShading);
            row.appendChild(column);
        }

        mainContainer.appendChild(row);
    }
}



createBoard();
