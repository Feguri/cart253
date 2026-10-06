/**
 * Guess the number
 * Felipe Paiva
 * 
 * number stopping game: the user is asked to stop at the number when it reaches a specific number to score points and reach the next level
 */

"use strict";

/**
 * Setup function
*/
let colorPalette;
let randomNum;
let userNum;
function setup() {
    createCanvas(500, 500);
    background('Black');
    colorPalette = [
        "RGB(109, 8, 8)",
        "RGB(45, 0, 0)",
        "RGB(117, 125, 111)",
        "RGB(238, 234, 215)",
    ]
    randomNum = Math.floor(Math.random() * 100);
    userNum = 0;
    frameRate(12);
}

function drawCurrNum() {
    textAlign(CENTER, CENTER);

    // Set text size and color
    textSize(32);
    fill(colorPalette[3]);

    if (keyIsDown(UP_ARROW)) {
        background('Black');
        text(userNum, width / 2, height / 2);
        userNum++;
    }
    if (keyIsDown(DOWN_ARROW)) {
        background('Black');   
        text(userNum, width / 2, height / 2);
        userNum--;
    }
}

/**
 * 
*/
function draw() {
    drawCurrNum();
}