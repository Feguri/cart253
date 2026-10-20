/**
 * The needy Creature
 * Felipe Paiva
 * 
 *A small character that reacts to things happening to the page, not just the cursor. It follows or avoids your mouse depending on its mood, falls asleep if you do nothing for 10 seconds, gets lonely and changes its look when you switch to another tab, and gets startled when you resize the window (its "room" just changed).
 */

"use strict";

/**
 * Description of Setup
*/
let catNormal;
let catAngry;
let catAnnoyed;
let catSad;
let catSleepy;
let catWorried;

const catSize = 250;
const groundColor = "rgb(9, 40, 41)"
const width = window.innerWidth;
const height = window.innerHeight;

let timeWithoutInput = 0;

async function setup() {
    createCanvas(width, height);
    catNormal = await loadImage('assets/images/normal.png');
    catAngry = await loadImage('assets/images/angry.png');
    catAnnoyed = await loadImage('assets/images/annoyed.png');
    catSad = await loadImage('assets/images/sad.png');
    catSleepy = await loadImage('assets/images/sleepy.png');
    catWorried = await loadImage('assets/images/worried.png');
    frameRate(60);
}

function drawGround() {
    rectMode(CENTER);
    noStroke();
    fill(groundColor);
    rect(width / 2, (height / 2) + (catSize + 65), width, (height/2) - 75);
}
/**
 * Draw description
*/
// draw normal face cat
function drawNormalCat() {
    imageMode(CENTER);
    image(catNormal, width / 2, height / 2, catSize, catSize);
}
function draw() {
    background(170);
    drawNormalCat();
    drawGround();
    // modulo of 60, meaning it will only run once it encounters a multiple of 60 (once per second)
    if (frameCount % 60 === 0) {
        timeWithoutInput++;
        console.log(timeWithoutInput);
    }
}