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

    for (let i = 200; i <= 400; i++) {
        // Makes the last rect a fill of black using an if statement targeting the last iteration
        fill('orange');
        if (i==400) {
            fill('black');
        }
        // creates the rect using the i variable used in the for loop
        rect(200+i, i, i, i);
    };

    for (let i = 1000; i >= 400; i--) {
        // Makes the last rect a fill of black using an if statement targeting the last iteration
        fill('brown');
        if (i==400) {
            fill('black');
        }
        // creates the rect using the i variable used in the for loop
        rect(i, 0, i, 20);
    };

    for (a = 0; a <= 2; a++){
        for (let i = 1000; i >= 400; i--) {
            // Makes the last rect a fill of black using an if statement targeting the last iteration
            fill('black');
            if (i==400) {
                fill('brown');
            }
            // creates the rect using the i variable used in the for loop
            rect(i, 20, i, 40);
        };
    }
}