const gridContainer = document.querySelector("#gridContainer");
const gridSizeInput = document.querySelector("#gridSizeInput");
const gridSizeDisplay = document.querySelector("#gridSizeDisplay");
const colorSelection = document.querySelectorAll('input[name="colorSelection"]');

gridSizeInput.addEventListener("input", function() {
  const gridSize = gridSizeInput.value;
  gridSizeDisplay.innerHTML = `${gridSize}x${gridSize}`;

  // Remove all existing grid items
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // Create new grid items based on the grid size
  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.addEventListener("mouseover", function() {
      for (const radio of colorSelection) {
        if (radio.checked) {
          gridItem.style.backgroundColor = radio.value;
        }
      }
    });
    gridContainer.appendChild(gridItem);
  }

  gridContainer.style.width = `${gridSize * 100}px`;
  gridContainer.style.height = `${gridSize * 100}px`;
});

