/**
 * Title of Project
 * Felipe Paiva
 * 
 * Bouncing ball with edge detection!
 * A circle bounces across the canvas on its own, and when it hits an edge, it changes direction.
 * and if statement is used to assess whether or not the ball has hit a boundary, and from which direction.
 */

"use strict";

/**
 * Setup function
*/
// declares circleBall variable globally
let circleBall;

function setup() {
    createCanvas(500, 500);
    background('Black');
    // creates Circle Object
    circleBall = {
        x: width / 2,
        y: height / 2,
        speed: 2,
        size: 25,
        color: 'white',
    }
}


function drawBall() {
    fill(circleBall.color);
    stroke(0);
    // always starts in the center
    circle(circleBall.x, circleBall.y, circleBall.size);
}

/**
 * Draw function
*/
function draw() {
    drawBall();
}