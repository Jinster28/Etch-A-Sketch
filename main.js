// Main.js - Etch-A-Sketch

// GLOBAL VARIABLE DECLARATIONS
const DEFAULT = 16;  

// FUNCTIONS

// Function to clear the grid
function reset() {

    let cgr = document.querySelectorAll('.row');
    let cgs = document.querySelectorAll('.sqr');
    let parent = document.querySelector('.contMain');

    for (i = 0; i < cgr.length; i++) {
        parent.removeChild(cgr[i]);
    }
}

// Function to create row divs.  Takes a parameter(INT) of number or rows to generate
// if parameter is invalid, assume 1 row
function createRow(num) {

    let rowNum;
    
    if (Number.isInteger(num) && num > 0) {
        rowNum = num;
    } 
    else {
        rowNum = 1;
    }

    for (i = 0; i < rowNum; i++) {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        let parent = document.querySelector('.contMain');

        parent.appendChild(newRow);
    }
}

// Function to create squares.  Takes a parameter(INT) of number of squares to generate
// if parameter is invalid, assume 1 square
function createSqr(num) {

    let sqrNum;
    let rows = document.querySelectorAll('.row');
    
    if (Number.isInteger(num) && num > 0) {
        sqrNum = num;
    } 
    else {
        sqrNum = 1;
    }

   for (i = 0; i < rows.length; i++) {
        for (j = 0; j < sqrNum; j++) {
            let newSqr = document.createElement('div');
            newSqr.classList.add('sqr');
            rows[i].appendChild(newSqr);
        }
   }
}

// Function to add Event Listener to the squares to enable them
// If a square in the grid is clicked, it should change background color to black
function drawEnable() {

    const markedDot = document.querySelectorAll('.sqr');

    for (i = 0; i < markedDot.length; i++) {
        markedDot[i].addEventListener('click', function (e) {
            e.target.style.background = 'black';
        });
    }
}

// Function to add Event Listener to the Clear Button to enable it
function clearEnable() {

    const clearGrid = document.querySelector('.clearBut');
    const markedDot = document.querySelectorAll('.sqr');

    clearGrid.addEventListener('click', function(e) {

        for (i = 0; i < markedDot.length; i++) {
            markedDot[i].style.background = 'white';
        }
    });
}

// Function to add Event Listener to the Resize Grid Button to enable it
function newGridEnable() {
    const resizeGrid = document.querySelector('.rsBut');
    resizeGrid.addEventListener('click', function(e) {
        let newSize = Number(prompt("Please Enter the grid length"));
        reset();
        createRow(newSize);
        createSqr(newSize);
        drawEnable();
        clearEnable();
    });   
}

// Function to start game
function game(num) {
    createRow(num);
    createSqr(num);
    drawEnable();
    clearEnable();
    newGridEnable();
}


// MAIN
game(DEFAULT);






