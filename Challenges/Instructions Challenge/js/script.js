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
  let canvas = createCanvas(600, 750);
  canvas.parent('#sketch');
}

function drawWindow(x, y, width) {
    // draws a window
    noStroke();
    // fills the window with a yellow color
    fill(255, 255, 55);
    square(x, y, width);
}

// This function draws a building at the specified position with the specified dimensions.
function drawBuilding(x, width, height) {
    // Creates a variable to automatically calculate the building position based on its height
    var fixHeight = 550 - height;
    // Draws the building with a gray color
    noStroke();
    fill(120, 120, 120);
    rect(x, fixHeight, width, height);

    // loop that draws windows based on the width and height of the building
    // The loop starts at 10 pixels so that the windows are not drawn close to the edge of the building
    // There are two loops inside of eachother: one to determine the x position of the window, and another one to determine the y position.
    for (var i = 10; i < width -10; i += 10) {
        for (var a = 10; a < height -10; a += 10) {
            // draws the window
            drawWindow(x + i, fixHeight + a, 5);
        }
    }

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

    // Draws all the building of the skyline
    drawBuilding(50, 100, 200);
    drawBuilding(160, 75, 350);
    drawBuilding(250, 90, 150);
    drawBuilding(350, 120, 225);
    drawBuilding(475, 50, 100);

    // Draws the foreground of the city skyline
    fill(50,50,50)
    rect(50, 500, 350, 50)
    rect(450, 500, 100, 50)
}