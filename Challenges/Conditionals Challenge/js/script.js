/**
 * Conditionals Challenge
 * Felipe Amorim & Felipe Paiva
 * 
 * 
 */

"use strict";

/**
 * The setup
*/
let img = undefined;

async function preload() {
    img = await loadImage("./assets/images/clown.png")
}

async function setup() {
    createCanvas(640, 640);

    await preload();
}

/**
 * 
*/
function draw() {
    background(0);
    push();
    fill(255, 0, 0);
    stroke(0, 0, 0);
    text("hello", 130, 130, 150, 150);
    image(img, 300, 300);
    pop();
}