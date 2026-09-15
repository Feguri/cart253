/**
 * City Skyline
 * Felipe Paiva & Felipe Amorim
 * 
 * A simple city skyline visualization using p5.js.
 * 
 */

"use strict";

/**
 * This is the setup function for the program.
*/
function setup() {

}

// This function draws a building at the specified position with the specified dimensions.
function drawBuilding(x, y, width, height) {
    square(x, y, 100);
}

/**
 * This draw function (...)
*/
function draw() {
    drawBuilding(100, 100, 100, 100);
    drawBuilding(200, 200, 100, 100);
}