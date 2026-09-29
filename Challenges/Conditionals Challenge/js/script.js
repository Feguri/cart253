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
    size: 35,
    fill: "#2d2d2d",
    speed: 5,
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 25,
    fill: ("#dcdada"),
};

const target = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 55,
    fill: ("transparent"),
}

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
        if (mouseX > puck.x){
            puck.speed = -masterSpeed;
        } else if (mouseX < puck.x) {
            puck.speed = masterSpeed;
        }
        puck.x = constrain(puck.x + puck.speed, puck.size/2, width-puck.size/2);
        
        if (mouseY > puck.y) {
            puck.speed = -masterSpeed;
            // console.log(puck.speed);
        } else if (mouseY < puck.y) {
            puck.speed = masterSpeed;
            // console.log(puck.speed);
        }
        puck.y = constrain(puck.y + puck.speed, puck.size/2, height-puck.size/2);
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

function drawTarget() {
    push();
    fill(target.fill);
    drawingContext.setLineDash([8, 4]); 
    square(100, 100, target.size);

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