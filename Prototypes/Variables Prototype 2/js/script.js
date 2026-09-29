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
    
}

let iterationNum = 0;

/**
 * 
*/
function draw() {
    rectMode(CENTER);
    background(220);
    let width = mouseX;
    

    let shapes = {
        square: square(mouseX, mouseY, width),
        triangle: triangle(mouseX, mouseY, (mouseX + 10), (mouseY + 10), (mouseX+20), (mouseY+20))
    }

    // square(mouseX, mouseY, width);

    window.addEventListener('click', function () {
        if (iterationNum == 0){
            shapes.square;
            iterationNum++;
            console.log(iterationNum)
        } else {
            shapes.triangle;
            iterationNum = 0;
            console.log(iterationNum)
        }
    })
}
