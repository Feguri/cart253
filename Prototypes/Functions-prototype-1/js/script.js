/**
 * Orbit Garden
 * Felipe Paiva
 * 
 * A canvas full of small “planets” orbiting a central point, but there’s only one drawPlanet-style function. Every planet gets its own orbit radius, speed, size, color, and maybe a number of moons, all passed in as arguments. Clicking adds a new planet with random settings, and hovering over one highlights it.
 */

"use strict";
const formatter = new Intl.NumberFormat('en-US');
let backgroundColor;

let pixelFont;

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function preload() {
    pixelFont = loadFont('assets/fonts/pixelated.ttf');
}

function generateRandomStar() {
    const starTemplates = [
        { colorName: "red", rgb: [255, 69, 0], temperatureRange: [1700, 3600]},
        { colorName: "orange", rgb: [255, 140, 0], temperatureRange: [3400, 4900] },
        { colorName: "yellow", rgb: [255, 215, 0], temperatureRange: [4900, 5700] },
        { colorName: "blue", rgb: [30, 144, 255], temperatureRange: [9700, 30000] }
    ];

    // gets a random star template object
    const randomIndex = Math.floor(Math.random() * starTemplates.length);
    const chosenTemplate = starTemplates[randomIndex];
    const size = Math.floor(Math.random() * 150) + 50;
    let age = formatter.format(Math.floor(Math.random() * 11200000000))
    let temperature = formatter.format(Math.floor(Math.random() * (starTemplates[randomIndex].temperatureRange[1] - starTemplates[randomIndex].temperatureRange[0] + 1)) + starTemplates[randomIndex].temperatureRange[0]);
    return {
        colorName: chosenTemplate.colorName,
        rgb: chosenTemplate.rgb,
        size: size,
        age: age,
        positionX: window.innerWidth / 2,
        positionY: window.innerHeight / 2,
        height: size,
        width: size,
        temperature: temperature,
    };
}
let star = generateRandomStar();
function drawStar() {
    fill(`rgb(${star.rgb[0]}, ${star.rgb[1]}, ${star.rgb[2]})`);
    circle(star.positionX, star.positionY, star.size);
}


/**
 * Setup Description
*/
function setup() {
    backgroundColor = "rgb(2, 0, 10)";
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    createCanvas(canvasWidth, canvasHeight);
    background(backgroundColor);
    rectMode(CENTER);
}

function isMouseOver(x, y, w, h) {
    return (
        mouseX >= x &&    
        mouseX <= x + w &&
        mouseY >= y &&    
        mouseY <= y + h   
    );
}

/**
 * Draw description
*/

// main mechanic of drawstatsbox is to display a text background with text information in it, with dynamic position during the page.

function drawStatsBox(offsetX, boxSizeX, boxSizeY, fontSize) {
    textSize(fontSize);
    fill('white');
    noStroke();
    rect(mouseX + offsetX, mouseY, boxSizeX, boxSizeY);
    fill('black');
    rect(mouseX + offsetX, mouseY, boxSizeX-10, boxSizeY-10);
    fill('white');
    textFont(pixelFont); 
    text("Star Age:", mouseX + offsetX / 2 - 20, mouseY - 80);
    fill(star.colorName);
    text(String(star.age) + " years", mouseX + offsetX / 2 - 20, mouseY - 50);
    fill('white');
    text("Star Type:", mouseX + offsetX / 2 - 20, mouseY - 20);
    if (star.size > 170) {
        fill(star.colorName);
        text(capitalize(star.colorName) + " giant", mouseX + offsetX / 2 - 20, mouseY + 10);
    } else if (star.size > 100) {
        fill(star.colorName);
        text(capitalize(star.colorName), mouseX + offsetX / 2 - 20, mouseY + 10);
    } else {
        fill(star.colorName);
        text(capitalize(star.colorName) + " dwarf", mouseX + offsetX / 2 - 20, mouseY + 10);
    }
    fill('white');
    text("Temperature:", mouseX + offsetX / 2 - 20, mouseY + 40);
    fill(star.colorName);
    text(star.temperature + "°C", mouseX + offsetX / 2 - 20, mouseY + 70);
}

function draw() {
    background(backgroundColor);
    drawStar();
    if (isMouseOver(star.positionX - star.width/2, star.positionY - star.height/2, star.width, star.height)) {
        drawStatsBox(150, 230, 240, 16);
    };
}