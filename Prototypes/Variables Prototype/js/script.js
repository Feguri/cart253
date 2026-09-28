/**
 * Variable prototype 1
 * Felipe Paiva
 * 
 * This project comprises of
 */

"use strict";

/**
 * Setup creates a Canvas of a certain dimension (500x500)
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Function uses variables, mouse tracking, and if statements to display squares in the line betwoon a single 
 * determined point (also a var) and the mouse.
*/
function draw() {
    noStroke();
    fill('black');
    // defines the varibles used in the program
    var originX = 0;
    var originY = 0;
    var fillerObject = square(originX, originY, 50);

    function getDistances(mouseX, mouseY) {
        
    }

    // gets the x and y position of the mouse
    window.addEventListener('mousemove', (event) => {
            
            const x = event.clientX;
            const y = event.clientY; 
            
    });
}