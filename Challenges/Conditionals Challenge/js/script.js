/**
 * Conditionals Challenge
 * Felipe Amorim & Felipe Paiva
 * 
 * This program requires the user to push the central puck towards the dashed target. The puck changes colors based on the distance between the target
 */ 

"use strict";

/**
 * The setup
*/
let masterSpeed = 5;

const puck = {
    x: 200,
    y: 200,
    size: 35,
    fill: { r: 0, g: 0, b: 255 },
    speed: 5,
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 25,
    fill: ("#dcdada"),
};

const target = {
    x: 100,
    y: 100,
    size: 55,
    fill: ("transparent"),
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

// the function move puck checks if there is an overlap between the mouse and the puck and moves the puck accordingly.
function movePuck() {
    // Calculate distances between two circles centers
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size / 2 + puck.size / 2);


    if (overlap) {
        if (mouseX > puck.x) {
            puck.speed = -masterSpeed;
        } else if (mouseX < puck.x) {
            puck.speed = masterSpeed;
        }
        puck.x = constrain(puck.x + puck.speed, puck.size / 2, width - puck.size / 2);

        if (mouseY > puck.y) {
            puck.speed = -masterSpeed;
        } else if (mouseY < puck.y) {
            puck.speed = masterSpeed;
        }
        puck.y = constrain(puck.y + puck.speed, puck.size / 2, height - puck.size / 2);
    }

}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#dcdada");

    // Move user circle
    moveUser();

    // Draw the user and puck
    drawUser();
    drawPuck();
    drawTarget();
    checkTarget();
    movePuck()

}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

// draws the target with the dashed line
function drawTarget() {
    push();
    fill(target.fill);
    drawingContext.setLineDash([6, 4]);
    rectMode(CENTER);
    square(100, 100, target.size);

    pop();
}

// checks if the puck is inside the target.
function checkTarget() {
    const d = dist(target.x, target.y, puck.x, puck.y);
    const overlap = (d < target.size / 2 + puck.size / 2);
    if (overlap) {
        target.fill = color(0);
    }
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill.r, puck.fill.g, puck.fill.b);
    ellipse(puck.x, puck.y, puck.size);
    pop();
    const d = dist(target.x, target.y, puck.x, puck.y);
    puck.fill.r = map(constrain(d, 0, 255), 0, 255, 255, 0);
    puck.fill.b = constrain(d, 0, 255);

}