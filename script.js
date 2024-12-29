// Select the container and buttons
const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
const resizeButton = document.getElementById('resize');

// Function to create the grid
function createGrid(size) {
    container.innerHTML = ''; // Clear the container before creating a new grid
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // Set number of columns based on the size
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // Set number of rows based on the size

    // Create individual grid squares
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black'; // Change color on hover
        });
        container.appendChild(div);
    }
}

// Function to reset the grid
resetButton.addEventListener('click', () => {
    createGrid(16); // Reset to default grid size (16x16)
});

// Function to resize the grid
resizeButton.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size (max 100):');
    newSize = Math.min(newSize, 100); // Set a max size of 100 to avoid performance issues
    createGrid(newSize);
});

// Create the initial grid with a default size
createGrid(16);