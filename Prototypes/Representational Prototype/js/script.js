/**
 * Representation of 
 * Felipe Paiva
 * 
 * This project contains representational things.
 */

"use strict";

/**
 * Setup creates a Canvas of a certain dimension.
*/
function setup() {
    createCanvas(500, 500);

    
}


/**
 * This draw function draws a cat.
*/
function draw() {
    // variables
    let catColor = color(255, 204, 0);

    // Creates a solid grey background
    background(220);

    // This draws the round shape of the cat's face with its signature color using the variable.
    fill(catColor);
    noStroke();
    circle(250, 250, 400);

    // This draws the two little pointy ears, first the left one then the right one inverting the x values.
    fill(catColor);
    noStroke();
    triangle(100, 150, 250, 100, 100, 0);

    fill(catColor);
    noStroke();
    triangle(400, 150, 250, 100, 400, 0);

    // This draws the two eyes using circles

    fill("white");
    noStroke();
    circle(175, 175, 50);
    circle(325, 175, 50);

    // This draws the pupils using ellipses
    fill("black");
    noStroke();
    ellipse(175, 175, 10, 40);
    ellipse(325, 175, 10, 40);

}