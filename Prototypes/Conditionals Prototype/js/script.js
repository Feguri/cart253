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
let colorPalette;
let currColorNum = 0;

function setup() {
    createCanvas(500, 500);
    background('Black');
    colorPalette = [
        "RGB(109, 8, 8)",
        "RGB(45, 0, 0)",
        "RGB(117, 125, 111)",
        "RGB(238, 234, 215)",
    ]
    // creates Circle Object
    circleBall = {
        x: width / 2,
        y: height / 2,
        // speed is a random number between -10 and 10
        speedX: Math.floor(Math.random() * 21) - 10,
        speedY: Math.floor(Math.random() * 21) - 10,
        size: 25,
        color: colorPalette[0],
    }

    document.getElementById('seed').innerHTML = `${circleBall.speedX}/${circleBall.speedY}`;
}

function drawBall() {
    fill(circleBall.color);
    stroke(noStroke);
    // always starts in the center
    circle(circleBall.x, circleBall.y, circleBall.size);
}

function changeColor(circleColorNum) {
    if (circleColorNum > 3) {
        currColorNum = 0;
    }
    circleBall.color = colorPalette[currColorNum];
    currColorNum += 1;
}

function moveBall() {
    // different x and y speeds cause the ball to move at any direction
    circleBall.x += circleBall.speedX;
    circleBall.y += circleBall.speedY;

    if (circleBall.x >= width) {
        circleBall.speedX = -circleBall.speedX;
        changeColor(currColorNum);
    } else if (circleBall.x <= 0) {
        circleBall.speedX = -circleBall.speedX;
        changeColor(currColorNum);
    }

    if (circleBall.y >= height) {
        circleBall.speedY = -circleBall.speedY;
        changeColor(currColorNum);
    } else if (circleBall.y <= 0) {
        circleBall.speedY = -circleBall.speedY;
        changeColor(currColorNum);
    }
}

/**
 * Draw function
*/
function draw() {
    drawBall();
    moveBall();
}