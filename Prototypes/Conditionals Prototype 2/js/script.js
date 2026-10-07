/**
 * Number stopper
 * Felipe Paiva
 * 
 * number stopping game: the user is asked to stop at the number when it reaches a specific number to score points and reach the next level
 */

"use strict";

// declaring all global variables to be used in the program
let colorPalette;
let userNum;
let currLevel = 1;
let gameSpeed = 12; 
let limit = 100;
/**
 * Setup function sets up the color palette, background, canvas size, usernum, framerate, and rectMode
*/
function setup() {
    createCanvas(500, 500);
    background('Black');
    colorPalette = [
        "RGB(109, 8, 8)",
        "RGB(45, 0, 0)",
        "RGB(117, 125, 111)",
        "RGB(238, 234, 215)",
    ]
    userNum = 0;
    frameRate(gameSpeed);
    rectMode(CENTER);
}

// draws the current number that the user needs to pay attention to when hitting spacebar
function drawCurrNum() {
    textAlign(CENTER, CENTER);
    // Set text size and color
    textSize(16);
    fill(colorPalette[3]);
    text(`Press the spacebar when it reaches ${limit}: Level ${currLevel}`, width / 2, 20);
    // function detects mouse press and dictates what to do whether or not there is a press
    function stopNum() {
        if (key === ' ') {
            if (userNum == limit) {
                currLevel++;
                gameSpeed += 10;
            }
            userNum = 0;
            background('black');
        } else {
            fill('black');
            square(width/2, height/2, 100);
            fill('white');
            textSize(40);
            text(userNum, width / 2, height / 2);
            userNum++;
        }
    }
    stopNum();
}

/**
 * 
*/
function draw() {
    drawCurrNum();
}