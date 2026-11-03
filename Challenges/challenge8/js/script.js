/**
 * Lines
 * Felipe Paiva,konstantinos christodoulakis, Felipe Amorim
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("darkblue");
    let lineX = 0;
    let str = 25;
    let strokeR = 0;
    let strokeG = 0;
    let strokeB = 0;
    let strokeWeightValue = 0.00;

    while (lineX <= height && str <= width) {
        lineX += 5;
        str += 3;
        strokeR += 1;
        strokeG += 2;
        strokeB += 2;

        strokeWeight(strokeWeightValue);
        stroke(`rgb(${strokeR}, ${strokeG}, ${strokeB})`);
        strokeWeightValue += 0.01;
        line(lineX, 0, 0, height);
        line(0, 0, width, lineX);
    }

    // let gradientLineX = 0;

    // for (let i = 0; i < width; i++){

    //     line(gradientLineX, 0, 4, height);
    //     gradientLineX++;

    // }
}