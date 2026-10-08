/**
 * Gesture painter
 * Felipe Paiva
 * 
 * A drawing tool where HOW you move matters as much as WHERE. Mouse speed controls brush size or opacity, the scroll wheel changes the brush shape, holding Shift or Alt switches modes, double-click clears with some kind of animation, and resizing the window reflows or scales the artwork instead of wiping it.
 */

"use strict";

/**
 * Description of Setup
*/
let shapes;
let x = mouseX;
let y = mouseY;
let previousX = 0;
function setup() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    createCanvas(width, height);
    background('Black');
    shapes = {
        circle: {
            width: 50,
            color: "red",
        },
        square: {
            width: 50,
            color: "blue",
        },
    };
    frameRate(160);
}

/**
 * Draw description
*/
function detectSpeed(previousSpeed) {
    if (mouseIsPressed) {
        let currentSpeed = mouseX - previousSpeed;
        let result = Math.round(Math.abs(currentSpeed));
        console.log(result);
        previousX = mouseX;

        noStroke();
        fill(shapes.circle.color);
        circle(mouseX, mouseY, shapes.circle.width);
    }
}
function draw() {
    detectSpeed(previousX);
}