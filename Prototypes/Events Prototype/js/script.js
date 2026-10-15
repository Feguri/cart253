/**
 * Gesture painter
 * Felipe Paiva
 * 
 * A drawing tool where HOW you move matters as much as WHERE. Mouse speed controls brush size or opacity, the scroll wheel changes the brush color (in an unpredictable way), holding Shift or Alt switches modes, double-click clears with some kind of animation, and resizing the window reflows or scales the artwork instead of wiping it.
 */

"use strict";

let shapes;
let x = 0;
let y = 0;
let previousX = 0;
let colorChangingNumber = 0;

/**
 * This set up function initializes with a width and height constants, which are the window's width and height, creating the canvas at the initial window size configuration for the largest possible canvas. Then, the shapes variables is updated with an object, it contains two shapes: a circle and a square. The circle has its own width (that will be changed later), red, green and blue values. I had to search how to return a string with inbedded variables inside an object, so I used a "get" functionality in JavaScript that lets me return the full rgb value for p5, which can CHANGE. That's the important part for this painter.
*/
function setup() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    createCanvas(width, height);
    background('Black');
    shapes = {
        circle: {
            width: 50,
            redValue: 50,
            greenValue: 0,
            blueValue: 0,
            get color() {
                return `rgb(${this.redValue}, ${this.greenValue}, ${this.blueValue})`;
            },
        }
    };
}

// changes the color of the painted object according to a number changed by mousewheel scrolling
function mouseWheel(event) {
    // console.log(Math.floor(event))
    let deltaValue = Math.floor(event.delta)
    if (deltaValue < 0) {
        if (deltaValue < -255) {
            shapes.circle.greenValue = 255;
        } else {
            shapes.circle.greenValue = -deltaValue;
        }
    } else {
        if (deltaValue > 255) {
            shapes.circle.blueValue = 255;
        } else {
            shapes.circle.blueValue = deltaValue;
        }
    }
}

/**
 * Draw description
*/
function detectSpeed(previousSpeed) {
    if (previousSpeed !== 0) {
        if (mouseIsPressed) {
            let currentSpeed = mouseX - previousSpeed;
            let result = Math.round(Math.abs(currentSpeed)) * 2;
            console.log(result);
            shapes.circle.width = result + 10;
            previousX = mouseX;
            noStroke();
            shapes.circle.redValue = result + 10;
            fill(shapes.circle.color);
            circle(mouseX, mouseY, shapes.circle.width);
            previousX = mouseX;

        }
    } previousX = mouseX;
}
function draw() {
    detectSpeed(previousX);
}