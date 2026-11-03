/**
 * Falling Confetti
 * Felipe Paiva
 * 
 * Makes an array of small objects, each with its own x, y, speed, size, and color. Every frame, it loops through the array to move and draw each piece. When a piece falls off the bottom, it send it back to the top at a new random x.
 */

"use strict";

const backgroundColor = "rgb(218, 220, 220)";
let fallingObjects = [];

// creates the canvas, then makes objects (in a rage between 30 and 500), and adds those objects with random parameters into the fallingObjects array.
function setup() {
    createCanvas(800, 600);

    let totalObjects = floor(random(30, 501));

    for (let i = 0; i < totalObjects; i++) {
        fallingObjects.push({
            x: random(0, width),
            y: random(-height, 0), 
            speed: random(1, 5),
            size: random(10, 25),
            color: color(random(255), random(255), random(255)),
        });
    }
    noStroke();
}

// simply draws an object based on position, size, x and y. it also uses the object's color.
function drawObject(obj) {
    push();
    fill(obj.color);
    rect(obj.x, obj.y, obj.size, obj.size);
    pop();
}

/**
 * draws all of the confettis using a for loop based on the falling objects length. Makes the object fall by increasing the speed with the fall
*/
function draw() {
    background(backgroundColor);
    for (let i = 0; i < fallingObjects.length; i++) {
        let obj = fallingObjects[i];
        // makes it fall
        obj.y += obj.speed;

        // reset at the top with a random position
        if (obj.y > height) {
            obj.y = random(-50, 0);
            obj.x = random(0, width);
        }

        drawObject(obj);
    }
}