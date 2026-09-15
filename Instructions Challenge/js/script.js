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
  createCanvas(600, 750);
}

// This function draws a building at the specified position with the specified dimensions.
function drawBuilding(x, width, height) {
    // Creates a variable to automatically calculate the building position based on its height
    var fixHeight = 550 - height;
    // Draws the building with a gray color
    noStroke();
    fill(120, 120, 120);
    rect(x, fixHeight, width, height);
}

/**
 * This draw function (...)
*/
function draw() {
    // changes the background color to white
    background(255, 255, 255)


    // draws a rectangle inside the canvas to make the sky
    fill(30, 0, 60)
    rect(50, 50, 500, 500);
    // draws a moon in the sky
    noStroke();
    fill(255,255,255);
    circle(125,125,80);
    // draws the shadow of the moon in the sky
    noStroke();
    fill(30,0,60);
    circle(140,110,80);

    drawBuilding(50, 100, 200);
}