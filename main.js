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

        // Test Code
        console.log(newRow);
        console.log(parent);


        parent.appendChild(newRow);
    }
}


// Function to create squares.  Takes a parameter(INT) of number of squares to generate
// if parameter is invalid, assume 1 square
function createSqr(num) {

    let sqrNum;
    
    if (Number.isInteger(num) && num > 0) {
        sqrNum = num - 1;
    } 
    else {
        sqrNum = 1;
    }

    for (i = 0; i < sqrNum; i++) {

    }
}

// MAIN

createRow(3);