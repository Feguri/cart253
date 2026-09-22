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

    // sets the background of the scene to a dark grey
    background(40);
    // Sets the background color of the fill of the first shape to purple
    fill("purple");
    // Removes all strokes
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

    // Another for loop for a similar interesting shape, but at a different location.
    for (let i = 200; i <= 400; i++) {
        // changes the color of all rects to orange
        fill('orange');
        // Makes the last rect a fill of black using an if statement targeting the last iteration
        if (i==400) {
            fill('black');
        }
        // creates the rect using the i variable used in the for loop
        rect(200+i, i, i, i);
    };

    // Sets a position variable to be used in the "Stairs" shape
    let Position = 0;
    // This for loop creates a shape in the shape of staris
    for (let i = 0; i <= 30; i++) {
        for (let i = 1000; i >= 400; i--) {
            // Makes the shape's color brown
            fill('brown');
            // Makes the last rect a fill of black using an if statement targeting the last iteration
            if (i==400) {
                fill('black');
            }
            // creates the rect using the i variable used in the for loop and the position variable
            rect(i + Position, Position, i, 20);
        };
        // Adds to the position variable for greater variation and creating the "stairs" look. Changing this value
        // Will make the stairs shape change
        Position += 25;
    }
}