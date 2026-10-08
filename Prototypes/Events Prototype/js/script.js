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
let x = 0;
let y = 0;
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
}

/**
 * Draw description
*/
function detectSpeed(previousSpeed) {
    if (previousSpeed !== 0) {
        if (mouseIsPressed) {
            let currentSpeed = mouseX - previousSpeed;
            let result = Math.round(Math.abs(currentSpeed))*2;
            console.log(result);
            shapes.circle.width = result+20;
            previousX = mouseX;
            noStroke();
            fill(shapes.circle.color);
            circle(mouseX, mouseY, shapes.circle.width);
            previousX = mouseX;
    
        }
    } previousX = mouseX;
}
function draw() {
    detectSpeed(previousX);
}