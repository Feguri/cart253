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
let maxNumOfPlanets = Math.floor(Math.random() * 5);
let planets = [];

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

function drawPlanets() {
    let distanceFromStar = 200;
    function drawPlanet(planet) {
        fill(`rgb(${planet.rgb[0]}, ${planet.rgb[1]}, ${planet.rgb[2]})`);
        noStroke();

        circle(width/2 - distanceFromStar, height/2, planet.size);
    }
    for (let i = 0; i < maxNumOfPlanets; i++) {
        drawPlanet(planets[i]);
        distanceFromStar += 70;
    }
}

function generatePlanets() {
    const planetTemplates = [
        // Rocky planets
        { planetType: "desert", geology: "rocky", rgb: [155, 40, 0], temperatureRange: [-250, 500], sizeRange: [5, 20], tidalLock: false },
        { planetType: "lush", geology: "rocky", rgb: [55, 140, 0], temperatureRange: [-20, 50], sizeRange: [10, 20], tidalLock: false },
        { planetType: "ice", geology: "rocky", rgb: [200, 230, 255], temperatureRange: [-250, 0], sizeRange: [8, 23], tidalLock: false },
        { planetType: "ocean", geology: "rocky", rgb: [20, 80, 170], temperatureRange: [-5, 60], sizeRange: [10, 25], tidalLock: false },
        { planetType: "volcanic", geology: "rocky", rgb: [90, 20, 10], temperatureRange: [150, 900], sizeRange: [4, 18], tidalLock: false },
        { planetType: "barren", geology: "rocky", rgb: [120, 115, 110], temperatureRange: [-200, 400], sizeRange: [2, 12], tidalLock: false },
        { planetType: "toxic", geology: "rocky", rgb: [150, 160, 40], temperatureRange: [50, 300], sizeRange: [6, 18], tidalLock: false },
        { planetType: "tundra", geology: "rocky", rgb: [140, 165, 150], temperatureRange: [-80, 5], sizeRange: [8, 20], tidalLock: false },
        { planetType: "swamp", geology: "rocky", rgb: [70, 90, 40], temperatureRange: [15, 45], sizeRange: [8, 18], tidalLock: false },
        { planetType: "carbon", geology: "rocky", rgb: [30, 28, 35], temperatureRange: [-50, 350], sizeRange: [5, 20], tidalLock: false },
        { planetType: "iron", geology: "metallic", rgb: [140, 90, 70], temperatureRange: [-100, 600], sizeRange: [3, 15], tidalLock: false },

        // variants with tidal locking
        { planetType: "eyeball", geology: "rocky", rgb: [110, 150, 190], temperatureRange: [-150, 80], sizeRange: [6, 20], tidalLock: true },
        { planetType: "lava", geology: "molten", rgb: [220, 70, 0], temperatureRange: [700, 2500], sizeRange: [4, 16], tidalLock: true },

        // gas giants
        { planetType: "jovian", geology: "gas", rgb: [200, 160, 120], temperatureRange: [-200, -100], sizeRange: [80, 200], tidalLock: false },
        { planetType: "saturnian", geology: "gas", rgb: [220, 200, 150], temperatureRange: [-220, -120], sizeRange: [70, 180], tidalLock: false },
        { planetType: "hot jupiter", geology: "gas", rgb: [180, 60, 90], temperatureRange: [800, 2500], sizeRange: [90, 250], tidalLock: true },
        { planetType: "cold giant", geology: "gas", rgb: [90, 120, 190], temperatureRange: [-260, -150], sizeRange: [60, 160], tidalLock: false },

        // ice giants
        { planetType: "neptunian", geology: "ice", rgb: [60, 100, 220], temperatureRange: [-230, -150], sizeRange: [30, 70], tidalLock: false },
        { planetType: "uranian", geology: "ice", rgb: [140, 220, 225], temperatureRange: [-230, -170], sizeRange: [30, 65], tidalLock: false },

        // subgiants
        { planetType: "mini-neptune", geology: "gas", rgb: [130, 170, 200], temperatureRange: [-100, 300], sizeRange: [24, 45], tidalLock: false },
        { planetType: "super-earth", geology: "rocky", rgb: [95, 120, 80], temperatureRange: [-50, 80], sizeRange: [20, 35], tidalLock: false },
    ];
    for (let i = 0; i < maxNumOfPlanets; i++) {
        const randomIndex = Math.floor(Math.random() * planetTemplates.length);
        const chosenTemplate = planetTemplates[randomIndex];
        
        const minSize = chosenTemplate.sizeRange[0];
        const maxSize = chosenTemplate.sizeRange[1];
        const planetSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
        chosenTemplate["size"] = planetSize

        const minTemp = chosenTemplate.temperatureRange[0];
        const maxTemp = chosenTemplate.temperatureRange[1];
        chosenTemplate["temperature"] = Math.floor(Math.random() * (maxTemp - minTemp + 1)) + minTemp;

        planets.push(chosenTemplate);
    }
    console.log(planets);
};

generatePlanets();
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

function drawStatsBoxStar(offsetX, boxSizeX, boxSizeY, fontSize) {
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
    drawPlanets();
    if (isMouseOver(star.positionX - star.width/2, star.positionY - star.height/2, star.width, star.height)) {
        drawStatsBoxStar(150, 230, 240, 16);
    };
    // for (let i = 0; i < maxNumOfPlanets; i++) {
    //     if (isMouseOver(planets[i])) {

    //     }
    // }
}