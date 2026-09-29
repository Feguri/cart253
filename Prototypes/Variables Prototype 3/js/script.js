/**
 * Variable prototype 1
 * Felipe Paiva
 * 
 * This prototype
 */

"use strict";

/**
 * Setup creates a Canvas of a certain dimension (255x255)
*/
function setup() {
    createCanvas(255, 255);
    rectMode(CENTER);
    background(220);
}

/**
 * The function draw
*/
function draw() {
    let hexColor = [mouseX, mouseY, 100];
    background(hexColor[0], hexColor[1], hexColor[2]);
}
// this is a built-in function by p5.js that will only run when a mouse is clicked!!
// it changes the iterationNum variable with and if/else statement
function mouseClicked() {

}