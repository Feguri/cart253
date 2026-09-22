/**
 * Representation of a Cat
 * Felipe Paiva
 * 
 * This project contains representational things: An orange Cat
 */

"use strict";

/**
 * Setup creates a Canvas of a certain dimension (1000x500)
*/

// a variable to see if the continue button has been clicked, to not run the code if it's false
let hasClicked = false;

// Sets up the canvas
function setup() {
    // creates a canvas
    createCanvas(1000, 500);
    // creates a variable for the continue button
    let continueBtn = select('#continue');
  
    // When clicked, run an anonymous arrow function
    continueBtn.mousePressed(() => {
        hasClicked = true; 
    });
}


/**
 * This draw function is very simple, it creates a window even listener loop for the mouse's x and y positions, then draws a rect with a random color every time the position changes, using the sizes of the rect as the x and y click events.
*/
function draw() {
    fill('Black');
    if (hasClicked) {
        window.addEventListener('mousemove', (event) => {
            var myColor = color(random(255), random(255), random(255));
            const x = event.clientX;
            const y = event.clientY; 
            fill(myColor);
            rect(0, 0, x, y);
    });
    }
}