/**
 * Orbit Garden
 * Felipe Paiva
 * 
 * A canvas full of small “planets” orbiting a central point, but there’s only one drawPlanet-style function. Every planet gets its own orbit radius, speed, size, color, and maybe a number of moons, all passed in as arguments. Clicking adds a new planet with random settings, and hovering over one highlights it.
 */

"use strict";
const formatter = new Intl.NumberFormat('en-US');
let backgroundColor;

function drawStar() {
    const star = generateRandomStar();
    console.log(star.age);
    fill(`rgb(${star.rgb[0]}, ${star.rgb[1]}, ${star.rgb[2]})`);
    circle(width / 2, height / 2, star.size);
}

function generateRandomStar() {
    const starTemplates = [
        { colorName: "red", rgb: [255, 69, 0] },
        { colorName: "orange", rgb: [255, 140, 0] },
        { colorName: "yellow", rgb: [255, 215, 0] },
        { colorName: "blue", rgb: [30, 144, 255] }
    ];

    // gets a random star template object
    const randomIndex = Math.floor(Math.random() * starTemplates.length);
    const chosenTemplate = starTemplates[randomIndex];
    const size = Math.floor(Math.random() * 120) + 50;
    let age = formatter.format(Math.floor(Math.random() * 11200000000))

    return {
        colorName: chosenTemplate.colorName,
        rgb: chosenTemplate.rgb,
        size: size,
        age: age,
    };
}


/**
 * Setup Description
*/
function setup() {
    backgroundColor = "rgb(2, 0, 10)";
    const width = window.innerWidth;
    const height = window.innerHeight;
    createCanvas(width, height);
    background(backgroundColor);
    rectMode(CENTER);
    drawStar();
}


/**
 * Draw description
*/
function draw() {

}