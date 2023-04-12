// Main.js - Etch-A-Sketch

// GLOBAL VARIABLE DECLARATIONS
const ROW = 16;  
const COLUMN = 16;

// FUNCTIONS

// Function to create row divs.  Takes a parameter(INT) of number or rows to generate
// if parameter is invalid, assume 1 row
function createRow(num) {

    let rowNum;
    
    if (Number.isInteger(num) && num > 0) {
        rowNum = num - 1;
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

    // Test Code
    console.log(rows);
    
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

// MAIN

// Default grid creation
createRow(ROW);
createSqr(COLUMN);

// Adding Event Listener to the squares
// If a square in the grid is clicked, it should change background color to black
const markedDot = document.querySelectorAll('.sqr');

for (i = 0; i < markedDot.length; i++) {
    markedDot[i].addEventListener('click', function (e) {
        e.target.style.background = 'black';
    });
}

// Adding Event Listener to the Clear Button
const clearGrid = document.querySelector('.clearBut');
clearGrid.addEventListener('click', function(e) {

    for (i = 0; i < markedDot.length; i++) {
        markedDot[i].style.background = 'white';
    }
});

// for (i = 0; i < clearGrid.length; i++) {
//     console.log(clearGrid[i]);
// }


