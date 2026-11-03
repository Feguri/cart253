/**
 * Mouse trail log -> Worm Simulator???
 * Felipe Paiva
 * 
 * Each time the mouse moves, it stores its position in an array. Then it draws a circle at every stored position, and once the array reaches a set length (say 40), it removes the oldest entry so the trail follows the cursor and fades out. Makes older points smaller or more transparent based on their index.
 */

"use strict";
// global variables: background color and circle color..
const backgroundColor = "rgb(56, 35, 9)";
let circleColor = "rgb(218, 170, 98)";

let mouseXY = [];
/**
 * Creates the canvas
*/
function setup() {
    createCanvas(800, 600);
    background(backgroundColor);
    noStroke();
}

// draws a circle using x and y positions
function drawCircle(x, y) {
    push();
    fill(circleColor);
    circle(x, y, 50);
    pop();
}

// erases a circle based on its x and y position
function eraseCircle(x, y) {
    erase(); 
    circle(x, y, 50); 
    noErase(); 
}

function restoreDirt(x, y) {
    
}   
/**
 * draws. circle based on mouse position while also pushing it into the mouseXY array. If the length of the array is above 50, it will always delete the last one using the .shift() function. Then it will draw all circles in the array using a for loop.
*/
function draw() {
    drawCircle(mouseX, mouseY);
    mouseXY.push([mouseX, mouseY]);
    if (mouseXY.length > 50) {
        let oldest = mouseXY.shift(); 
        eraseCircle(oldest[0], oldest[1]);
    }
    for (let i = 0; i < mouseXY.length; i++) {
        let pos = mouseXY[i];
        drawCircle(pos[0], pos[1]);
    }
}