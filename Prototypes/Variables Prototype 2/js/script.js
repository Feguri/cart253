/**
 * Variable prototype 1
 * Felipe Paiva
 * 
 * This prototype
 */

"use strict";

/**
 * Setup creates a Canvas of a certain dimension (500x500)
*/
function setup() {
    createCanvas(500, 500);
    rectMode(CENTER);
    background(220);
}

let iterationNum = 0;


/**
 * 
*/
function draw() {
    
}

// this is a built-in function by p5.js that will only run when a mouse is clicked!!
// it changes the iterationNum variable with and if/else statement
function mouseClicked() {
    let shapes = {
    square: square(mouseX, mouseY, mouseX),
        triangle: triangle(mouseX, mouseY, (mouseX + 100), (mouseY + 100), (mouseX+20), (mouseY+20))
    }

    if (iterationNum === 0) {
        iterationNum++;
        shapes.square;
    } else {
        iterationNum = 0;
        shapes.triangle;
    }
    console.log("Current shape iteration:", iterationNum);
}
