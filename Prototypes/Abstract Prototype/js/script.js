/**
 * Abstraction of my feelings
 * Felipe Paiva
 * 
 * This project contains an abstraction artwork of how I feel using colors and shapes
 */
"use strict";

/**
 * Setup creates a Canvas of a certain dimension (500x500)
*/
function setup() {
    createCanvas(1000, 500);
}


/**
 * This draw function draws the abstraction
*/
function draw() {
    background(230);
    fill("darkgreen");
    noStroke();

    // Some simple for loop that allows the creation of an interesting shape
    for (let i = 0; i <= 200; i++) {
        // Makes the last rect a fill of black using an if statement targeting the last iteration
        if (i==200) {
            fill('black');
        }
        // creates the rect using the i variable used in the for loop
        rect(i, i, i, i);
    };
    
}