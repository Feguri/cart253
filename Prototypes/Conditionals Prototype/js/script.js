/**
 * Bouncing art
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
// declares circleBall variable globally, as well as colorPalette and currColorNum (for changing the colors within the palette)
let circleBall;
let colorPalette;
let currColorNum = 0;

// setup creates the canvas, sets the background to black, updates global var "color Palette" with an RBG list, updates the var "circleBall" with an object which contains the circle data, including its starting position, color, size, and speed.
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
        speedX: Math.floor(Math.random() * 41) - 20,
        speedY: Math.floor(Math.random() * 41) - 20,
        size: 25,
        color: colorPalette[0],
    }

    // creates a form variable to get the input data if the user prefers a manual seed
    const form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        background('Black');
        const formData = new FormData(event.target);
        circleBall.speedX = Number(formData.get('inputX'));
        circleBall.speedY = Number(formData.get('inputY'));
        circleBall.x = width / 2;
        circleBall.y = height / 2;

        // if statement for a little surprise
        if (circleBall.speedX == 0 && circleBall.speedY == 0) {
            document.getElementById('seed').innerHTML = `... a little stagnant: ${circleBall.speedX}/${circleBall.speedY}`;
        } else {
            document.getElementById('seed').innerHTML = `${circleBall.speedX}/${circleBall.speedY}`;
        }
    });
    // if statement for a little surprise ... if you got it randomly. I hate to repeat code, but I ran out of brain effort to make it cleaner
    if (circleBall.speedX == 0 && circleBall.speedY == 0) {
        document.getElementById('seed').innerHTML = `... a little stagnant: ${circleBall.speedX}/${circleBall.speedY}`;
    } else {
        document.getElementById('seed').innerHTML = `${circleBall.speedX}/${circleBall.speedY}`;
    }
}

// function that actually draws the ball
function drawBall() {
    fill(circleBall.color);
    noSmooth();
    // always starts in the center
    circle(circleBall.x, circleBall.y, circleBall.size);
}

// changes the color of the circle if activated
function changeColor(circleColorNum) {
    if (circleColorNum > 3) {
        currColorNum = 0;
    }
    circleBall.color = colorPalette[currColorNum];
    currColorNum += 1;
}

// moves the ball and simply changes the x and y speeds if it hits the top, left, right or bottom of the canvas
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