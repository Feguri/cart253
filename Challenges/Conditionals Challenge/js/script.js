/**
 * Conditionals Challenge
 * Felipe Amorim & Felipe Paiva
 * 
 */

"use strict";

/**
 * The setup
*/
let masterSpeed = 5;

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#991e1e",
    fills: {
        noOverlap: "#991313", // red for no overlap
        overlap: "#137e13" // green for overlap
    },
    speed: 5,
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000",
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

function movePuck() {
    // Calculate distances between two circles centers
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size/2 + puck.size/2);

    if (overlap) {
        puck.fill = puck.fills.overlap;
        if (mouseX > puck.x){
            puck.speed = -masterSpeed;
        } else if (mouseX < puck.x) {
            puck.speed = masterSpeed;
        }
        puck.x += puck.speed;
        
        if (mouseY > puck.y) {
            puck.speed = -masterSpeed;
            // console.log(puck.speed);
        } else if (mouseY < puck.y) {
            puck.speed = masterSpeed;
            // console.log(puck.speed);
        }
        puck.x += puck.speed;
    } else {
        puck.fill = puck.fills.noOverlap;
    }

}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#272323");

    // Move user circle
    moveUser();

    // Draw the user and puck
    drawUser();
    drawPuck();
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

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}