/**
 * Fortune machine
 * Felipe Paiva
 * 
 * A button-driven generator that produces randomized “cards” (fortunes, potion recipes, band names, or alien species) made of several parts. Small functions each return one piece of data: a random name, a random color from your palette, a random rarity. A bigger function combines them and returns one complete card object. Another function takes a card object and draws it, so the data and the drawing stay separate.
 */

"use strict";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
let backgroundColor = "rgb(24, 10, 1)";
const cardBackgroundColor = "rgb(79, 34, 6)";
const textColor = "rgb(246, 237, 232)";
let pixelFont;
/**
 * Setup Description
*/
function drawFortuneCard(
    x,
    y,
    cardWidth,
    cardHeight,
    stroke,
    background,
    font,
    fontSize,
    textColor,
    title,
) {
    push();
    // draws the card rectangle
    fill('white');
    rect(x, y, cardWidth, cardHeight);

    // draws the card
    fill(background);
    rect(x, y, cardWidth - stroke, cardHeight - stroke);
    
    // draws the text inside of the card
    textSize(fontSize);
    textFont(font);
    fill(textColor);
    // title
    text(title, x - (x/8), y - (y/3));
    pop();
}

// loads the pixel font style for typography
function preload() {
    pixelFont = loadFont('assets/fonts/pixelated.ttf');
}

function setup() {
    rectMode(CENTER);
    createCanvas(canvasWidth, canvasHeight);
}


/**
 * Draw description
*/
function draw() {
    background(backgroundColor);
    drawFortuneCard(
        canvasWidth / 2, // x
        canvasHeight / 2, // y
        300, // card width
        400, // card height
        15, // stroke
        cardBackgroundColor, // bakcground color
        pixelFont, // font
        15, // font size
        textColor, //textColor
        "Fortune Card 1", // title
    );
}