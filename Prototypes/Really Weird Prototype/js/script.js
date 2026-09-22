/**
 * Representation of a Cat
 * Felipe Paiva
 * 
 * This project contains representational things: An orange Cat
 */

"use strict";

/**
 * Setup creates a Canvas of a certain dimension (500x500)
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * This draw function draws a cat.
*/
function draw() {
    window.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY; 
        console.log(`Mouse Position -> X: ${x}, Y: ${y}`);
});
}