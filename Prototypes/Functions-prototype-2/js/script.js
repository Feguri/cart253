/**
 * Fortune machine
 * Felipe Paiva
 * 
 * A button-driven generator that produces randomized “cards” (fortunes, potion recipes, band names, or alien species) made of several parts. Small functions each return one piece of data: a random name, a random color from your palette, a random rarity. A bigger function combines them and returns one complete card object. Another function takes a card object and draws it, so the data and the drawing stay separate.
 */

"use strict";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
const r = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
const g = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
const b = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
const backgroundColor = `rgb(${Math.floor(r - r / 2)}, ${Math.floor(g - g/2)}, ${Math.floor (b - b/2)})`;
console.log(r - r / 2);
const cardBackgroundColor = `rgb(${r}, ${g}, ${b})`;
const textColor = `rgb(246, 237, 232)`;
const strokeColor = `rgb(246, 237, 232)`;
let pixelFont;

const fortuneObjects = {
    magicStones: {
        commonStones: [
            "spadow",
            "sphynx",
            "cornelious",
            "abraham",
            "dragsten",
            "sparklows",
            "amerix",
            "cardoush",
            "yoklow",
            "jaminix"
        ],
        rareStones: [
            "pendragon",
            "amerix",
            "glownatrax",
            "galliardo",
        ],
        ultraRareStones: [
            "spanxlow"
        ],
        impossible: [
            "wuyowa"
        ]
    },
    powers: {
        // power: damage
        commonPowers: {
            shadow: 40,
            sponk: 50,
            drawg: 13,
        },
        rarePowers: {
            grapple: 67,
            casticize: 80,
            galvazprinx: 100,
            "gluon array": 200,
            "sparker grind": 156,
        }
    },
    order: {
        commonOrders: [
            "smiths",
            "sphynxs",
            "shallows",
            "gravestones union",
            "galeccia family",
            "cascadia",
            "klorence army",
            "vegetables",
            "caned",
        ],
        rareOrders: [
            "sparxiax galactic",
            "cullmanstox",
            "imperial family",
            "clarxmaidens"
        ],
        ultraRareOrders: [
            "royal family",
            "ultimum",
            "glass'o corp.",
            "sp4ti4l 4n0m4ly",
        ]
    }
};
/**
 * Setup Description
*/
function drawFortuneCard(
    x,
    y,
    cardWidth,
    cardHeight,
    stroke,
    strokeColor,
    background,
    font,
    fontSize,
    textColor,
    title,
    firstFortune,
    firstFortuneResult,
) {
    push();
    // draws the card rectangle
    fill(strokeColor);
    rect(x, y, cardWidth, cardHeight);

    // draws the card
    fill(background);
    rect(x, y, cardWidth - stroke, cardHeight - stroke);
    
    // draws the text inside of the card
    textSize(fontSize);
    textFont(font);
    fill(textColor);
    // title
    text(title, x - (x/8), y - (y/2));
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
        350, // card width
        550, // card height
        15, // stroke
        strokeColor, // stroke color
        cardBackgroundColor, // bakcground color
        pixelFont, // font
        15, // font size
        textColor, //textColor
        "Fortune Card 1", // title
        "Magic Stone: ", // title of first fortune
    );
}