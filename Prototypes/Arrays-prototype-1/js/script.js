/**
 * Color stripes
 * Felipe Paiva
 * 
 * Stores 5 to 8 colors in an array and draw them as vertical stripes across the canvas. Clicking cycles which color is “selected” and highlights that stripe, and pressing a key swaps two colors or reverses the array.
 */

"use strict";
const backgroundColor = "rgb(218, 220, 220)";
let currentColorIndex = 0;

const colors = ["rgb(151, 213, 213)", "rgb(149, 226, 163)", "rgb(224, 160, 212)", "rgb(222, 170, 170)", "rgb(189, 171, 240)", "rgb(228, 225, 168)", "rgb(173, 232, 208)", "rgb(232, 203, 171)",];
/**
 * 
*/

function drawColor(color, indexNumber) {
    push();
    if (indexNumber === currentColorIndex) {
        stroke('red');
        strokeWeight(5);
    } else {
        noStroke();
    }
   
    fill(color);
    rect(indexNumber * 50 + 20, height - 450, 30, 400);
    pop();
}

function setup() {
    createCanvas(1000, 500);
}

function mouseClicked() {
    if (currentColorIndex < colors.length) {
        currentColorIndex++;
    } else {
        currentColorIndex = 0;
    }
}

/**
 * 
*/
function draw() {
    background(backgroundColor);
    for (let i = 0; i < colors.length; i++) {
        drawColor(colors[i], i);
    }
}